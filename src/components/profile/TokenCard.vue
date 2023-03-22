<template>
  <div class="flex gap-2 center justify-between border rounded-md p-4">
    <div class="flex items-center gap-3">
      <span class="w-10 h-10 border rounded-full flex items-center justify-center p-2">
        <img src="@/assets/images/ampl.svg" alt="project-logo" />
      </span>
      <div class="flex flex-col text-baes-leading-5 leading-10 font-bold text-Black-and-White-Black">
        {{ props.tokenSymbol }}
        <p class="text-sm leading-6 text-Grayscale-Grey-3 font-normal">
          Total <span class="font-semibold">{{ formatAmount(balance.add(stakeService.userStakeAmount.value)) }}</span>
        </p>
      </div>
    </div>
    <div class="flex items-center gap-5">
      <div class="flex flex-col text-Color-Code-Green">
        <p class="text-xs">Available</p>
        <p class="text-xl leading-6">{{ formatAmount(balance) }}</p>
      </div>
      <div class="h-7 w-px bg-BORDER"></div>
      <div class="flex flex-col text-Grayscale-Grey-3">
        <p class="text-xs">Staked</p>
        <p class="text-xl leading-6">{{ formatAmount(stakeService.userStakeAmount.value) }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import useWeb3Store from '@/store/web3';
import { formatAmount } from '@/utils/helpers';
import { getContract } from '@/utils/contracts';
import { ethers } from 'ethers';
import useStakeService from '@/services/stakeService';

const balance = ref(ethers.BigNumber.from(0));

const props = defineProps({
  tokenSymbol: {
    type: String,
    required: true,
  },
});
console.log({ props, ts: props.tokenSymbol });

const stakeService = useStakeService(props.tokenSymbol);
const web3Store = useWeb3Store();

watch(() => (web3Store.account && web3Store.provider), (provider) => {
  if (provider) {
    const tokenContract = getContract(`Token_${props.tokenSymbol}`);
    tokenContract.balanceOf(web3Store.account).then((result) => {
      console.log(`Token_${props.tokenSymbol}`, result);
      balance.value = result;
    });
  }
});
</script>
