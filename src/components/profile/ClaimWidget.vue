<template>
  <div class="w-full flex flex-col border rounded-md">
    <div class="w-full flex flex-col p-4 pb-3 gap-3">
      <div class="w-full flex flex-items-center justify-between">
        <div class="flex items-center gap-2 text-xl leading-6 text-Black-and-White-Black font-semibold">
          <img src="@/assets/icon/gift.svg" class="w-5 h-5" alt="gift-icon" />
          You have unclaimable reward
        </div>
        <button
          class="px-8 py-2 text-white bg-Primary-Blue rounded border border-Primary-Blue hover:bg-white hover:text-Primary-Blue transition-all duration-200"
        >
          Claim All
        </button>
      </div>
      <div class="h-px w-full bg-BORDER"></div>
      <div class="flex items-center justify-between">
        <div class="w-1/2-gap-6 flex flex-col gap-2">
          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between text-sm leading-6 text-Grayscale-Grey-3"
          >
            <div class="flex items-center gap-1">
              <p class="capitalize"><span class="md:inline hidden">Your</span> staked amount</p>
              <y-tooltip top right class="flex items-center">
                <template #tooltip>
                  <p>Some info here</p>
                </template>
                <y-icon name="yi yi-info text-xs text-Grayscale-Grey-1"></y-icon>
              </y-tooltip>
            </div>
            <span class="text-Black-and-White-Black font-semibold text-base">240,000,000.00</span>
          </div>
          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between text-sm leading-6 text-Grayscale-Grey-3"
          >
            <div class="flex items-center gap-1">
              <p class="capitalize"><span class="md:inline hidden">Your</span> share percentage</p>
              <y-tooltip top right class="flex items-center">
                <template #tooltip>
                  <p>Some info here</p>
                </template>
                <y-icon name="yi yi-info text-xs text-Grayscale-Grey-1"></y-icon>
              </y-tooltip>
            </div>
            <span class="text-Black-and-White-Black font-semibold text-base">25%</span>
          </div>
        </div>
        <div class="h-14 md:flex hidden w-px bg-BORDER"></div>
        <div class="w-1/2-gap-6 flex flex-col gap-2">
          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between text-sm leading-6 text-Grayscale-Grey-3"
          >
            <div class="flex items-center gap-1">
              <p class="capitalize"><span class="md:inline hidden">Your</span> unclaimed reward</p>
              <y-tooltip top right class="flex items-center">
                <template #tooltip>
                  <p>Some info here</p>
                </template>
                <y-icon name="yi yi-info text-xs text-Grayscale-Grey-1"></y-icon>
              </y-tooltip>
            </div>
            <span class="text-Black-and-White-Black font-semibold text-base">₺ 2,500,000.00</span>
          </div>
          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between text-sm leading-6 text-Grayscale-Grey-3"
          >
            <div class="flex items-center gap-1">
              <p class="capitalize"><span class="md:inline hidden">Your</span> next claim time</p>
              <y-tooltip top right class="flex items-center">
                <template #tooltip>
                  <p>Some info here</p>
                </template>
                <y-icon name="yi yi-info text-xs text-Grayscale-Grey-1"></y-icon>
              </y-tooltip>
            </div>
            <span class="text-Black-and-White-Black font-semibold text-base">10.08.2022</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
