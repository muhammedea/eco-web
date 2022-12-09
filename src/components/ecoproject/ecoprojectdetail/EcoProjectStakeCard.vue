<template>
  <div class="w-full border border-Secondary-Light-Blue rounded-md flex">
    <div class="w-full flex flex-col gap-1 p-4">
      <div class="flex flex-col w-full">
        <div class="flex justify-between items-center">
          <span class="text-sm text-Grayscale-Grey-3">Amount</span>
          <span class="text-sm text-Grayscale-Grey-3">3 months lock</span>
        </div>
        <span class="text-lg leading-6 text-Black-and-White-Black">1000 ECO_ORANGE_1</span>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <span class="text-xs text-Grayscale-Grey-3">Start</span>
            <div class="flex items-center gap-1 text-sm text-Grayscale-Grey-3">
              <i class="yi yi-lock" style="font-size: 16px"></i>
              <span class="text-sm text-Black-and-White-Black">02.02.2023</span>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <span class="text-xs text-Grayscale-Grey-3">End</span>
            <div class="flex items-center gap-1 text-sm text-Grayscale-Grey-3">
              <i class="yi yi-unlock" style="font-size: 16px"></i>
              <span class="text-sm text-Black-and-White-Black">02.02.2023</span>
            </div>
          </div>
        </div>
      </div>
      <y-progress-bar :progress="stakeProgress" :height="12" color="#FFC841"></y-progress-bar>
      <div class="ml-auto text-sm text-Grayscale-Grey-3">1 month left</div>
    </div>
    <div class="w-8 bg-Secondary-Light-Blue flex flex-col justify-center items-center relative rounded-r">
      <div
        class="absolute hover:bg-Acsen-Yellow flex justify-center items-center bg-Primary-Blue transition-all duration-200 cursor-pointer w-[33px] h-8 -top-px -right-px rounded-tr-md"
      >
        <y-tooltip top right>
          <template #tooltip>
            <p>Share Percentage: %2</p>
          </template>
          <span class="w-[33px] h-8 flex-shrink-0 flex justify-center items-center text-white"
            ><i class="yi yi-more rotate-90" style="font-size: 16px"></i
          ></span>
        </y-tooltip>
      </div>
      <div class="text-white font-bold text-lg rotate-90 flex items-center gap-2">
        <span class="-rotate-90">
          <i
            class="yi yi-flash -rotate-90 text-center align-middle animate-bounce"
            style="font-size: 20px; color: #f9b20c"
          ></i>
        </span>
        <span class="">10%</span>
      </div>
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
