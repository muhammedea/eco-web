<template>
  <div class="order-card w-full items-center odd:bg-Grayscale-Grey-6 py-3 cursor-default flex">
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[14.5%] text-left pl-6">{{ dateText }}</div>
    <div :class="isBuyOrder ? 'text-Color-Code-Green' : 'text-Color-Code-Red'" class="text-base-leading-5 w-[7.5%] text-left">
      {{ isBuyOrder ? 'Buy' : 'Sell' }}
    </div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[18%] text-left">{{props.pair.tokenA.symbol}} / {{props.pair.tokenB.symbol}}</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[13%] text-right">{{printPrice(props.order.price)}}</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[10.5%] text-right">{{ amount }}</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[12.5%] text-right">{{ totalPrice }}</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[14%] text-right">{{ filledAmount }}</div>
    <button class="text-[#467595] underline hover:no-underline text-base-leading-5 w-[10%] text-right pr-6 min-w-max" @click="cancelOrder">Cancel</button>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { ethers } from 'ethers';
import config from '@/config';
import { formatShortDateTime, formatDolar } from '../../utils/helpers';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
  order: {
    type: Object,
    required: true,
  },
});

function printPrice(input) {
  return parseFloat(input).toFixed(6);
}
const dateText = computed(() => formatShortDateTime(props.order.createdAt));
const isBuyOrder = computed(() => props.order.orderType === 'BUY');
const amount = computed(() => {
  const a = ethers.BigNumber.from(props.order.makerAssetAmount).add(props.order.makerFee);
  return ethers.utils.formatEther(a);
});
const totalPrice = computed(() => {
  const a = parseFloat(amount.value);
  const p = parseFloat(props.order.price);
  return formatDolar((a * p).toString(), 6);
});
const filledAmount = computed(() => {
  const a = props.order.orderTakerAssetFilledAmount;
  return ethers.utils.formatEther(a);
});

const cancelOrder = () => {
  // eslint-disable-next-line
  const r = confirm('Are yousure?');
  if (r) {
    fetch(`${config.API_URL}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ orderHash: props.order.orderHash }),
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => {
        window.location.reload();
      });
  }
};
</script>
<style>
.order-card:hover .order-card-bar {
  opacity: 0.35;
}
</style>
