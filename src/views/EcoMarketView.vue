<template>
  <div class="w-full flex flex-col gap-6 justify-center">
    <EcoMarketHero />
    <div class="px-6">
      <EcoMarketHeader />
    </div>
    <div class="w-full flex relative border-t">
      <div
        class="transition-all duration-300 h-full lg:px-6 lg:py-8 overflow-y-scroll overflow-x-hidden scrollbar-hide "
        :class="
          filterSideBarOpen
            ? 'w-full fixed top-20 left-0 z-10 bg-white px-6 py-8 max-h-screen'
            : 'w-0 lg:w-full max-w-[345px] max-h-[calc(100vh-80px)] sticky left-0 top-20'
        "
      >
        <FilterBar @closeSideBar="openFilterSideBar" />
      </div>
      <div class="w-full lg:w-[calc(100%-345px)] lg:border-l">
        <EcoMarketList @openFilters="openFilterSideBar" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import FilterBar from '@/components/basecomponents/FilterBar.vue';
import EcoMarketHeader from '@/components/ecomarket/EcoMarketHeader.vue';
import EcoMarketHero from '@/components/ecomarket/EcoMarketHero.vue';
import EcoMarketList from '@/components/ecomarket/EcoMarketList.vue';

const filterSideBarOpen = ref(false);

function openFilterSideBar() {
  filterSideBarOpen.value = !filterSideBarOpen.value;
  if (document.body.classList.value === 'overflow-hidden') document.body.classList.remove('overflow-hidden');
  else document.body.classList.add('overflow-hidden');
}
</script>
