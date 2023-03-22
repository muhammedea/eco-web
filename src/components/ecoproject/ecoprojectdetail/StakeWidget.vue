<template>
  <div class="w-full flex flex-col border rounded-md">
    <div class="w-full flex flex-col p-4 pb-3 gap-3">
      <div class="flex justify-between items-center font-semibold">
        <div class="flex items-end gap-1">
          <span class="text-xl leading-6 text-Black-and-White-Black">{{ formatDolar(stakeService.totalStaked.value) }}</span>
          <span class="text-xs leading-5 text-Grayscale-Grey-3 font-normal">of {{ formatDolar(stakeService.maxStakeAmount.value) }}</span>
        </div>
        <span class="text-base leading-6 text-Black-and-White-Black">{{ stakeProgress }}</span>
      </div>
      <div class="flex flex-col">
        <y-progress-bar :progress="stakeProgress" :height="12" color="#4ED8F6"></y-progress-bar>
        <div class="w-full flex items-center justify-between text-sm leading-6">
          <span class="text-Grayscale-Grey-3">3 investors</span>
          <span class="text-Color-Code-Orange">Max APR: 16%</span>
        </div>
      </div>
      <div class="h-px w-full bg-BORDER"></div>
      <div class="flex items-center justify-between">
        <div class="w-1/2-gap-6 flex flex-col gap-2">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between text-sm leading-6 text-Grayscale-Grey-3">
            <div class="flex items-center gap-1">
              <p class="capitalize"><span class="md:inline hidden">Your</span> staked amount</p>
              <y-tooltip top right class="flex items-center">
                <template #tooltip>
                  <p>Some info here</p>
                </template>
                <y-icon name="yi yi-info text-xs text-Grayscale-Grey-1"></y-icon>
              </y-tooltip>
            </div>
            <span class="text-Black-and-White-Black font-semibold text-base">{{ formatDolar(stakeService.userStakeAmount.value) }}</span>
          </div>
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between text-sm leading-6 text-Grayscale-Grey-3">
            <div class="flex items-center gap-1">
              <p class="capitalize"><span class="md:inline hidden">Your</span> share percentage</p>
              <y-tooltip top right class="flex items-center">
                <template #tooltip>
                  <p>Some info here</p>
                </template>
                <y-icon name="yi yi-info text-xs text-Grayscale-Grey-1"></y-icon>
              </y-tooltip>
            </div>
            <span class="text-Black-and-White-Black font-semibold text-base">{{ sharePercentage }}%</span>
          </div>
        </div>
        <div class="h-14 md:flex hidden w-px bg-BORDER"></div>
        <div class="w-1/2-gap-6 flex flex-col gap-2">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between text-sm leading-6 text-Grayscale-Grey-3">
            <div class="flex items-center gap-1">
              <p class="capitalize"><span class="md:inline hidden">Your</span> unclaimed reward</p>
              <y-tooltip top right class="flex items-center">
                <template #tooltip>
                  <p>Some info here</p>
                </template>
                <y-icon name="yi yi-info text-xs text-Grayscale-Grey-1"></y-icon>
              </y-tooltip>
            </div>
            <span class="text-Black-and-White-Black font-semibold text-base">{{ formatDolar(stakeService.userTotalReward.value) }}</span>
          </div>
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between text-sm leading-6 text-Grayscale-Grey-3">
            <div class="flex items-center gap-1">
              <p class="capitalize"><span class="md:inline hidden">Your</span> next claim time</p>
              <y-tooltip top right class="flex items-center">
                <template #tooltip>
                  <p>Some info here</p>
                </template>
                <y-icon name="yi yi-info text-xs text-Grayscale-Grey-1"></y-icon>
              </y-tooltip>
            </div>
            <span class="text-Black-and-White-Black font-semibold text-base">30.03.2023</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-GREY-3 border-t py-2.5 px-4 flex items-center justify-between flex-wrap">
      <div class="flex items-center gap-2 text-base leading-6 text-Grayscale-Grey-2 font-semibold">
        <img src="@/assets/icon/gift.svg" class="w-5 h-5" alt="gift-icon">
        Claim your reward
      </div>
      <button class="px-8 py-2 text-white bg-Primary-Blue rounded border border-Primary-Blue hover:bg-white hover:text-Primary-Blue transition-all duration-200">Claim All</button>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import { computed } from 'vue';
import { formatAmount, getPercentage, formatDolar } from '@/utils/helpers';
import useStakeService from '@/services/stakeService';

const props = defineProps({
  tokenSymbol: {
    type: String,
    required: true,
  },
});

const stakeService = useStakeService(props.tokenSymbol);

const sharePercentage = computed(() => {
  return getPercentage(stakeService.userStakeAmount.value, stakeService.totalStaked.value)
});

const stakeProgress = computed(() => {
  return getPercentage(stakeService.totalStaked.value, stakeService.maxStakeAmount.value)
});

// const exit = () => {
//   stakeService.exit(props.stakePosition.tokenId);
// };
</script>
