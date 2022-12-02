<template>
  <div class="px-4 py-8 flex flex-col gap-6 w-full">
    <h3 class="text-Black-and-White-Black text-2xl leading-5 font-bold">Order Book</h3>
    <div class="flex flex-col gap-3">
      <div class="grid grid-cols-3 text-Grayscale-Grey-2 text-base-leading-5 font-semibold">
        <span class="text-left">Price (USDT)</span>
        <span class="text-center">Cum(TFBX)</span>
        <span class="text-right pr-4">Cum(USDT)</span>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <OrderCard
          v-for="i in 7"
          :key="i"
          :buy_order="true"
          :price="0.0006909"
          cum-val_1="3,081.891K"
          cum-val_2="2,026.3863761"
          :bar_width="100 - i * 10"
        />
        <div class="flex justify-between w-full items-center py-1">
          <div class="flex gap-1.5 items-center text-base-leading-5">
            <span class="text-Grayscale-Grey-1">0.0006375</span>
            <span class="text-Grayscale-Grey-3">~ $0.00063</span>
          </div>
          <div class="w-6 h-6">
            <img src="@/assets/images/signal-alt.svg" alt="signal-alt" />
          </div>
        </div>
        <OrderCard
          v-for="i in 7"
          :key="i"
          :buy_order="false"
          :price="0.0006909"
          cum-val_1="3,081.891K"
          cum-val_2="2,026.3863761"
          :bar_width="i === 0 ? 10 : (i + 1) * 10"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import OrderCard from '../basecomponents/OrderCard.vue';
</script>
