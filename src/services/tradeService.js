import { ref, watch } from 'vue';
import { ethers } from 'ethers';
import useWeb3Store from '@/store/web3';
import { getContract, getContractAddress } from '@/utils/contracts';
import { MetamaskSubprovider } from '@0x/subproviders';
import { LimitOrder, OrderStatus, SignatureType } from '@0x/protocol-utils';

const cache = {};

export default function useTradeService(pair) {
  if (cache[`pair_${pair.id}`]) {
    console.log('from cache');
    cache[`pair_${pair.id}`].loadData();
    return cache[`pair_${pair.id}`];
  }
  console.log('No cache');

  const isLoading = ref(false);
  const error = ref(null);
  const isApprovedTokenA = ref(false);
  const isApprovedTokenB = ref(false);
  const balanceTokenA = ref(ethers.BigNumber.from(0));
  const balanceTokenB = ref(ethers.BigNumber.from(0));

  const web3Store = useWeb3Store();

  // let lastLoadTime = 0;
  // TODO: optimize loading times
  // TODO: cancellation logic should be implemented
  function loadData() {
    console.log('loadData', web3Store.account);
    if (!web3Store.isWalletConnected || !web3Store.account) {
      return;
    }
    if (!isLoading.value) {
      console.log(web3Store.provider);
      const contractTokenA = getContract(`Token_${pair.tokenA.symbol}`);
      const contractTokenB = getContract(`Token_${pair.tokenB.symbol}`);

      console.log(contractTokenA);
      isLoading.value = true;
      const promises = [
        contractTokenA.allowance(web3Store.account, getContractAddress('ExchangeProxy')),
        contractTokenB.allowance(web3Store.account, getContractAddress('ExchangeProxy')),
        contractTokenA.balanceOf(web3Store.account),
        contractTokenB.balanceOf(web3Store.account),
      ];
      Promise.all(promises)
        .then(([allowanceTokenA, allowanceTokenB, balanceResultTokenA, balanceResultTokenB]) => {
          console.log(allowanceTokenA.gt(0));
          console.log(allowanceTokenB.gt(0));
          console.log(balanceResultTokenA);
          console.log(balanceResultTokenB);
          isApprovedTokenA.value = allowanceTokenA.gt(0);
          isApprovedTokenB.value = allowanceTokenB.gt(0);
          balanceTokenA.value = balanceResultTokenA;
          balanceTokenB.value = balanceResultTokenB;
          isLoading.value = false;
          error.value = null;
        })
        .catch((err) => {
          console.log(err);
          isLoading.value = false;
          error.value = err;
        });
    }
  }
  loadData();

  async function createAndSendOrder(makerTokenAddress, takerTokenAddress, makerAssetAmount, takerAssetAmount) {
    const orderData = {
      chainId: web3Store.chainId,
      verifyingContract: getContractAddress('ExchangeProxy'),
      maker: web3Store.account,
      taker: ethers.constants.AddressZero,
      makerToken: makerTokenAddress,
      takerToken: takerTokenAddress,
      makerAmount: makerAssetAmount.toHexString(),
      takerAmount: takerAssetAmount.toHexString(),
      takerTokenFeeAmount: '0x00',
      // sender: ethers.constants.AddressZero,
      // feeRecipient: ethers.constants.AddressZero,
      expiry: ethers.BigNumber.from(2000000000).toHexString(),
      // pool: 0,
      salt: ethers.BigNumber.from(Date.now()).toHexString(),
    };
    console.log(orderData);
    const limitOrder = new LimitOrder(orderData);

    console.log(SignatureType.EIP712);
    const supportedProvider = new MetamaskSubprovider(web3Store.web3provider);
    const signature = await limitOrder.getSignatureWithProviderAsync(
      supportedProvider,
      SignatureType.EIP712,
    );
    console.log(signature);

    const contractExchangeProxy = getContract('ExchangeProxy');
    const [orderInfo, remainingFillableAmount, isValidSignature] = await contractExchangeProxy.getLimitOrderRelevantState(
      limitOrder,
      signature,
    );
    console.log('orderInfo', orderInfo);
    console.log('remainingFillableAmount', remainingFillableAmount.toString());
    console.log('isValidSignature', isValidSignature);
    if (orderInfo.status === OrderStatus.Fillable && remainingFillableAmount.gt(0) && isValidSignature) {
      console.log('Order is fillable');
    }

    fetch('/orderbook/v1/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...limitOrder, signature }),
    });
  }

  async function createBuyOrder(amountBuyTokenA, amountSellTokenB) {
    // the amount the maker is selling of maker asset (token B)
    const makerAssetAmount = ethers.utils.parseEther(amountSellTokenB);
    // the amount the maker wants of taker asset (token A)
    const takerAssetAmount = ethers.utils.parseEther(amountBuyTokenA);

    createAndSendOrder(pair.tokenB.contractAddress, pair.tokenA.contractAddress, makerAssetAmount, takerAssetAmount);
  }

  async function createSellOrder(amountSellTokenA, amountBuyTokenB) {
    // the amount the maker is selling of maker asset (token B)
    const makerAssetAmount = ethers.utils.parseEther(amountSellTokenA);
    // the amount the maker wants of taker asset (token A)
    const takerAssetAmount = ethers.utils.parseEther(amountBuyTokenB);

    createAndSendOrder(pair.tokenA.contractAddress, pair.tokenB.contractAddress, makerAssetAmount, takerAssetAmount);
  }

  async function approveTokenA() {
    const contractTokenA = getContract(`Token_${pair.tokenA.symbol}`);
    const tx = await contractTokenA.approve(getContractAddress('ExchangeProxy'), ethers.constants.MaxInt256);
    const result = await tx.wait(1);
    isApprovedTokenA.value = true;
    loadData();
    return result;
  }
  async function approveTokenB() {
    const contractTokenB = getContract(`Token_${pair.tokenB.symbol}`);
    const tx = await contractTokenB.approve(getContractAddress('ExchangeProxy'), ethers.constants.MaxInt256);
    const result = await tx.wait(1);
    isApprovedTokenB.value = true;
    loadData();
    return result;
  }

  watch(
    () => web3Store.account,
    (newVal) => {
      if (newVal) {
        loadData();
      }
    },
  );

  const service = {
    isLoading,
    error,
    isApprovedTokenA,
    isApprovedTokenB,
    balanceTokenA,
    balanceTokenB,
    createBuyOrder,
    createSellOrder,
    approveTokenA,
    approveTokenB,
    loadData,
  };
  cache[`pair_${pair.id}`] = service;
  return service;
}
