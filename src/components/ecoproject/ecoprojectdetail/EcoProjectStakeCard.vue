<template>
  <div class="w-full border border-Secondary-Light-Blue rounded-md flex overflow-hidden">
    <div class="w-full flex flex-col gap-1 p-4">
      <div class="flex items-end justify-between w-full">
        <div class="flex flex-col">
          <span class="text-sm text-Grayscale-Grey-3">Amount: </span>
          <span class="text-lg leading-6 text-Black-and-White-Black">1000 ECO_ORANGE_1</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-sm text-Grayscale-Grey-3">3 months lock</span>
          <div class="flex items-center gap-1 text-sm text-Grayscale-Grey-3">
            <i class="yi yi-lock" style="font-size: 16px"></i>
            <span class="text-sm text-Black-and-White-Black">02.02.2023</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <y-progress-bar :progress="stakeProgress" :height="12" color="#FFC841"></y-progress-bar>
        <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <span class="text-sm text-Grayscale-Grey-3">Current Reward: </span>
            <span class="text-lg leading-6 text-Black-and-White-Black">50 ECO_ORANGE_1</span>
          </div>
          <div class="flex flex-col items-end">
            <div class="flex items-center gap-1 text-sm text-Grayscale-Grey-3">
              <i class="yi yi-unlock" style="font-size: 16px"></i>
              <span class="text-sm text-Black-and-White-Black">02.02.2023</span>
            </div>
            <span class="text-sm text-Grayscale-Grey-3">1 month left</span>
          </div>
        </div>
      </div>
      <div class="text-sm text-Grayscale-Grey-3">Share Percentage: %2</div>
    </div>
    <div class="w-8 bg-Secondary-Light-Blue flex justify-center items-center gap-2">
      <y-tooltip top right>
        <template #tooltip>
          <p>Boost</p>
        </template>
        <div class="text-white font-bold text-lg rotate-90 flex items-center gap-2">
          <span class="-rotate-90">
            <i
              class="yi yi-flash -rotate-90 text-center align-middle animate-bounce"
              style="font-size: 20px; color: #f9b20c"
            ></i>
          </span>
          <span class="">1.5X</span>
        </div>
      </y-tooltip>
    </div>
  </div>
</template>
<script setup>
defineProps({
  stakeProgress: {
    type: Number,
    default: 0,
  },
});
</script>
