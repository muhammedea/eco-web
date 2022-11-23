<template>
  <div class="px-6 pt-8 flex flex-col w-full">
    <TradeViewHeader />
    <div class="flex w-full lg:flex-row flex-col border-b">
      <div class="w-full lg:w-5/12 flex justify-between pr-6 border-r pb-6">
        <div class="w-n-gap-3-50">
          <BuyAndSell />
        </div>
        <div class="w-n-gap-3-50">
          <BuyAndSell :isSell="true" />
        </div>
      </div>
      <div class="w-full lg:w-7/12 flex md:flex-row flex-col justify-center items-center">
        <h1 class="text-title">GRAFİKLER</h1>
      </div>
    </div>
    <div class="flex w-full lg:flex-row flex-col">
      <div class="w-full lg:w-5/12 border-r">
        <FavoriteTrades />
      </div>
      <div class="w-full lg:w-7/12 flex md:flex-row flex-col">
        <OrderBook />
        <MarketTrades />
      </div>
    </div>
  </div>
</template>
<script setup>
import TradeViewHeader from '@/components/tradeview/TradeViewHeader.vue';
import OrderBook from '@/components/tradeview/OrderBook.vue';
import MarketTrades from '@/components/tradeview/MarketTrades.vue';
import FavoriteTrades from '@/components/tradeview/FavoriteTrades.vue';
import BuyAndSell from '@/components/tradeview/BuyAndSell.vue';
// import { ref } from 'vue';
</script>
