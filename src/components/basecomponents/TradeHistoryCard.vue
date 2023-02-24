<template>
  <div class="order-card w-full items-center odd:bg-Grayscale-Grey-6 py-2.5 cursor-default flex">
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[15%] text-left pl-6">11/12/22</div>
    <div :class="buy_order ? 'text-Color-Code-Green' : 'text-Color-Code-Red'" class="text-base-leading-5 w-[13%] text-left">
      {{ buy_order ? 'Buy' : 'Sell' }}
    </div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[18%] text-left">ECO_ORNG_1/USD</div>
    <!-- <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[13.25%] text-right">1.000</div> -->
    <!-- <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[10.5%] text-right">23.4</div> -->
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[17%] text-right">23.400</div>
    <div class="text-Grayscale-Grey-2 text-base-leading-5 w-[19%] text-right">23.4</div>
    <div class="text-[#467595] text-base-leading-5 w-[18%] flex items-center justify-center pr-6">
      <StatusChip :status="2"></StatusChip>
    </div>
  </div>
</template>
<script setup>
// import { computed } from 'vue';

import StatusChip from './StatusChip.vue';

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
