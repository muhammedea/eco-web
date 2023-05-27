import { ref, watch } from 'vue';
import { ethers } from 'ethers';
import useWeb3Store from '@/store/web3';
import { getContract, getContractAddress } from '@/utils/contracts';
import config from '@/config';
import { createLoadingContext } from '@/services/loadingDialogService';
import * as DialogService from '@/services/dialogService';
import { handleTransaction } from '@/utils/helpers';
import { getERC20AssetData, signOrder } from '@/utils/orderUtils';

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
  const currentPrice = ref('1.0');

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
      const contractTokenA = getContract(`Token_${pair.tokenA.symbol}`);
      const contractTokenB = getContract(`Token_${pair.tokenB.symbol}`);

      isLoading.value = true;
      const promises = [
        contractTokenA.allowance(web3Store.account, getContractAddress('OrderbookERC20Proxy')),
        contractTokenB.allowance(web3Store.account, getContractAddress('OrderbookERC20Proxy')),
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
    let signer;
    if (web3Store.account) {
      signer = web3Store.provider.getSigner();
    } else {
      throw new Error('NO_ACCOUNT');
    }

    let result = null;
    const loadingContext = createLoadingContext('Waiting for signature...', 'Please sign the order. This will not trigger a blockchain transaction or cost any gas fees.');
    try {
      const makerAmountBn = ethers.BigNumber.from(makerAssetAmount);
      const takerAmountBn = ethers.BigNumber.from(takerAssetAmount);
      const makerFeeBn = makerAmountBn.mul(20).div(10000);
      const takerFeeBn = takerAmountBn.mul(20).div(10000);

      const orderData = {
        makerAddress: await signer.getAddress(),
        takerAddress: ethers.constants.AddressZero,
        feeRecipientAddress: '0x527aE0F5388cFE7661DdaabE6D5B2aC18658eB97',
        senderAddress: ethers.constants.AddressZero,
        makerAssetAmount: makerAmountBn.sub(makerFeeBn).toString(),
        takerAssetAmount: takerAmountBn.sub(takerFeeBn).toString(),
        makerFee: makerFeeBn.toString(),
        takerFee: takerFeeBn.toString(),
        expirationTimeSeconds: (Math.floor(Date.now() / 1000) + (90 * 86400)).toString(),
        salt: Date.now().toString(),
        makerAssetData: getERC20AssetData(makerTokenAddress),
        takerAssetData: getERC20AssetData(takerTokenAddress),
        makerFeeAssetData: getERC20AssetData(makerTokenAddress),
        takerFeeAssetData: getERC20AssetData(takerTokenAddress),
      };
      const signature = await signOrder(orderData, signer, pair.chainId);

      loadingContext.setTitle('Submitting Order...');
      loadingContext.setDescription('');

      const contractExchange = getContract('OrderbookExchange');
      const [orderStatus/* orderHash, orderTakerAssetFilledAmount */] = await contractExchange.getOrderInfo(orderData);
      console.log('orderStatus', orderStatus);
      if (orderStatus === 3) {
        console.log('Order is fillable');
      }

      result = await fetch(`${config.API_URL}/orderbook/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pairId: pair.id,
          ...orderData,
          signature,
          verifyingContract: getContractAddress('OrderbookExchange'),
        }),
      });
      DialogService.successToast('Order Submitted.');
    } catch (e) {
      debugger;
      console.log({ e });
      DialogService.error('Submitting order failed. Please try again later.');
    } finally {
      loadingContext.destroy();
    }
    loadData();
    return result;
  }

  async function createBuyOrder(amount, total) {
    // the amount the maker is selling of maker asset (token B)
    const makerAssetAmount = ethers.utils.parseEther(total);
    // the amount the maker wants of taker asset (token A)
    const takerAssetAmount = ethers.utils.parseEther(amount);

    return createAndSendOrder(pair.tokenB.contractAddress, pair.tokenA.contractAddress, makerAssetAmount, takerAssetAmount);
  }

  async function createSellOrder(amount, total) {
    // the amount the maker is selling of maker asset (token B)
    const makerAssetAmount = ethers.utils.parseEther(amount);
    // the amount the maker wants of taker asset (token A)
    const takerAssetAmount = ethers.utils.parseEther(total);

    return createAndSendOrder(pair.tokenA.contractAddress, pair.tokenB.contractAddress, makerAssetAmount, takerAssetAmount);
  }

  async function marketSellWithInputAmount(orderType, amount) {
    let signer;
    if (web3Store.account) {
      signer = web3Store.provider.getSigner();
    } else {
      throw new Error('NO_ACCOUNT');
    }

    let result = null;
    const loadingContext = createLoadingContext('Best orders are being selected...');
    try {
      const response = await fetch(`${config.API_URL}/orderbook/selectOrdersForFill`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          takerAddress: await signer.getAddress(),
          orderType,
          pairId: pair.id,
          amount: ethers.utils.parseEther(amount).toString(),
        }),
      });
      const selectedOrders = await response.json();

      if (!selectedOrders || !selectedOrders.length) {
        throw new Error('NO_ORDER_SELECTED');
      }

      loadingContext.setTitle('Waiting for confirmation...');
      loadingContext.setDescription('Please confirm the market action on your wallet.');

      const contractExchange = getContract('OrderbookExchange');
      if (selectedOrders.length === 1) {
        result = await handleTransaction(
          contractExchange.fillOrder(selectedOrders[0], amount, selectedOrders[0].signature),
          loadingContext,
        );
      }
      if (selectedOrders.length > 1) {
        result = await handleTransaction(
          contractExchange.marketSellOrdersNoThrow(selectedOrders, amount, selectedOrders.map((o) => o.signature)),
          loadingContext,
        );
      }
    } catch (e) {
      debugger;
      console.log({ e });
      DialogService.error('Market action failed.');
    } finally {
      loadingContext.destroy();
    }
    loadData();
    return result;
  }

  async function approveToken(tokenSymbol) {
    let result = null;
    const loadingContext = createLoadingContext('Waiting for confirmation...', `Please confirm that you give permission to Ecolarium for using ${tokenSymbol} token.`);
    try {
      const contractToken = getContract(`Token_${tokenSymbol}`);
      result = await handleTransaction(
        contractToken.approve(getContractAddress('OrderbookERC20Proxy'), ethers.constants.MaxInt256),
        loadingContext,
      );
    } catch (e) {
      console.error(e);
      DialogService.error('Approve failed. Please try again later.');
    } finally {
      loadingContext.destroy();
    }
    loadData();
    return result;
  }
  async function approveTokenA() {
    const result = await approveToken(pair.tokenA.symbol);
    if (result) {
      isApprovedTokenA.value = true;
    }
    return result;
  }
  async function approveTokenB() {
    const result = await approveToken(pair.tokenB.symbol);
    if (result) {
      isApprovedTokenB.value = true;
    }
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
    marketSellWithInputAmount,
    approveTokenA,
    approveTokenB,
    currentPrice,
    loadData,
  };
  cache[`pair_${pair.id}`] = service;
  return service;
}
