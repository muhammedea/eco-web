<template>
  <div class="flex flex-col gap-6 px-6 pt-8 pb-10">
    <div class="w-full flex sm:flex-row flex-col gap-6 items-center justify-between">
      <div class="w-full sm:w-2/5">
        <y-input suffix rounded class="flex-1" placeholder="Type you search here">
          <template #suffix>
            <button class="mr-0.5 w-8 h-8 rounded-full bg-Acsen-Yellow flex justify-center items-center text-white">
              <i class="yi yi-search"></i>
            </button>
          </template>
        </y-input>
      </div>
      <div class="flex items-center gap-4 w-full sm:w-auto">
        <button
          @click="$emit('openFilters')"
          class="text-Grayscale-Grey-2 text-xs lg:hidden flex border justify-center items-center gap-2 py-2 px-3 rounded"
        >
          <i class="yi yi-filter"></i>
          <span class="text-Black-and-White-Black">Filters (2)</span>
        </button>
        <div class="flex items-center gap-4 text-base-leading-5 font-medium text-Black-and-White-Black">
          <span class="text-Grayscale-Grey-3">Sort by:</span>
          <!-- we can change dropdown panel width  -->
          <y-dropdown left :classes="['!w-[98px]']">
            <template #activator="{ open }">
              <button @click.stop="open" class="flex items-center gap-1">
                Highest <i class="yi yi-chevron-down"></i>
              </button>
            </template>
            <y-dropdown-item @click="$emit('lowest', group)">Lowest</y-dropdown-item>
            <y-dropdown-item @click="$emit('relevance', group)">Relevance</y-dropdown-item>
          </y-dropdown>
        </div>
      </div>
    </div>
    <div class="flex gap-y-10 flex-wrap justify-between w-full">
      <EcoMarketCard v-for="i in 9" :key="i" />
    </div>
    <div class="w-full flex items-center justify-center">
      <y-pagination :total="90" :perPage="9" :pageRange="10" :page="1"></y-pagination>
    </div>
  </div>
</template>
<script setup>
// import { ref } from 'vue';
import EcoMarketCard from '@/components/ecomarket/EcoMarketCard.vue';

</script>
