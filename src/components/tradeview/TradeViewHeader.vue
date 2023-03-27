<template>
  <div class="trade-header pb-4 shadow-header-bottom-border w-full flex-wrap flex lg:gap-15 gap-6 items-center px-6">
    <div class="flex gap-2 relative">
      <button ref="changeTokenToggler" @click="openChangeTokenPopup"
        class="border border-Grayscale-Grey-4 rounded-md bg-Grayscale-Grey-6 py-3 px-4 hover:bg-Grayscale-Grey-4 transition-all duration-200 flex justify-center items-center gap-2">
        <span class="border border-Grayscale-Grey-4 rounded-full w-10 h-10 p-2 flex items-center bg-white justify-center">
          <img src="@/assets/images/ampl.svg" alt="" class="w-full h-full object-contain" />
        </span>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5 text-base-leading-5 font-semibold">
              <span class="text-Black-and-White-Black">{{ pair.tokenA.symbol }} / {{ pair.tokenB.symbol }}</span>
              <span @click.stop="isFavorite = !isFavorite" @keydown="isFavorite"
                class="cursor-pointer hover:text-Acsen-Yellow transition-all duration-200 flex items-center justify-center"
                :class="isFavorite ? 'text-Acsen-Yellow' : 'text-[#e6e7eb]'">
                <i class="yi yi-star-filled" style="font-size: 16px"></i>
              </span>
            </div>
            <y-icon
              :name="['text-Black-and-White-Black text-xl', changeTokenToggle ? 'yi yi-chevron-up' : 'yi yi-chevron-down']"></y-icon>
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
    <div class="flex grow justify-end gap-3 items-center">
      <button @click="addToMetamask"
        class="w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" version="1.1"
          viewBox="0 0 318.6 318.6">
          <path fill="#e2761b" stroke="#e2761b" stroke-linecap="round" stroke-linejoin="round"
            d="m274.1 35.5-99.5 73.9L193 65.8z" />
          <path
            d="m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
            class="st1" />
          <path
            d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z"
            class="st1" />
          <path fill="#d7c1b3" stroke="#d7c1b3" stroke-linecap="round" stroke-linejoin="round"
            d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z" />
          <path fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round"
            d="m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z" />
          <path fill="#cd6116" stroke="#cd6116" stroke-linecap="round" stroke-linejoin="round"
            d="m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z" />
          <path fill="#e4751f" stroke="#e4751f" stroke-linecap="round" stroke-linejoin="round"
            d="m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z" />
          <path d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
            class="st6" />
          <path fill="#c0ad9e" stroke="#c0ad9e" stroke-linecap="round" stroke-linejoin="round"
            d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z" />
          <path fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round"
            d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z" />
          <path fill="#763d16" stroke="#763d16" stroke-linecap="round" stroke-linejoin="round"
            d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z" />
          <path
            d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
            class="st6" />
        </svg>
      </button>
      <button @click="openProjectPage"
        class="w-5 h-5 flex items-center justify-center rounded-md transition-all duration-200 bg-white">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <path class="icon_color" d="M455.3,455.3H56.7V56.7H256V0H56.7C25.4,0,0,25.4,0,56.7v398.7C0,486.6,25.4,512,56.7,512h398.7 c31.3,0,56.7-25.4,56.7-56.7V256h-56.7C455.3,256,455.3,455.3,455.3,455.3z M312.7,0v56.7h102.6L134.8,337.1l40.1,40.1L455.3,96.7 v102.6H512V0H312.7z" />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import useTradeService from '@/services/tradeService';
// import router from '@/router';
// eslint-disable-next-line
import { onClickOutside } from '@vueuse/core';
import { useYartuModal } from '@yartu/ui-kit';
import ChangeToken from './ChangeToken.vue';
import AddToMetamaskModal from './AddToMetamaskModal.vue';

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

const yartuModal = useYartuModal();
function addToMetamask() {
  yartuModal.open(AddToMetamaskModal, {
    modal: {
      'max-width': '25.5rem',
      'min-width': '25.5rem',
    },
    component: {
      tokenA: props.pair.tokenA,
      tokenB: props.pair.tokenB,
    },
  });
}

function openProjectPage() {
  // router.push(`/ecoproject/detail/${project.id}`);
}

onClickOutside(
  changeToken,
  () => {
    openChangeTokenPopup();
  },
  { ignore: [changeTokenToggler] },
);
</script>
<style>
.st1,
.st6 {
  fill: #e4761b;
  stroke: #e4761b;
  stroke-linecap: round;
  stroke-linejoin: round
}

.st6 {
  fill: #f6851b;
  stroke: #f6851b
}

.icon_color {
  fill: #467595;
  stroke: #467595
}
</style>
