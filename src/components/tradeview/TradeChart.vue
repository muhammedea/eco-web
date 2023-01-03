<template>
  <div class="flex flex-col w-full" style="height: 500px;" ref="chartContainer">
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
let chartInstance = null;
const startTime = dayjs().startOf('hour');

const data = [
  {
    time: startTime.unix(),
    open: 0.9880,
    close: 1.0120,
    high: 1.0120,
    low: 0.9800,
  },
  {
    time: startTime.subtract(4, 'hour').unix(),
    open: 0.9980,
    close: 0.9880,
    high: 1.0050,
    low: 0.9780,
  },
  {
    time: startTime.subtract(8, 'hour').unix(),
    open: 0.9900,
    close: 0.9980,
    high: 1.0010,
    low: 0.9780,
  },
  {
    time: startTime.subtract(12, 'hour').unix(),
    open: 1.0100,
    close: 0.9900,
    high: 1.0100,
    low: 0.9720,
  },
  {
    time: startTime.subtract(16, 'hour').unix(),
    open: 1.0100,
    close: 1.0100,
    high: 1.0100,
    low: 1.0100,
  },
  {
    time: startTime.subtract(20, 'hour').unix(),
    open: 0.9960,
    close: 1.0100,
    high: 1.0110,
    low: 0.9960,
  },
  {
    time: startTime.subtract(24, 'hour').unix(),
    open: 0.9960,
    close: 0.9960,
    high: 1.0000,
    low: 0.9820,
  },
  {
    time: startTime.subtract(28, 'hour').unix(),
    open: 1.0100,
    close: 0.9960,
    high: 1.0100,
    low: 0.9820,
  },
  {
    time: startTime.subtract(32, 'hour').unix(),
    open: 1.0100,
    close: 1.0100,
    high: 1.0100,
    low: 1.0100,
  },
  {
    time: startTime.subtract(36, 'hour').unix(),
    open: 1.0100,
    close: 1.0100,
    high: 1.0100,
    low: 1.0100,
  },
  {
    time: startTime.subtract(40, 'hour').unix(),
    open: 1.0110,
    close: 1.0100,
    high: 1.0110,
    low: 1.0100,
  },
  {
    time: startTime.subtract(44, 'hour').unix(),
    open: 1.0000,
    close: 1.0110,
    high: 1.0110,
    low: 1.0000,
  },
  {
    time: startTime.subtract(48, 'hour').unix(),
    open: 1.0110,
    close: 1.0000,
    high: 1.0110,
    low: 0.9900,
  },
  {
    time: startTime.subtract(52, 'hour').unix(),
    open: 0.9900,
    close: 1.0110,
    high: 1.0150,
    low: 0.9900,
  },
  {
    time: startTime.subtract(56, 'hour').unix(),
    open: 1.0100,
    close: 0.9900,
    high: 1.0100,
    low: 0.9500,
  },
  {
    time: startTime.subtract(60, 'hour').unix(),
    open: 1.0000,
    close: 1.0100,
    high: 1.0100,
    low: 0.9990,
  },
  {
    time: startTime.subtract(64, 'hour').unix(),
    open: 1.0000,
    close: 1.0000,
    high: 1.0000,
    low: 0.9500,
  },
  {
    time: startTime.subtract(68, 'hour').unix(),
    open: 0.9900,
    close: 1.0000,
    high: 1.0000,
    low: 0.9500,
  },
  {
    time: startTime.subtract(72, 'hour').unix(),
    open: 0.9500,
    close: 0.9900,
    high: 1.0000,
    low: 0.9190,
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
