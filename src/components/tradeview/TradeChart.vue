<template>
  <div class="flex flex-col gap-4 w-full px-6 pt-4 pb-1">
    <div class="flex flex-col gap-2">
      <div class="w-full flex items-center justify-between gap-4 flex-wrap">
        <div class="flex items-center gap-1.5 xs:gap-3 flex-wrap">
          <y-radio
            id="1m"
            v-model="chartTimeStep"
            inputValue="1m"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="chartTimeStep === '1m' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
            label="1m"
          ></y-radio>
          <y-radio
            id="5m"
            v-model="chartTimeStep"
            inputValue="5m"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="chartTimeStep === '5m' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
            label="5m"
          ></y-radio>
          <y-radio
            id="15m"
            v-model="chartTimeStep"
            inputValue="15m"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="chartTimeStep === '15m' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
            label="15m"
          ></y-radio>
          <y-radio
            id="30m"
            v-model="chartTimeStep"
            inputValue="30m"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="chartTimeStep === '30m' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
            label="30m"
          ></y-radio>
          <y-radio
            id="1h"
            v-model="chartTimeStep"
            inputValue="1h"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="chartTimeStep === '1h' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
            label="1H"
          ></y-radio>
          <y-radio
            id="4h"
            v-model="chartTimeStep"
            inputValue="4h"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="chartTimeStep === '4h' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
            label="4H"
          ></y-radio>
          <y-radio
            id="1d"
            v-model="chartTimeStep"
            inputValue="1d"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="chartTimeStep === '1d' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
            label="1D"
          ></y-radio>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex p-1 bg-Grayscale-Grey-6 border border-Grayscale-Grey-4 rounded-lg">
            <button @click="chartSwitch = 'candle'" class="w-10 h-8 flex items-center justify-center rounded-md transition-all duration-200" :class="chartSwitch === 'candle' ? 'bg-white' : ''">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="transition-all duration-200" d="M7 20V18H5V6H7V4H9V6H11V18H9V20H7ZM15 20V15H13V8H15V4H17V8H19V15H17V20H15Z" :fill="chartSwitch === 'candle' ? '#467595' : '#9C9FAF'" />
              </svg>
            </button>
            <button @click="chartSwitch = 'line'" class="w-10 h-8 flex items-center justify-center rounded-md transition-all duration-200" :class="chartSwitch === 'line' ? 'bg-white' : ''">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="transition-all duration-200"
                  d="M21 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V3H5V19H21V21ZM8.373 16L7 14.656L11.856 9.9C12.0399 9.72132 12.2861 9.62136 12.5425 9.62136C12.7989 9.62136 13.0451 9.72132 13.229 9.9L15.456 12.081L19.627 8L21 9.344L16.144 14.1C15.9601 14.2787 15.7139 14.3786 15.4575 14.3786C15.2011 14.3786 14.9549 14.2787 14.771 14.1L12.543 11.918L8.373 16Z"
                  :fill="chartSwitch === 'line' ? '#467595' : '#9C9FAF'"
                />
              </svg>
            </button>
          </div>
          <button class="w-10 h-10 flex items-center justify-center border border-Grayscale-Grey-4 rounded-lg hover:bg-Grayscale-Grey-6">
            <img class="w-6 h-6 object-contain" src="@/assets/icon/full-screen.svg" alt="fullscreen" />
          </button>
        </div>
      </div>
      <div class="flex items-center gap-1 flex-wrap">
        <span class="text-Black-and-White-Black text-sm">O: 0.0006609</span>
        <span class="text-Black-and-White-Black text-sm">C:0.0006687</span>
        <span class="text-Black-and-White-Black text-sm">H:0.0006708</span>
        <span class="text-Black-and-White-Black text-sm">L: 0.0006561</span>
        <span class="text-Black-and-White-Black text-sm">Volume: 1.91M</span>
        <span class="text-Color-Code-Green text-sm">+1.18%</span>
      </div>
    </div>
    <div class="flex flex-col w-full" style="height: 460px" ref="chartContainer"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { createChart } from 'lightweight-charts';
import dayjs from 'dayjs';

defineProps({
  pair: {
    type: Object,
    required: true,
  },
});

const chartContainer = ref(null);
const chartTimeStep = ref('15m');
const chartSwitch = ref('candle');
let chartInstance = null;
const startTime = dayjs().startOf('hour');

const data = [
  {
    time: startTime.unix(),
    open: 0.988,
    close: 1.012,
    high: 1.012,
    low: 0.98,
  },
  {
    time: startTime.subtract(4, 'hour').unix(),
    open: 0.998,
    close: 0.988,
    high: 1.005,
    low: 0.978,
  },
  {
    time: startTime.subtract(8, 'hour').unix(),
    open: 0.99,
    close: 0.998,
    high: 1.001,
    low: 0.978,
  },
  {
    time: startTime.subtract(12, 'hour').unix(),
    open: 1.01,
    close: 0.99,
    high: 1.01,
    low: 0.972,
  },
  {
    time: startTime.subtract(16, 'hour').unix(),
    open: 1.01,
    close: 1.01,
    high: 1.01,
    low: 1.01,
  },
  {
    time: startTime.subtract(20, 'hour').unix(),
    open: 0.996,
    close: 1.01,
    high: 1.011,
    low: 0.996,
  },
  {
    time: startTime.subtract(24, 'hour').unix(),
    open: 0.996,
    close: 0.996,
    high: 1.0,
    low: 0.982,
  },
  {
    time: startTime.subtract(28, 'hour').unix(),
    open: 1.01,
    close: 0.996,
    high: 1.01,
    low: 0.982,
  },
  {
    time: startTime.subtract(32, 'hour').unix(),
    open: 1.01,
    close: 1.01,
    high: 1.01,
    low: 1.01,
  },
  {
    time: startTime.subtract(36, 'hour').unix(),
    open: 1.01,
    close: 1.01,
    high: 1.01,
    low: 1.01,
  },
  {
    time: startTime.subtract(40, 'hour').unix(),
    open: 1.011,
    close: 1.01,
    high: 1.011,
    low: 1.01,
  },
  {
    time: startTime.subtract(44, 'hour').unix(),
    open: 1.0,
    close: 1.011,
    high: 1.011,
    low: 1.0,
  },
  {
    time: startTime.subtract(48, 'hour').unix(),
    open: 1.011,
    close: 1.0,
    high: 1.011,
    low: 0.99,
  },
  {
    time: startTime.subtract(52, 'hour').unix(),
    open: 0.99,
    close: 1.011,
    high: 1.015,
    low: 0.99,
  },
  {
    time: startTime.subtract(56, 'hour').unix(),
    open: 1.01,
    close: 0.99,
    high: 1.01,
    low: 0.95,
  },
  {
    time: startTime.subtract(60, 'hour').unix(),
    open: 1.0,
    close: 1.01,
    high: 1.01,
    low: 0.999,
  },
  {
    time: startTime.subtract(64, 'hour').unix(),
    open: 1.0,
    close: 1.0,
    high: 1.0,
    low: 0.95,
  },
  {
    time: startTime.subtract(68, 'hour').unix(),
    open: 0.99,
    close: 1.0,
    high: 1.0,
    low: 0.95,
  },
  {
    time: startTime.subtract(72, 'hour').unix(),
    open: 0.95,
    close: 0.99,
    high: 1.0,
    low: 0.919,
  },
];

onMounted(() => {
  setTimeout(() => {
    if (chartContainer.value) {
      const chartOptions = { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } } };
      chartInstance = createChart(chartContainer.value, chartOptions);
      const candlestickOptions = { upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' };
      const candlestickSeries = chartInstance.addCandlestickSeries(candlestickOptions);
      data.sort((a, b) => a.time - b.time);
      candlestickSeries.setData(data);
      chartInstance.timeScale().fitContent();
    }
  }, 300);
});
</script>
