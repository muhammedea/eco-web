<template>
  <div
    @click="changePair"
    @keyup="changePair"
    class="flex px-4 py-2 items-center justify-between w-full cursor-pointer hover:bg-Grayscale-Grey-5 hover:shadow-sm transition-all duration-200 rounded-lg"
  >
    <div class="flex gap-2 md:gap-3 w-7/12">
      <div class="flex">
        <span class="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border p-2">
          <img src="@/assets/images/ampl.svg" alt="ampl" class="w-full object-contain h-full" />
        </span>
      </div>
      <div class="flex flex-col text-Grayscale-Grey-3">
        <div class="flex items-center ">
          <div class="text-xs md:text-sm flex relative">
            <span class="text-Black-and-White-Black">{{ pair.tokenA.symbol }} </span>&nbsp; / {{ pair.tokenB.symbol }}
            <!--<span
              class="w-[18px] h-[18px] bg-Tint-Acsend-Yellow text-Acsen-Yellow ml-2 text-xs flex justify-center items-center"
            >
              5X
            </span>-->
            <span
              @click="isFavorite = !isFavorite"
              @keydown="isFavorite"
              class="cursor-pointer hover:text-Acsen-Yellow transition-all duration-200 flex items-center justify-center absolute top-0 -right-6"
              :class="isFavorite ? 'text-Acsen-Yellow' : 'text-[#e6e7eb]'"
            >
              <i class="yi yi-star-filled" style="font-size: 16px"></i>
            </span>
          </div>
        </div>
        <span class="text-xs leading-5">{{ pair.name }}</span>
      </div>
    </div>
    <div class="text-xs md:text-sm text-Grayscale-Grey-3 w-3/12 pr-1 xs:pr-0 flex md:flex-row flex-col justify-end items-end">
      <span class="text-Black-and-White-Black pr-1 md:pr-2">$ 1.01</span>
    </div>
    <div class="flex gap-2 md:gap-6 w-2/12 justify-end items-center">
      <div class="text-xs md:text-sm text-Grayscale-Grey-3 flex md:flex-row flex-col items-center">
        <span class="text-Color-Code-Green pl-2">+0.5%</span>
      </div>
      <!-- change > 0 :::: <div class="text-sm text-Grayscale-Grey-3">139.06K<span class="text-Color-Code-Green pl-2">+0.36%</span></div>-->
      <!-- change = 0 :::: <div class="text-sm text-Grayscale-Grey-3">139.06K<span class="pl-2">0%</span></div>-->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
});
const isFavorite = ref(false);

const changePair = () => {
  localStorage.setItem('lastPairId', props.pair.id);
  window.location.reload();
};
</script>
