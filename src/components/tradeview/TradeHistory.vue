<template>
  <div class="flex flex-col w-full min-w-[650px]">
    <div class="w-full flex items-center text-base-leading-5 text-Grayscale-Grey-2 font-semibold py-3">
      <div class="w-[15%] text-left pl-6">Date</div>
      <div class="w-[13%] text-left">Type</div>
      <div class="w-[18%] text-left">Pair</div>
      <!-- <div class="w-[13.25%] text-right">Order Price</div> -->
      <!-- <div class="w-[10.5%] text-right">Amount</div> -->
      <div class="w-[17%] text-right">Total Price</div>
      <div class="w-[19%] text-right">Filled Amount</div>
      <div class="w-[18%] text-center pr-6">Status</div>
    </div>
    <div class="flex flex-col w-full">
      <TradeHistoryCard v-for="i in 10" :key="i" />
    </div>
  </div>
</template>
<script setup>
import TradeHistoryCard from '../basecomponents/TradeHistoryCard.vue';
</script>
