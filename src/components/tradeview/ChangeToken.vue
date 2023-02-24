<template>
  <div
    class="px-4 pb-4 w-full min-w-[350px] md:min-w-[600px] min-h-[300px] max-h-[500px] border rounded-lg shadow-2xl bg-white z-20 overflow-y-scroll scrollbar-hide"
  >
    <div class="w-full h-full flex flex-col">
      <div class="flex flex-col gap-4 pt-4 sticky top-0 bg-white">
        <y-input suffix class="flex-1" placeholder="Type you search here">
          <template #suffix>
            <button class="mr-4 rounded-full flex justify-center items-center text-Grayscale-Grey-3 text-2xl">
              <i class="yi yi-search"></i>
            </button>
          </template>
        </y-input>
        <div class="flex flex-col w-full">
          <div class="py-2 px-4 w-full">
            <span class="text-sm text-Grayscale-Grey-3 font-mediuml w-6/12 inline-block">Pair</span>
            <span class="text-sm text-Grayscale-Grey-3 font-medium w-3/12 inline-block text-right">Price</span>
            <span class="text-sm text-Grayscale-Grey-3 font-medium w-3/12 inline-block text-right pr-4 md:pr-10">Change</span>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col gap-4">
        <TradeListCard v-for="pair in pairs" :key="pair.id" :pair="pair" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { getAllPairs } from '@/utils/pairs';
import TradeListCard from '../basecomponents/TradeListCard.vue';

const pairs = getAllPairs();
</script>
