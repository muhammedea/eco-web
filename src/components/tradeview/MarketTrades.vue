<template>
  <div class="flex flex-col w-full">
    <div class="grid grid-cols-3 text-Grayscale-Grey-2 text-base-leading-5 font-semibold px-6 py-3">
      <span class="text-left">Price ({{ pair.tokenB.symbol }})</span>
      <span class="text-center">Amount ({{ pair.tokenA.symbol }})</span>
      <span class="text-right">Time</span>
    </div>
    <div class="flex flex-col w-full">
      <template v-for="order in processedOrders" :key="order.order.salt">
        <div class="grid grid-cols-3 w-full items-center odd:bg-Grayscale-Grey-6 px-6 py-3 cursor-default">
          <span class="text-left leading-5" :class="{ 'text-Color-Code-Red': isSellOrder(order), 'text-Color-Code-Green': !isSellOrder(order) }">
            {{ calculatePrice(order) }}
          </span>
          <span class="text-center leading-5 text-Grayscale-Grey-2">{{ calculateAmount(order) }}</span>
          <span class="text-right leading-5 text-Grayscale-Grey-2">{{ formatTime(order.metaData.processTime) }}</span>
        </div>
      </template>
      <template v-for="i in 10" :key="i">
        <div class="grid grid-cols-3 w-full items-center odd:bg-Grayscale-Grey-6 px-6 py-3 cursor-default">
          <span class="text-left leading-5" :class="{ 'text-Color-Code-Red': i % 2 === 0, 'text-Color-Code-Green': i % 2 === 1}">
            0.000123
          </span>
          <span class="text-center leading-5 text-Grayscale-Grey-2">35K</span>
          <span class="text-right leading-5 text-Grayscale-Grey-2">20:04:34</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { ethers } from 'ethers';
import { formatTime, formatAmount } from '@/utils/helpers';
import config from '@/config';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
});

const processedOrders = ref([]);

function fetchData() {
  fetch(
    `${config.API_URL}/orderbook/v1/recent_trades?${new URLSearchParams({
      baseToken: props.pair.tokenA.contractAddress,
      quoteToken: props.pair.tokenA.contractAddress,
    })}`,
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      processedOrders.value = responseJson.processed_orders.records;
    });
}
fetchData();

function isSellOrder(order) {
  return order.order.makerToken === props.pair.tokenA.contractAddress;
}

function calculatePrice(order) {
  const isSell = isSellOrder(order);
  const baseAmount = isSell ? ethers.BigNumber.from(order.order.makerAmount) : ethers.BigNumber.from(order.order.takerAmount);
  const quoteAmount = isSell ? ethers.BigNumber.from(order.order.takerAmount) : ethers.BigNumber.from(order.order.makerAmount);
  const price = baseAmount.mul(ethers.constants.WeiPerEther).div(quoteAmount);
  return formatAmount(price, 4);
}

function calculateAmount(order) {
  const isSell = isSellOrder(order);
  const quoteAmount = isSell ? ethers.BigNumber.from(order.order.takerAmount) : ethers.BigNumber.from(order.order.makerAmount);
  return formatAmount(quoteAmount, 4);
}
</script>
