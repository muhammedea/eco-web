<template>
  <div class="flex flex-col w-full min-w-[650px]">
    <div class="w-full flex items-center text-base-leading-5 text-Grayscale-Grey-2 font-semibold py-3">
      <div class="w-[13.25%] text-left pl-6">Date</div>
      <div class="w-[8.5%] text-left">Type</div>
      <div class="w-[18%] text-left">Pair</div>
      <div class="w-[13.25%] text-right">Order Price</div>
      <div class="w-[10.5%] text-right">Amount</div>
      <div class="w-[12.5%] text-right">Total Price</div>
      <div class="w-[14%] text-right">Filled Amount</div>
      <div class="w-[10%] text-right pr-6">Action</div>
    </div>
    <div class="flex flex-col w-full">
      <MyOrderCard v-for="i in 10" :key="i" />
    </div>
  </div>
</template>
<script setup>
import MyOrderCard from '../basecomponents/MyOrderCard.vue';
</script>
