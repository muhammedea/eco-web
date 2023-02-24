<template>
    <div class="flex flex-col w-full">
      <div class="grid grid-cols-3 text-Grayscale-Grey-2 text-base-leading-5 font-semibold px-6 py-3">
        <span class="text-left">Price ({{ pair.tokenB.symbol }})</span>
        <span class="text-center">Sum({{ pair.tokenA.symbol }})</span>
        <span class="text-right pr-4">Sum({{ pair.tokenB.symbol }})</span>
      </div>
      <div class="flex flex-col w-full">
        <!-- <OrderCard
          v-for="bid in bids"
          :key="bid.order.salt"
          :buy_order="false"
          :price="formatPrice(bid)"
          cum-val_1="3,081.891K"
          :cum-val_2="formatTotalAmount(bid)"
          :bar_width="getPercentage(getTotalAmount(bid), maxTotalAmount)"
        /> -->
        <OrderCard
          v-for="bid in 5"
          :key="bid"
          :buy_order="false"
          :price="'0.0006909'"
          cum-val_1="3,081.891K"
          :cum-val_2="'929292'"
          :bar_width="55"
        />
        <div class="flex justify-between w-full items-center py-2.5 px-6">
          <div class="flex gap-1.5 items-center text-base-leading-5">
            <span class="text-Grayscale-Grey-1">{{ asks.length > 0 ? formatPrice(asks[0]) : '0"' }}</span>
            <span class="text-Grayscale-Grey-3">~ ${{ asks.length > 0 ? formatPrice(asks[0]) : '0"' }}</span>
          </div>
          <div class="w-6 h-6">
            <img src="@/assets/images/signal-alt.svg" alt="signal-alt" />
          </div>
        </div>
        <OrderCard
          v-for="bid in 5"
          :key="bid"
          :buy_order="true"
          :price="'0.0006909'"
          cum-val_1="3,081.891K"
          :cum-val_2="'929292'"
          :bar_width="55"
        />
        <OrderCard
          v-for="ask in asks"
          :key="ask.order.salt"
          :buy_order="true"
          :price="formatPrice(ask)"
          cum-val_1="3,081.891K"
          :cum-val_2="formatTotalAmount(ask)"
          :bar_width="getPercentage(getTotalAmount(ask), maxTotalAmount)"
        />
      </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { ethers } from 'ethers';
import { formatAmount, getPercentage } from '@/utils/helpers';
import OrderCard from '../basecomponents/OrderBookCard.vue';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
});

const asks = ref([]);
const bids = ref([]);

function isSellOrder(order) {
  return order.order.makerToken === props.pair.tokenA.contractAddress;
}

function calculatePrice(order) {
  const isSell = isSellOrder(order);
  const baseAmount = isSell ? ethers.BigNumber.from(order.order.makerAmount) : ethers.BigNumber.from(order.order.takerAmount);
  const quoteAmount = isSell ? ethers.BigNumber.from(order.order.takerAmount) : ethers.BigNumber.from(order.order.makerAmount);
  return baseAmount.mul(ethers.constants.WeiPerEther).div(quoteAmount);
}

function combineOrders(input) {
  const orders = input.slice();
  for (let i = orders.length - 1; i >= 0; i -= 1) {
    const curr = orders[i];
    const currPrice = calculatePrice(orders[i]);
    let found = null;
    for (let j = 0; j < i; j += 1) {
      if (currPrice.eq(calculatePrice(orders[j]))) {
        found = orders[j];
        break;
      }
    }
    if (found) {
      found.order.makerAmount = ethers.BigNumber.from(found.order.makerAmount).add(curr.order.makerAmount).toString();
      found.order.takerAmount = ethers.BigNumber.from(found.order.takerAmount).add(curr.order.takerAmount).toString();
      orders.splice(i, 1);
    }
  }
  return orders;
}

function formatPrice(order) {
  return formatAmount(calculatePrice(order), 4);
}

function getTotalAmount(order) {
  const isSell = isSellOrder(order);
  return isSell ? ethers.BigNumber.from(order.order.takerAmount) : ethers.BigNumber.from(order.order.makerAmount);
}

function formatTotalAmount(order) {
  return formatAmount(getTotalAmount(order), 4);
}

function sorter(orderA, orderB) {
  const pA = calculatePrice(orderA);
  const pB = calculatePrice(orderB);
  if (pA.gt(pB)) {
    return -1;
  }
  if (pA.eq(pB)) {
    return 0;
  }
  return 1;
}

const maxTotalAmount = computed(() => {
  let max = ethers.BigNumber.from(0);
  asks.value.forEach((ask) => {
    if (getTotalAmount(ask).gt(max)) {
      max = getTotalAmount(ask);
    }
  });
  bids.value.forEach((bid) => {
    if (getTotalAmount(bid).gt(max)) {
      max = getTotalAmount(bid);
    }
  });
  return max;
});

function fetchData() {
  fetch(`/api/orderbook/v1?${new URLSearchParams({
    baseToken: props.pair.tokenA.contractAddress,
    quoteToken: props.pair.tokenA.contractAddress,
  })}`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      asks.value = combineOrders(responseJson.asks.records).sort(sorter);
      bids.value = combineOrders(responseJson.bids.records).sort(sorter);
    });
}
fetchData();

</script>
