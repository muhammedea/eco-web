<template>
  <div class="flex px-4 py-2 items-center justify-between w-full">
    <div class="flex gap-3 w-4/12">
      <div class="flex">
        <div class="w-10 h-10 rounded-full overflow-hidden">
          <img src="@/assets/images/ampl.svg" alt="ampl" class="w-full" />
        </div>
        <div class="w-10 h-10 rounded-full overflow-hidden -ml-3">
          <img src="@/assets/images/usdt.svg" alt="usdt" class="w-full" />
        </div>
      </div>
      <div class="flex flex-col text-Grayscale-Grey-3">
        <div class="text-sm flex">
          <span class="text-Black-and-White-Black">AMPL</span>/USDT
          <span
            class="w-[18px] h-[18px] bg-Tint-Acsend-Yellow text-Acsen-Yellow ml-2 text-xs flex justify-center items-center"
          >
            5X
          </span>
        </div>
        <span class="text-xs leading-5">Ampleforth</span>
      </div>
    </div>
    <div class="text-sm text-Grayscale-Grey-3 w-4/12 flex justify-end">
      <span class="text-Black-and-White-Black pr-2">1.258437</span>$ 1.25
    </div>
    <div class="flex gap-6 w-4/12 justify-end">
      <div class="text-sm text-Grayscale-Grey-3">139.06K<span class="text-Color-Code-Red pl-2">-2.36%</span></div>
      <!-- change > 0 :::: <div class="text-sm text-Grayscale-Grey-3">139.06K<span class="text-Color-Code-Green pl-2">+0.36%</span></div>-->
      <!-- change = 0 :::: <div class="text-sm text-Grayscale-Grey-3">139.06K<span class="pl-2">0%</span></div>-->
      <span
        @click="isFavorite = !isFavorite"
        @keydown="isFavorite"
        class="cursor-pointer hover:text-Acsen-Yellow transition-all duration-200 h-5"
        :class="isFavorite ? 'text-Acsen-Yellow' : 'text-[#e6e7eb]'"
      >
        <i class="yi yi-star-filled" style="font-size: 16px"></i>
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isFavorite = ref(false);
</script>
