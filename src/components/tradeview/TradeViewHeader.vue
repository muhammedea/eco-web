<template>
  <div class="trade-header pb-4 shadow-header-bottom-border w-full flex-wrap flex lg:gap-15 gap-6 items-center px-6">
    <div class="flex gap-2 relative">
      <button
        ref="changeTokenToggler"
        @click="openChangeTokenPopup"
        class="border border-Grayscale-Grey-4 rounded-md bg-Grayscale-Grey-6 py-3 px-4 hover:bg-Grayscale-Grey-4 transition-all duration-200 flex justify-center items-center gap-2"
      >
        <span class="border border-Grayscale-Grey-4 rounded-full w-10 h-10 p-2 flex items-center bg-white justify-center">
          <img src="@/assets/images/ampl.svg" alt="" class="w-full h-full object-contain" />
        </span>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5 text-base-leading-5 font-semibold">
              <span class="text-Black-and-White-Black">{{ pair.tokenA.symbol }} / {{ pair.tokenB.symbol }}</span>
              <span
                @click.stop="isFavorite = !isFavorite"
                @keydown="isFavorite"
                class="cursor-pointer hover:text-Acsen-Yellow transition-all duration-200 flex items-center justify-center"
                :class="isFavorite ? 'text-Acsen-Yellow' : 'text-[#e6e7eb]'"
              >
                <i class="yi yi-star-filled" style="font-size: 16px"></i>
              </span>
            </div>
            <y-icon :name="['text-Black-and-White-Black text-xl', changeTokenToggle ? 'yi yi-chevron-up' : 'yi yi-chevron-down']"></y-icon>
          </div>
          <span class="text-Grayscale-Grey-2 text-sm font-normal">{{ pair.tokenA.name }}</span>
        </div>
      </button>
      <ChangeToken class="absolute top-20 -left-3 md:left-0" ref="changeToken" v-if="changeTokenToggle" />
    </div>
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2.5 text-base-leading-5 font-semibold">
        <span class="text-Black-and-White-Black">{{ tradeService.currentPrice.value }}</span>
        <span class="text-green-500">+0.5%</span>
      </div>
      <span class="text-Grayscale-Grey-2 text-sm font-normal">$ {{ tradeService.currentPrice.value }}</span>
    </div>
    <div class="lg:flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24 High</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ {{ data.highest24hour }}</span>
    </div>
    <div class="lg:flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24 Low</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ {{ data.lowest24hour }}</span>
    </div>
    <div class="lg:flex flex-col gap-1">
      <span class="text-Grayscale-Grey-2 text-sm font-normal">24h Volume ({{ pair.tokenA.symbol }})</span>
      <span class="text-Black-and-White-Black text-base-leading-5 font-semibold">$ {{ data.volume24hour }}</span>
    </div>
    <button class="text-sm text-Primary-Blue hover:text-Acsen-Yellow transition-all duration-200 lg:ml-auto">See Project Details</button>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import useTradeService from '@/services/tradeService';
import ChangeToken from './ChangeToken.vue';
// eslint-disable-next-line
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
});

const tradeService = useTradeService(props.pair);

const data = reactive({
  lowest24hour: '0.965',
  highest24hour: '1.09',
  volume24hour: '12566.50',
});

const isFavorite = ref(false);
const changeTokenToggle = ref(false);
const changeToken = ref();
const changeTokenToggler = ref();

function fetchData() {
  fetch(
    `/api/orderbook/v1/stats?${new URLSearchParams({
      baseToken: props.pair.tokenA.contractAddress,
      quoteToken: props.pair.tokenA.contractAddress,
    })}`,
  )
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
