<template>
  <div class="w-full flex relative">
    <div
      class="transition-all duration-400 h-full lg:px-6 lg:py-8  overflow-y-scroll overflow-x-hidden scrollbar-hide"
      :class="filterSideBarOpen ? 'w-full fixed top-0 left-0 z-10 bg-white px-6 py-8 max-h-screen' : 'w-0 lg:w-full max-w-[345px] max-h-[calc(100vh-80px)]'"
    >
      <FilterBar  @closeSideBar="openFilterSideBar" ecoProjectFilters />
    </div>

    <div class="w-full lg:w-[calc(100%-345px)] h-screen border-l">
      <div class="flex flex-col gap-6 px-6 py-10">
        <div class="flex items-center gap-1.5 xs:gap-3">
          <y-radio
            id="suggestion-all"
            v-model="suggestionChipPickedVal"
            inputValue="suggestion-all"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 xs:py-2.5 py-1 text-sm font-semibold border"
            :class="
              suggestionChipPickedVal === 'suggestion-all'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="All"
          ></y-radio>
          <y-radio
            id="suggestion-new"
            v-model="suggestionChipPickedVal"
            inputValue="suggestion-new"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 xs:py-2.5 py-1 text-sm font-semibold border"
            :class="
              suggestionChipPickedVal === 'suggestion-new'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="New"
          ></y-radio>
          <y-radio
            id="suggestion-priority"
            v-model="suggestionChipPickedVal"
            inputValue="suggestion-priority"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 xs:py-2.5 py-1 text-sm font-semibold border"
            :class="
              suggestionChipPickedVal === 'suggestion-priority'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="Priority"
          ></y-radio>
          <y-radio
            id="suggestion-recommended"
            v-model="suggestionChipPickedVal"
            inputValue="suggestion-recommended"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 xs:py-2.5 py-1 text-sm font-semibold border"
            :class="
              suggestionChipPickedVal === 'suggestion-recommended'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="Recommended"
          ></y-radio>
        </div>
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
</template>
<script setup>
import { ref } from 'vue';
import FilterBar from '@/components/ecoproject/FilterBar.vue';
import EcoProjectCard from '@/components/ecoproject/EcoProjectCard.vue';

const suggestionChipPickedVal = ref('suggestion-all');
const filterSideBarOpen = ref(false);

function openFilterSideBar() {
  filterSideBarOpen.value = !filterSideBarOpen.value;
  if (document.body.classList.value === 'overflow-hidden') document.body.classList.remove('overflow-hidden');
  else document.body.classList.add('overflow-hidden');
}
</script>
