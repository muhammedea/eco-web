<template>
  <div class="trade-header pb-4 shadow-header-bottom-border w-full flex md:gap-15 gap-6">
    <div class="flex gap-2 relative">
      <button
        ref="changeTokenToggler"
        @click="openChangeTokenPopup"
        class="w-6 h-6 rounded-full hover:bg-Grayscale-Grey-4 transition-all duration-200 flex justify-center items-center text-Grayscale-Grey-1"
      >
        <i class="yi yi-undo text-xl"></i>
      </button>
      <ChangeToken ref="changeToken" v-if="changeTokenToggle" />
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2.5 text-base-leading-5 font-semibold">
          <span class="text-Black-and-White-Black">{{ pair.tokenA.name }}</span>
          <span
            @click="isFavorite = !isFavorite"
            @keydown="isFavorite"
            class="cursor-pointer hover:text-Acsen-Yellow transition-all duration-200 flex items-center justify-center"
            :class="isFavorite ? 'text-Acsen-Yellow' : 'text-[#e6e7eb]'"
          >
            <i class="yi yi-star-filled" style="font-size: 16px"></i>
          </span>
        </div>
        <span class="text-Grayscale-Grey-2 text-sm font-normal">{{ pair.tokenA.symbol }} / {{ pair.tokenB.symbol }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2.5 text-base-leading-5 font-semibold">
        <span class="text-Black-and-White-Black">{{ data.currentPriice }}</span>
        <span class="text-green-500">+0.5%</span>
      </div>
      <span class="text-Grayscale-Grey-2 text-sm font-normal">$ {{ data.currentPriice }}</span>
    </div>
    <div class="hidden lg:flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24 High</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ {{ data.highest24hour }}</span>
    </div>
    <div class="hidden lg:flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24 Low</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ {{ data.lowest24hour }}</span>
    </div>
    <div class="hidden lg:flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24h Volume ({{ pair.tokenA.symbol }})</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ {{ data.volume24hour }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import ChangeToken from './ChangeToken.vue';
// eslint-disable-next-line
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
});

const data = reactive({
  currentPriice: '1',
  lowest24hour: '1',
  highest24hour: '1',
  volume24hour: '1',
});

const isFavorite = ref(false);
const changeTokenToggle = ref(false);
const changeToken = ref();
const changeTokenToggler = ref();

function fetchData() {
  fetch(`/api/orderbook/v1/stats?${new URLSearchParams({
    baseToken: props.pair.tokenA.contractAddress,
    quoteToken: props.pair.tokenA.contractAddress,
  })}`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      Object.assign(data, responseJson);
    });
}
fetchData();

function openChangeTokenPopup() {
  changeTokenToggle.value = !changeTokenToggle.value;
}

onClickOutside(
  changeToken,
  () => {
    openChangeTokenPopup();
  },
  { ignore: [changeTokenToggler] },
);
</script>
