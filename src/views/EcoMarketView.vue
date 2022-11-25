<template>
  <div class="w-full flex flex-col gap-6 justify-center">
    <div></div>
    <div class="px-6">
      <div class="w-full flex gap-[70px] p-4 border rounded-md">
        <div class="w-8/12 flex flex-col gap-5">
          <div class="w-full flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">Your TGS balance</span
              ><span class="text-base font-semibold text-Black-and-White-Black">300,000.000 TGST</span>
            </div>
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">Pending harvest</span
              ><span class="text-base font-semibold text-Black-and-White-Black">0,00 </span>
            </div>
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">TGS Price</span
              ><span class="text-base font-semibold text-Black-and-White-Black">$ 0.04661</span>
            </div>
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">TGS Market Cap</span
              ><span class="text-base font-semibold text-Black-and-White-Black">$ 0.000</span>
            </div>
          </div>
          <div class="w-full flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">TGS in circulation</span
              ><span class="text-base font-semibold text-Black-and-White-Black">449,436,467.000</span>
            </div>
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">TGS burned</span
              ><span class="text-base font-semibold text-Black-and-White-Black">50,563.533</span>
            </div>
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">TVL (TGS)</span
              ><span class="text-base font-semibold text-Black-and-White-Black">$ 2,046,450.820 </span>
            </div>
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">Volume (24hr)</span
              ><span class="text-base font-semibold text-Black-and-White-Black">$ 263,896.4</span>
            </div>
          </div>
        </div>
        <div class="w-px h-full flex bg-Grayscale-Grey-4"></div>
        <div class="w-4/12 flex flex-col gap-5">
          <div class="w-full flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">Your TGS balance</span
              ><span class="text-base font-semibold text-Black-and-White-Black">300,000.000 TGST</span>
            </div>
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">Pending harvest</span
              ><span class="text-base font-semibold text-Black-and-White-Black">0,00 </span>
            </div>
          </div>
          <div class="w-full flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">TGS in circulation</span
              ><span class="text-base font-semibold text-Black-and-White-Black">449,436,467.000</span>
            </div>
            <div class="flex flex-col">
              <span class="text-Grayscale-Grey-1 text-sm font-normal">TGS burned</span
              ><span class="text-base font-semibold text-Black-and-White-Black">50,563.533</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex relative border-t">
      <div
        class="transition-all duration-400 h-full lg:px-6 lg:py-8 overflow-y-scroll overflow-x-hidden scrollbar-hide"
        :class="
          filterSideBarOpen
            ? 'w-full fixed top-0 left-0 z-10 bg-white px-6 py-8 max-h-screen'
            : 'w-0 lg:w-full max-w-[345px] max-h-[calc(100vh-80px)]'
        "
      >
        <FilterBar @closeSideBar="openFilterSideBar" />
      </div>

      <div class="w-full lg:w-[calc(100%-345px)] h-screen border-l">
        <div class="flex flex-col gap-6 px-6 py-8">
          <div class="w-full flex sm:flex-row flex-col gap-6 items-center justify-between">
            <div class="w-full sm:w-2/5">
              <y-input suffix rounded class="flex-1" placeholder="Type you search here">
                <template #suffix>
                  <button
                    class="mr-0.5 w-8 h-8 rounded-full bg-Acsen-Yellow flex justify-center items-center text-white"
                  >
                    <i class="yi yi-search"></i>
                  </button>
                </template>
              </y-input>
            </div>
            <div class="flex items-center gap-4 w-full sm:w-auto">
              <button
                @click="openFilterSideBar"
                class="text-Grayscale-Grey-2 text-xs lg:hidden flex border justify-center items-center gap-2 py-2 px-3 rounded"
              >
                <i class="yi yi-filter"></i>
                <span class="text-Black-and-White-Black">Filters (2)</span>
              </button>
              <span class="text-base-leading-5">Sort by: Highest</span>
            </div>
          </div>
          <div class="flex gap-y-10 flex-wrap justify-between w-full">
            <EcoProjectCard v-for="i in 9" :key="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import FilterBar from '@/components/ecoproject/FilterBar.vue';
import EcoProjectCard from '@/components/ecoproject/EcoProjectCard.vue';

const filterSideBarOpen = ref(false);

function openFilterSideBar() {
  filterSideBarOpen.value = !filterSideBarOpen.value;
  if (document.body.classList.value === 'overflow-hidden') document.body.classList.remove('overflow-hidden');
  else document.body.classList.add('overflow-hidden');
}
</script>
