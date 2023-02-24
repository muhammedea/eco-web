<template>
  <div class="order-card grid grid-cols-3 w-full items-center odd:bg-Grayscale-Grey-6 px-6 py-1.5 cursor-pointer">
    <div :class="buy_order ? 'text-Color-Code-Green' : 'text-Color-Code-Red'" class="w-full text-base-leading-5">
      <span>{{ price }}</span>
    </div>
    <div class="w-full col-span-2 grid grid-cols-2 items-center text-base-leading-5 text-Grayscale-Grey-2 relative z-[2] after:z-[1] py-1.5">
      <span class="text-center">{{ cumVal_1 }}</span>
      <span class="text-right pr-4">{{ cumVal_2 }}</span>
      <div :class="buy_order ? 'bg-Color-Code-Green' : 'bg-Color-Code-Red'" class="order-card-bar absolute h-full opacity-20 right-0 top-0" :style="'width:calc(' + bar_width + '% + 16px );'"></div>
    </div>
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
