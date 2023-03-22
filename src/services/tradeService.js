import { ref, watch } from 'vue';
import { ethers } from 'ethers';
import useWeb3Store from '@/store/web3';
import { getContract, getContractAddress } from '@/utils/contracts';
import { hexConcat, hexlify, splitSignature } from '@ethersproject/bytes';

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

  function hexLeftPad(input, bytesLength = 32) {
    const hex = ethers.BigNumber.from(input).toHexString();
    const clean = hex.substring(2);
    const missingZeros = bytesLength * 2 - clean.length;
    if (missingZeros > 0) {
      return `0x${'0'.repeat(missingZeros)}${clean}`;
    } if (missingZeros < 0) {
      return `0x${clean.substring(Math.abs(missingZeros))}`;
    }
    return `0x${clean}`;
  }
  function getERC20AssetData(tokenAddress) {
    const ERC20_PROXY_ID = '0xf47261b0';
    return hexConcat([ERC20_PROXY_ID, hexLeftPad(tokenAddress)]);
  }
  function prepareOrderSignatureFromEoaWallet(rawSignature) {
    // Append the signature type (eg. "0x02" for EIP712 signatures)
    // at the end of the signature since this is what 0x expects
    const signature = splitSignature(rawSignature);
    return hexConcat([hexlify(signature.v), signature.r, signature.s, '0x02']);
  }
  async function signOrder(order, signer) {
    const domain = {
      name: 'Ecolarium',
      version: '1',
      chainId: pair.chainId.toString(10),
      verifyingContract: getContractAddress('OrderbookExchange'),
    };

    const types = {
      Order: [
        { name: 'makerAddress', type: 'address' },
        { name: 'takerAddress', type: 'address' },
        { name: 'feeRecipientAddress', type: 'address' },
        { name: 'senderAddress', type: 'address' },
        { name: 'makerAssetAmount', type: 'uint256' },
        { name: 'takerAssetAmount', type: 'uint256' },
        { name: 'makerFee', type: 'uint256' },
        { name: 'takerFee', type: 'uint256' },
        { name: 'expirationTimeSeconds', type: 'uint256' },
        { name: 'salt', type: 'uint256' },
        { name: 'makerAssetData', type: 'bytes' },
        { name: 'takerAssetData', type: 'bytes' },
        { name: 'makerFeeAssetData', type: 'bytes' },
        { name: 'takerFeeAssetData', type: 'bytes' },
      ],
    };

    // eslint-disable-next-line
    const rawSignature = await signer._signTypedData(domain, types, order);
    const signature = prepareOrderSignatureFromEoaWallet(rawSignature);
    return signature;
  }

  async function createAndSendOrder(makerTokenAddress, takerTokenAddress, makerAssetAmount, takerAssetAmount) {
    let signer;
    if (web3Store.account) {
      signer = web3Store.provider.getSigner();
    } else {
      throw new Error('No account connected');
    }
    const makerAmountBn = ethers.BigNumber.from(makerAssetAmount);
    const takerAmountBn = ethers.BigNumber.from(takerAssetAmount);
    const makerFeeBn = makerAmountBn.mul(25).div(10000);
    const takerFeeBn = takerAmountBn.mul(25).div(10000);

    const orderData = {
      makerAddress: await signer.getAddress(),
      takerAddress: ethers.constants.AddressZero,
      feeRecipientAddress: '0x527aE0F5388cFE7661DdaabE6D5B2aC18658eB97',
      senderAddress: ethers.constants.AddressZero,
      makerAssetAmount: makerAmountBn.sub(makerFeeBn).toString(),
      takerAssetAmount: takerAmountBn.sub(takerFeeBn).toString(),
      makerFee: makerFeeBn.toString(),
      takerFee: '0',
      expirationTimeSeconds: (Math.floor(Date.now()) + (90 * 86400)).toString(),
      salt: Date.now().toString(),
      makerAssetData: getERC20AssetData(makerTokenAddress),
      takerAssetData: getERC20AssetData(takerTokenAddress),
      makerFeeAssetData: getERC20AssetData(makerTokenAddress),
      takerFeeAssetData: '0x',
    };
    const signature = await signOrder(orderData, signer);

    const contractExchange = getContract('OrderbookExchange');
    const [orderStatus, orderHash, orderTakerAssetFilledAmount] = await contractExchange.getOrderInfo(orderData);
    console.log('orderStatus', orderStatus);
    console.log('orderTakerAssetFilledAmount', orderTakerAssetFilledAmount.toString());
    console.log('orderHash', orderHash);
    if (orderStatus === 3) {
      console.log('Order is fillable');
    }

    fetch('/api/orderbook/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pairId: pair.id,
        ...orderData,
        signature,
        verifyingContract: getContractAddress('OrderbookExchange'),
      }),
    });
  }

  async function createBuyOrder(amount, total) {
    // the amount the maker is selling of maker asset (token B)
    const makerAssetAmount = ethers.utils.parseEther(total);
    // the amount the maker wants of taker asset (token A)
    const takerAssetAmount = ethers.utils.parseEther(amount);

    createAndSendOrder(pair.tokenB.contractAddress, pair.tokenA.contractAddress, makerAssetAmount, takerAssetAmount);
  }

  async function createSellOrder(amount, total) {
    // the amount the maker is selling of maker asset (token B)
    const makerAssetAmount = ethers.utils.parseEther(amount);
    // the amount the maker wants of taker asset (token A)
    const takerAssetAmount = ethers.utils.parseEther(total);

    createAndSendOrder(pair.tokenA.contractAddress, pair.tokenB.contractAddress, makerAssetAmount, takerAssetAmount);
  }

  async function approveTokenA() {
    const contractTokenA = getContract(`Token_${pair.tokenA.symbol}`);
    const tx = await contractTokenA.approve(getContractAddress('OrderbookERC20Proxy'), ethers.constants.MaxInt256);
    const result = await tx.wait(1);
    isApprovedTokenA.value = true;
    loadData();
    return result;
  }
  async function approveTokenB() {
    const contractTokenB = getContract(`Token_${pair.tokenB.symbol}`);
    const tx = await contractTokenB.approve(getContractAddress('OrderbookERC20Proxy'), ethers.constants.MaxInt256);
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
