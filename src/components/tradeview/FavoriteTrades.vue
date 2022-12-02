<template>
  <div class="w-full">
    <y-tabs v-model="tabs" class="overflow-scroll scrollbar-hide w-full">
      <y-tab title="Favorites">
        <div class="flex flex-col w-full">
          <div class="py-2 px-4 w-full">
            <span class="text-sm text-Grayscale-Grey-3 font-mediuml w-4/12 inline-block">Pair</span>
            <span class="text-sm text-Grayscale-Grey-3 font-medium w-4/12 inline-block text-right">Price</span>
            <span class="text-sm text-Grayscale-Grey-3 font-medium w-4/12 inline-block text-right pr-4 md:pr-10">Change</span>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-full">
            <TradeListCard />
            <TradeListCard />
            <TradeListCard />
            <TradeListCard />
            <TradeListCard />
            <TradeListCard />
            <TradeListCard />
            <TradeListCard />
            <TradeListCard />
        </div>
      </y-tab>
    </y-tabs>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import TradeListCard from '../basecomponents/TradeListCard.vue';

const tabs = ref(['0']);
</script>
