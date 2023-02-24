<template>
  <div class="order-card w-full items-center odd:bg-Grayscale-Grey-6 py-3 cursor-default flex">
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[13.25%] text-left pl-6">11/12/22</div>
    <div :class="buy_order ? 'text-Color-Code-Green' : 'text-Color-Code-Red'" class="text-base-leading-5 w-[8.5%] text-left">
      {{ buy_order ? 'Buy' : 'Sell' }}
    </div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[18%] text-left">ECO_ORNG_1/USD</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[13.25%] text-right">1.000</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[10.5%] text-right">23.4</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[12.5%] text-right">23.400</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[14%] text-right">23.4</div>
    <button class="text-[#467595] underline hover:no-underline text-base-leading-5 w-[10%] text-right pr-6 min-w-max">Cancel</button>
  </div>
</template>
<script setup>
// import { computed } from 'vue';

defineProps({
  price: {
    type: String,
    default: '0.0',
  },
  cumVal_1: {
    type: String,
    default: '',
  },
  cumVal_2: {
    type: String,
    default: '',
  },
  bar_width: {
    type: Number,
    default: 0,
  },
  buy_order: {
    type: Boolean,
    default: false,
  },
});
</script>
<style>
.order-card:hover .order-card-bar {
  opacity: 0.35;
}
</style>
