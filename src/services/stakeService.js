import { ref, watch } from 'vue';
import { ethers } from 'ethers';
import useWeb3Store from '@/store/web3';
import { getContract, getContractAddress } from '@/utils/contracts';

const cache = {};

export default function useStakeService(tokenSymbol) {
  if (cache[`stake_${tokenSymbol}`]) {
    // cache[`stake_${tokenSymbol}`].loadData();
    return cache[`stake_${tokenSymbol}`];
  }
  console.log('No cache');

  const isLoading = ref(false);
  const error = ref(null);
  const isTokenApproved = ref(false);
  const walletBalance = ref(ethers.BigNumber.from(0));
  const totalStakedBalance = ref(ethers.BigNumber.from(0));
  const stakePositions = ref([]);

  const web3Store = useWeb3Store();

  // let lastLoadTime = 0;
  // TODO: optimize loading times
  // TODO: cancellation logic should be implemented
  function loadData() {
    console.log('loadData stake', web3Store.account);
    if (!web3Store.isWalletConnected || !web3Store.account) {
      return;
    }
    if (!isLoading.value) {
      const contractToken = getContract(`Token_${tokenSymbol}`);
      const contractStake = getContract(`Stake_${tokenSymbol}`);

      isLoading.value = true;
      const promises = [
        contractToken.allowance(web3Store.account, getContractAddress(`Stake_${tokenSymbol}`)),
        contractToken.balanceOf(web3Store.account),
        contractStake.balanceOf(web3Store.account),
      ];
      Promise.all(promises)
        .then(([allowanceToken, balanceResultToken, stakePositionCount]) => {
          console.log(allowanceToken.gt(0));
          console.log(balanceResultToken);
          console.log(stakePositionCount);
          isTokenApproved.value = allowanceToken.gt(0);
          walletBalance.value = balanceResultToken;
          return Promise.all(
            [...Array(stakePositionCount.toNumber()).keys()]
              .map((index) => contractStake.getPositionInfoByIndex(web3Store.account, index)),
          );
        })
        .then((stakePositionsResult) => {
          console.log(stakePositionsResult);
          stakePositions.value = stakePositionsResult.map((p) => ({
            tokenId: p.tokenId,
            startDate: p.info.startDate,
            endDate: p.info.endDate,
            boost: p.info.boost,
            refAccount: p.info.refAccount,
            amount: p.info.amount,
            rewardPerTokenStart: p.info.rewardPerTokenStart,
            boostedShare: p.boostedShare,
            earnedReward: p.earnedReward,
          }));
          console.log('isLoading.value = false');
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

  async function stake(amount, dayCount) {
    const contractStake = getContract(`Stake_${tokenSymbol}`);
    const amountBn = ethers.utils.parseEther(amount);
    const tx = await contractStake.stake(amountBn, dayCount, '');
    const result = await tx.wait(1);
    loadData();
    return result;
  }

  async function restake(tokenId, withReward) {
    const contractStake = getContract(`Stake_${tokenSymbol}`);
    const tx = await contractStake.restake(tokenId, withReward, 90);
    const result = await tx.wait(1);
    loadData();
    return result;
  }

  async function exit(tokenId) {
    const contractStake = getContract(`Stake_${tokenSymbol}`);
    const tx = await contractStake.exit(tokenId);
    const result = await tx.wait(1);
    loadData();
    return result;
  }

  async function approveToken() {
    const contractToken = getContract(`Token_${tokenSymbol}`);
    const tx = await contractToken.approve(getContractAddress(`Stake_${tokenSymbol}`), ethers.constants.MaxInt256);
    const result = await tx.wait(1);
    isTokenApproved.value = true;
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
    isTokenApproved,
    walletBalance,
    totalStakedBalance,
    stakePositions,
    stake,
    restake,
    exit,
    approveToken,
    loadData,
  };
  cache[`stake_${tokenSymbol}`] = service;
  return service;
}
