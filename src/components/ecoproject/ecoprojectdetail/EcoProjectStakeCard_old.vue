<template>
  <div class="w-full border border-Secondary-Light-Blue rounded-md flex">
    <div class="w-full flex flex-col gap-1 p-4">
      <div class="flex flex-col w-full">
        <div class="flex justify-between items-center">
          <span class="text-sm text-Grayscale-Grey-3">Amount</span>
          <span class="text-sm text-Grayscale-Grey-3">{{ lockText }}</span>
        </div>
        <span class="text-lg leading-6 text-Black-and-White-Black">{{ formatAmount(stakePosition.amount) }} {{
    tokenSymbol
}}</span>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <span class="text-xs text-Grayscale-Grey-3">Start</span>
            <div class="flex items-center gap-1 text-sm text-Grayscale-Grey-3">
              <i class="yi yi-lock" style="font-size: 16px"></i>
              <span class="text-sm text-Black-and-White-Black">{{ startDate }}</span>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <span class="text-xs text-Grayscale-Grey-3">End</span>
            <div class="flex items-center gap-1 text-sm text-Grayscale-Grey-3">
              <i class="yi yi-unlock" style="font-size: 16px"></i>
              <span class="text-sm text-Black-and-White-Black">{{ endDate }}</span>
            </div>
          </div>
        </div>
      </div>
      <y-progress-bar :progress="stakeProgress" :height="12" color="#FFC841"></y-progress-bar>
      <div class="ml-auto text-sm text-Grayscale-Grey-3">{{ leftTime }}</div>
    </div>
    <div class="w-8 bg-Secondary-Light-Blue flex flex-col justify-center items-center relative rounded-r">
      <div
        class="absolute hover:bg-Acsen-Yellow flex justify-center items-center bg-Primary-Blue transition-all duration-200 cursor-pointer w-[33px] h-8 -top-px -right-px rounded-tr-md"
        @click="exit" @keyup="exit">
        <y-tooltip top right>
          <template #tooltip>
            <p>Exit Position</p>
          </template>
          <span class="w-[33px] h-8 flex-shrink-0 flex justify-center items-center text-white"><i
              class="yi yi-more rotate-90" style="font-size: 16px"></i></span>
        </y-tooltip>
      </div>
      <div class="text-white font-bold text-lg rotate-90 flex items-center gap-2">
        <span class="-rotate-90">
          <i class="yi yi-flash -rotate-90 text-center align-middle animate-bounce"
            style="font-size: 20px; color: #f9b20c"></i>
        </span>
        <span class="">10%</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { formatAmount, formatDate } from '@/utils/helpers';
import useStakeService from '@/services/stakeService';

const props = defineProps({
  tokenSymbol: {
    type: String,
    required: true,
  },
  stakePosition: {
    type: Object,
    required: true,
  },
});

const stakeService = useStakeService(props.tokenSymbol);

const lockText = computed(() => {
  const duration = (props.stakePosition.endDate - props.stakePosition.startDate) / (60 * 60 * 24);
  if (duration < 91) {
    return '3 months lock';
  }
  if (duration < 181) {
    return '6 months lock';
  }
  if (duration < 271) {
    return '9 months lock';
  }
  return '12 months lock';
});

const startDate = computed(() => {
  const date = new Date(props.stakePosition.startDate * 1000);
  return formatDate(date);
});
const endDate = computed(() => {
  const date = new Date(props.stakePosition.endDate * 1000);
  return formatDate(date);
});

const stakeProgress = computed(() => {
  const today = Math.floor(Date.now() / 1000);
  const duration = props.stakePosition.endDate - props.stakePosition.startDate;
  const elapsed = today - props.stakePosition.startDate;
  return (elapsed * 100) / duration;
});

const leftTime = computed(() => {
  const today = Math.floor(Date.now() / 1000);
  const time = props.stakePosition.endDate - today;

  if (time < 0) {
    return 'Finished';
  }

  const months = Math.floor(time / (60 * 60 * 24 * 30));
  if (months > 0) {
    return `${months} months left`;
  }

  const days = Math.floor(time / (60 * 60 * 24)) % 30;
  if (days > 0) {
    return `${days} days left`;
  }

  const hours = Math.floor(time / (60 * 60)) % 24;
  if (hours > 0) {
    return `${hours} hours left`;
  }

  const minutes = Math.floor(time / 60) % 60;
  if (minutes > 0) {
    return `${minutes} minutes left`;
  }

  return `${time % 60} seconds left`;
});

const exit = () => {
  stakeService.exit(props.stakePosition.tokenId);
};
</script>
