<template>
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
      <EcoProjectCard v-for="i in 9" :key="i" />
    </div>
    <div class="w-full flex items-center justify-center">
      <y-pagination :total="90" :perPage="9" :pageRange="10" :page="1"></y-pagination>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import EcoProjectCard from '@/components/ecoproject/EcoProjectCard.vue';

const suggestionChipPickedVal = ref('suggestion-all');
</script>
