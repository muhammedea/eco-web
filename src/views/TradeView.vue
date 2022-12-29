<template>
  <div class="px-6 pt-8 flex flex-col w-full">
    <TradeViewHeader :pair="pair" />
    <div class="flex w-full lg:flex-row flex-col border-b">
      <div class="w-full lg:w-5/12 flex flex-col sm:flex-row justify-between lg:pr-6 lg:border-r pb-6">
        <div class="w-full sm:w-n-gap-3-50">
          <BuyAndSell :pair="pair" />
        </div>
        <div class="w-full sm:w-n-gap-3-50">
          <BuyAndSell :pair="pair" :isSell="true" />
        </div>
      </div>
      <div class="w-full lg:w-7/12 flex md:flex-row flex-col justify-center items-center">
        <h1 class="text-title">GRAFİKLER</h1>
      </div>
    </div>
    <div class="flex w-full lg:flex-row flex-col">
      <div class="w-full lg:w-5/12 lg:border-r py-8 lg:pr-6">
        <FavoriteTrades />
      </div>
      <div class="w-full lg:w-7/12 flex md:flex-row flex-col">
        <OrderBook :pair="pair" />
        <MarketTrades :pair="pair" />
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
import { getAllPairs } from '@/utils/pairs';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const pairs = getAllPairs();
const route = useRoute();
const pairId = computed(() => (route.params.pairId && parseInt(route.params.pairId, 10)) || 1);
const pair = computed(() => pairs.find((p) => p.id === pairId.value));
</script>
