<template>
  <div class="pt-4 flex flex-col w-full">
    <TradeViewHeader :pair="pair" />
    <div class="flex w-full lg:flex-row flex-col-reverse border-b pb-3">
      <div class="w-full lg:w-[45%] hidden sm:flex flex-row px-6 lg:border-r">
        <div class="w-full sm:pr-6 sm:border-r">
          <BuyAndSell :pair="pair" />
        </div>
        <div class="w-full sm:pl-6">
          <BuyAndSell :pair="pair" :isSell="true" />
        </div>
      </div>
      <y-tabs class="sm:hidden buy-sell-tabs px-6" v-model="marketSellTab">
        <y-tab title="Buy">
          <div class="w-full">
            <BuyAndSell :pair="pair" /></div
        ></y-tab>
        <y-tab title="Sell">
          <div class="w-full">
            <BuyAndSell :pair="pair" :isSell="true" /></div
        ></y-tab>
      </y-tabs>
      <div class="w-full lg:w-[55%] flex md:flex-row flex-col justify-center items-center">
        <TradeChart :pair="pair" />
      </div>
    </div>
    <div class="flex w-full lg:flex-row flex-col pb-3">
      <div class="w-full lg:w-3/5 lg:border-r relative">
        <y-tabs v-model="myOrderTab" class="order-book-tabs">
          <y-tab title="My Order" class="overflow-x-scroll">
            <MyOrderList />
          </y-tab>
          <y-tab title="Trade History" class="overflow-x-scroll">
            <TradeHistory />
          </y-tab>
        </y-tabs>
        <button v-if="myOrderTab === 0" class="hidden sm:flex text-base-leading-5 text-Color-Code-Red font-bold absolute top-4 right-6">Cancel All</button>
        <y-checkbox v-if="myOrderTab === 1" label="Show canceled orders" class="sm:flex hidden !text-base-leading-5 absolute top-4 right-6 !text-Grayscale-Grey-3" v-model="canceledOrders"></y-checkbox>
      </div>
      <div class="w-full lg:w-2/5 flex md:flex-row flex-col">
        <y-tabs class="order-book-tabs" v-model="orderBookTab">
          <y-tab title="Order Book">
            <div class="w-full">
              <OrderBook :pair="pair" /></div
          ></y-tab>
          <y-tab title="Market Trade">
            <div class="w-full">
              <MarketTrades :pair="pair" />
            </div>
          </y-tab>
        </y-tabs>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getAllPairs } from '@/utils/pairs';
import TradeViewHeader from '@/components/tradeview/TradeViewHeader.vue';
import OrderBook from '@/components/tradeview/OrderBook.vue';
import MarketTrades from '@/components/tradeview/MarketTrades.vue';
import MyOrderList from '@/components/tradeview/MyOrderList.vue';
import TradeHistory from '@/components/tradeview/TradeHistory.vue';
import BuyAndSell from '@/components/tradeview/BuyAndSell.vue';
import TradeChart from '@/components/tradeview/TradeChart.vue';

const pairs = getAllPairs();
const route = useRoute();
const pairId = computed(() => (route.params.pairId && parseInt(route.params.pairId, 10)) || 1);
const pair = computed(() => pairs.find((p) => p.id === pairId.value));

const marketSellTab = ref(0);
const orderBookTab = ref(0);
const myOrderTab = ref(0);
const canceledOrders = ref(false);
</script>
<style>
.buy-sell-tabs nav {
  display: flex !important;
  flex-direction: row !important;
}
.order-book-tabs nav {
  display: flex !important;
  flex-direction: row !important;
  margin: 0 24px !important;
}
</style>
