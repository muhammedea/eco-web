<template>
  <div class="px-4 py-8 flex flex-col gap-6 w-full">
    <h3 class="text-Black-and-White-Black text-2xl leading-5 font-bold">Market Trades</h3>
    <div class="flex flex-col gap-3">
      <div class="grid grid-cols-3 text-Grayscale-Grey-2 text-base-leading-5 font-semibold">
        <span class="text-left">Price ({{ pair.tokenB.symbol }})</span>
        <span class="text-center">Amount ({{ pair.tokenA.symbol }})</span>
        <span class="text-right">Time</span>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <template v-for="order in processedOrders" :key="order.order.salt">
          <div class="grid grid-cols-3 w-full items-center py-1.5">
              <span class="text-left leading-5" :class="{'text-Color-Code-Red': isSellOrder(order), 'text-Color-Code-Green': !isSellOrder(order)}">
                {{ calculatePrice(order) }}
              </span>
              <span class="text-center leading-5 text-Grayscale-Grey-2">{{ calculateAmount(order) }}</span>
              <span class="text-right leading-5 text-Grayscale-Grey-2">{{ formatTime(order.metaData.processTime) }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { formatTime, formatAmount } from '@/utils/helpers';
import { ethers } from 'ethers';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
});

const processedOrders = ref([]);

function fetchData() {
  fetch(`/api/orderbook/v1/recent_trades?${new URLSearchParams({
    baseToken: props.pair.tokenA.contractAddress,
    quoteToken: props.pair.tokenA.contractAddress,
  })}`)
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
