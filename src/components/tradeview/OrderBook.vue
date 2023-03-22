<template>
    <div class="flex flex-col w-full">
      <div class="grid grid-cols-3 text-Grayscale-Grey-2 text-base-leading-5 font-semibold px-6 py-3">
        <span class="text-left">Price ({{ pair.tokenB.symbol }})</span>
        <span class="text-center">Sum({{ pair.tokenA.symbol }})</span>
        <span class="text-right pr-4">Sum({{ pair.tokenB.symbol }})</span>
      </div>
      <div class="flex flex-col w-full">
        <OrderCard
          v-for="order in sellOrders"
          :key="order.price"
          :buy_order="false"
          :price="printPrice(order.price)"
          :cum-val_1="printAmount(order.baseTokenTotal)"
          :cum-val_2="printAmount(order.quoteTokenTotal)"
          :bar_width="getPercentage(order.baseTokenTotal, maxTotalAmount)"
        />
        <div class="flex justify-between w-full items-center py-2.5 px-6">
          <div class="flex gap-1.5 items-center text-base-leading-5">
            <span class="text-Grayscale-Grey-1">{{ tradeService.currentPrice.value }}</span>
            <span class="text-Grayscale-Grey-3">~ ${{ tradeService.currentPrice.value }}</span>
          </div>
          <div class="w-6 h-6">
            <img src="@/assets/images/signal-alt.svg" alt="signal-alt" />
          </div>
        </div>
        <OrderCard
          v-for="order in buyOrders"
          :key="order.price"
          :buy_order="true"
          :price="printPrice(order.price)"
          :cum-val_1="printAmount(order.baseTokenTotal)"
          :cum-val_2="printAmount(order.quoteTokenTotal)"
          :bar_width="getPercentage(order.baseTokenTotal, maxTotalAmount)"
        />
      </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { getPercentage, formatDolar } from '@/utils/helpers';
import useTradeService from '@/services/tradeService';
import OrderCard from '../basecomponents/OrderBookCard.vue';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
});

const buyOrders = ref([]);
const sellOrders = ref([]);
const tradeService = useTradeService(props.pair);

function printPrice(input) {
  return parseFloat(input).toFixed(6);
}
function printAmount(input) {
  return parseFloat(input).toString();
}

function sorter(orderA, orderB) {
  const pA = parseFloat(orderA.price);
  const pB = parseFloat(orderB.price);
  if (pA > pB) {
    return -1;
  }
  if (pA === pB) {
    return 0;
  }
  return 1;
}

const maxTotalAmount = computed(() => {
  let max = 0;
  buyOrders.value.concat(sellOrders.value).forEach((order) => {
    const val = parseFloat(order.baseTokenTotal);
    if (val > max) {
      max = val;
    }
  });
  return max;
});

function fetchData() {
  fetch(`/api/orderbook/summary?${new URLSearchParams({
    pairId: props.pair.id,
  })}`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      buyOrders.value = responseJson.buyOrders.sort(sorter);
      sellOrders.value = responseJson.sellOrders.sort(sorter);
      tradeService.currentPrice.value = formatDolar(parseFloat(responseJson.price).toString(), 6);
    });
}
fetchData();

</script>
