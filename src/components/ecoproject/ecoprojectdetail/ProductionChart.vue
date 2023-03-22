<template>
  <div class="flex flex-col gap-4 w-full px-6 pt-4 pb-1">
    <canvas class="flex flex-col w-full" style="height: 460px" ref="chartContainer"></canvas>
  </div>
</template>
<script setup>
/* eslint-disable */
import { ref, onMounted } from 'vue';
import { createChart } from 'lightweight-charts';
import dayjs from 'dayjs';
import Chart from 'chart.js/auto'

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
    day: 1,
    value: 1564,
  },
  {
    day: 2,
    value: 2564,
  },
  {
    day: 3,
    value: 2000,
  },
  {
    day: 4,
    value: 2200,
  },

  {
    day: 5,
    value: 2816,
  },
  {
    day: 6,
    value: 2333,
  },
  {
    day: 7,
    value: 2444,
  },
  {
    day: 8,
    value: 2245,
  },
  {
    day: 9,
    value: 1995,
  },
  {
    day: 10,
    value: 1860,
  },
  {
    day: 11,
    value: 1850,
  },
  {
    day: 12,
    value: 1770,
  },
  {
    day: 13,
    value: 1900,
  },
  {
    day: 14,
    value: 2150,
  },
  {
    day: 15,
    value: 2450,
  },
  {
    day: 16,
    value: 2490,
  },
  {
    day: 17,
    value: 2570,
  },
  {
    day: 18,
    value: 2560,
  },
  {
    day: 19,
    value: 2890,
  },
  {
    day: 20,
    value: 2990,
  },
  {
    day: 21,
    value: 2750,
  },
  {
    day: 22,
    value: 2600,
  },
];

onMounted(() => {
  setTimeout(() => {
    if (chartContainer.value) {
      const chartOptions = {
        type: 'bar',
        data: {
          labels: data.map((row) => row.day),
          datasets: [
            {
              label: 'Production by day',
              data: data.map((row) => row.value),
            },
          ],
        },
      };
      chartInstance = new Chart(chartContainer.value, chartOptions);
    }
  }, 300);
});
</script>
