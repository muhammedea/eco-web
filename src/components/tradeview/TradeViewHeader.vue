<template>
  <div class="trade-header pb-4 shadow-header-bottom-border w-full flex gap-15">
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2.5 text-base-leading-5 font-semibold">
        <span class="text-Black-and-White-Black">TrueFeedBack</span>
        <span @click="isFavorite = !isFavorite" @keydown="isFavorite" class="cursor-pointer hover:text-Acsen-Yellow transition-all duration-200" :class="isFavorite ? 'text-Acsen-Yellow' : 'text-[#e6e7eb]'">
          <i class="yi yi-star-filled" style="font-size: 16px"></i>
        </span>
      </div>
      <span class="text-Grayscale-Grey-2 text-sm font-normal">TFBX/USDT</span>
    </div>
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2.5 text-base-leading-5 font-semibold">
        <span class="text-Black-and-White-Black">0.0006375</span>
        <span class="text-green-500">+1.96%</span>
      </div>
      <span class="text-Grayscale-Grey-2 text-sm font-normal">$ 0.00063</span>
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24 High</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ 0.00063</span>
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24 Low</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ 0.00063</span>
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24h Volume (TFBX)</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ 0.00063</span>
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24 High</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ 0.00063</span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isFavorite = ref(false);
</script>
