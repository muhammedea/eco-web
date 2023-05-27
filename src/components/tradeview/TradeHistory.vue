<template>
  <div class="flex flex-col w-full min-w-[650px]">
    <div class="w-full flex items-center text-base-leading-5 text-Grayscale-Grey-2 font-semibold py-3">
      <div class="w-[14.5%] text-left pl-6">Date</div>
      <div class="w-[7.5%] text-left">Type</div>
      <div class="w-[18%] text-left">Pair</div>
      <div class="w-[13%] text-right">Price</div>
      <div class="w-[10.5%] text-right">Amount</div>
      <div class="w-[12.5%] text-right">Total Price</div>
      <div class="w-[14%] text-right">Filled Amount</div>
      <div class="w-[10%] text-center pr-6">Status</div>
    </div>
    <div class="flex flex-col w-full">
      <TradeHistoryCard v-for="order in orders" :key="order.orderHash" :order="order" :pair="pair" />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import useWeb3Store from '@/store/web3';
import config from '@/config';
import TradeHistoryCard from '../basecomponents/TradeHistoryCard.vue';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
});

const web3Store = useWeb3Store();
const orders = ref([]);

function fetchData() {
  console.log('ttttttttttttttttt');
  if (web3Store.account) {
    console.log(props.pair);
    fetch(`${config.API_URL}/orderbook/orders?${new URLSearchParams({
      pairId: props.pair.id,
      maker: web3Store.account,
      statuses: '4,5,6',
    })}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        orders.value = responseJson;
      });
  }
}
fetchData();

watch(() => web3Store.account, fetchData);
</script>
