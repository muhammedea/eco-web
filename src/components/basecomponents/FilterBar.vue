<template>
  <div class="w-full h-auto min-h-full flex flex-col gap-4">
    <div class="flex w-full items-center justify-between">
      <span class="text-2xl font-bold text-Black-and-White-Black">Filters</span>
      <button
        @click="resetAllFilters"
        class="hidden lg:block text-base underline underline-offset-2 text-Primary-Blue cursor-pointer transition-all duration-150 hover:no-underline hover:text-Acsen-Yellow"
      >
        Reset
      </button>
      <button
        @click="$emit('closeSideBar')"
        class="rounded-full w-8 h-8 lg:hidden flex justify-center items-center bg-Grayscale-Grey-5"
      >
        <i class="yi yi-close" style="font-size: 20px"></i>
      </button>
    </div>
    <div v-if="ecoProjectFilters" class="w-full flex flex-col gap-4">
      <y-accordion title="Max supply" :hr="false" icon="yi yi-chevron-right">
        <div class="flex items-center gap-1 mt-3">
          <y-radio
            id="maxSupply-1"
            v-model="maxSupplyPickedVal"
            inputValue="100M-300M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              maxSupplyPickedVal === '100M-300M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="100M - 300M"
          ></y-radio>
          <y-radio
            id="maxSupply-2"
            v-model="maxSupplyPickedVal"
            inputValue="300M-500M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              maxSupplyPickedVal === '300M-500M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="300M - 500M"
          ></y-radio>
          <y-radio
            id="maxSupply-3"
            v-model="maxSupplyPickedVal"
            inputValue="<500M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              maxSupplyPickedVal === '<500M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="< 500M"
          ></y-radio>
        </div>
        <y-input class="mt-3 w-full" type="number" placeholder="Minimum supply"></y-input>
        <y-input class="mt-3 w-full" type="number" placeholder="Maximum supply"></y-input>
      </y-accordion>
      <y-accordion title="Market Cap" :hr="false" icon="yi yi-chevron-right">
        <div class="flex items-center gap-1 mt-3">
          <y-radio
            id="marketCap-1"
            v-model="marketCapPickedVal"
            inputValue="1M-3M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              marketCapPickedVal === '1M-3M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="$ 1M - $ 5M"
          ></y-radio>
          <y-radio
            id="marketCap-2"
            v-model="marketCapPickedVal"
            inputValue="3M-5M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              marketCapPickedVal === '3M-5M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="$ 3M - $ 5M"
          ></y-radio>
          <y-radio
            id="marketCap-3"
            v-model="marketCapPickedVal"
            inputValue="<5M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              marketCapPickedVal === '<5M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="< $ 5M"
          ></y-radio>
        </div>
        <y-input prefix class="mt-3 w-full" placeholder="Minimum price">
          <template #prefix>
            <span
              class="w-11 h-11 flex justify-center items-center text-Black-and-White-Black font-bold bg-Grayscale-Grey-5"
              >$</span
            >
          </template>
        </y-input>
        <y-input prefix class="mt-3 w-full" placeholder="Maximum price">
          <template #prefix>
            <span
              class="w-11 h-11 flex justify-center items-center text-Black-and-White-Black font-bold bg-Grayscale-Grey-5"
              >$</span
            >
          </template>
        </y-input>
      </y-accordion>
      <y-accordion title="Circulating supply" :hr="false" collapse icon="yi yi-chevron-right">
        <div class="flex items-center gap-1 mt-3">
          <y-radio
            id="circulatingSupply-1"
            v-model="circulatingSupplyPickedVal"
            inputValue="100M-300M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              circulatingSupplyPickedVal === '100M-300M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="100M - 300M"
          ></y-radio>
          <y-radio
            id="circulatingSupply-2"
            v-model="circulatingSupplyPickedVal"
            inputValue="300M-500M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              circulatingSupplyPickedVal === '300M-500M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="300M - 500M"
          ></y-radio>
          <y-radio
            id="circulatingSupply-3"
            v-model="circulatingSupplyPickedVal"
            inputValue="<500M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              circulatingSupplyPickedVal === '<500M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="< 500M"
          ></y-radio>
        </div>
        <y-input class="mt-3 w-full" type="number" placeholder="Minimum supply"></y-input>
        <y-input class="mt-3 w-full" type="number" placeholder="Maximum supply"></y-input>
      </y-accordion>
      <y-accordion title="IDO take amount" :hr="false" collapse icon="yi yi-chevron-right">
        <div class="flex items-center gap-1 mt-3">
          <y-radio
            id="idoTakeAmount-1"
            v-model="idoTakeAmountPickedVal"
            inputValue="10M-50M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              idoTakeAmountPickedVal === '10M-50M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="100M - 300M"
          ></y-radio>
          <y-radio
            id="idoTakeAmount-2"
            v-model="idoTakeAmountPickedVal"
            inputValue="50M-100M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              idoTakeAmountPickedVal === '50M-100M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="300M - 500M"
          ></y-radio>
          <y-radio
            id="idoTakeAmount-3"
            v-model="idoTakeAmountPickedVal"
            inputValue="<100M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              idoTakeAmountPickedVal === '<100M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="< 500M"
          ></y-radio>
        </div>
        <y-input class="mt-3 w-full" type="number" placeholder="Minimum supply"></y-input>
        <y-input class="mt-3 w-full" type="number" placeholder="Maximum supply"></y-input>
      </y-accordion>
      <y-accordion title="IDO take sold" :hr="false" collapse icon="yi yi-chevron-right">
        <div class="flex items-center gap-1 mt-3">
          <y-radio
            id="idoTakeSold-1"
            v-model="idoTakeSoldPickedVal"
            inputValue="1K-3K"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              idoTakeSoldPickedVal === '1K-3K'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="$ 1K - $ 3K"
          ></y-radio>
          <y-radio
            id="idoTakeSold-2"
            v-model="idoTakeSoldPickedVal"
            inputValue="50M-100M"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              idoTakeSoldPickedVal === '50M-100M'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="$ 3K - $ 5K"
          ></y-radio>
          <y-radio
            id="idoTakeSold-3"
            v-model="idoTakeSoldPickedVal"
            inputValue="<5K"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              idoTakeSoldPickedVal === '<5K'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="< $ 5K"
          ></y-radio>
        </div>
        <y-input prefix class="mt-3 w-full" placeholder="Minimum supply">
          <template #prefix>
            <span
              class="w-11 h-11 flex justify-center items-center text-Black-and-White-Black font-bold bg-Grayscale-Grey-5"
              >$</span
            >
          </template>
        </y-input>
        <y-input prefix class="mt-3 w-full" placeholder="Maximum supply">
          <template #prefix>
            <span
              class="w-11 h-11 flex justify-center items-center text-Black-and-White-Black font-bold bg-Grayscale-Grey-5"
              >$</span
            >
          </template>
        </y-input>
      </y-accordion>
    </div>
    <div v-else class="w-full flex flex-col gap-4">
      <y-accordion title="Collection" :hr="false" icon="yi yi-chevron-right">
        <div class="flex flex-col gap-3 mt-3">
          <y-checkbox v-for="i in 6" :key="i" :label="'Collection ' + i" v-model="checkbox"></y-checkbox>
          <button class="text-sm font-bold text-Black-and-White-Black flex gap-1 pl-6 items-center">
            <span>See other</span>
            <i class="yi yi-chevron-down"></i>
          </button>
        </div>
      </y-accordion>
      <y-accordion title="Artwork Type" :hr="false" icon="yi yi-chevron-right">
        <div class="flex flex-col gap-3 mt-3">
          <y-checkbox v-for="i in 6" :key="i" :label="'Artwork ' + i" v-model="checkbox"></y-checkbox>
          <button class="text-sm font-bold text-Black-and-White-Black flex gap-1 pl-6 items-center">
            <span>See other</span>
            <i class="yi yi-chevron-down"></i>
          </button>
        </div>
      </y-accordion>
      <y-accordion title="Price Range" :hr="false" collapse icon="yi yi-chevron-right">
        <div class="flex items-center gap-1 mt-3">
          <y-radio
            id="priceRange-1"
            v-model="priceRangePickedVal"
            inputValue="0-TGS-1-TGS"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              priceRangePickedVal === '0-TGS-1-TGS'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="0 TGS - 1 TGS"
          ></y-radio>
          <y-radio
            id="priceRange-2"
            v-model="priceRangePickedVal"
            inputValue="1-TGS-2-TGS"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              priceRangePickedVal === '1-TGS-2-TGS'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="1 TGS - 2 TGS"
          ></y-radio>
          <y-radio
            id="priceRange-3"
            v-model="priceRangePickedVal"
            inputValue="<2TGS"
            class="filter-side-bar-chip-radio-button rounded-full px-3 py-2.5 text-sm font-semibold border"
            :class="
              priceRangePickedVal === '<2TGS'
                ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue'
                : 'bg-transparent text-Black-and-White-Black'
            "
            label="< 2 TGS"
          ></y-radio>
        </div>
        <y-input prefix class="mt-3 w-full" placeholder="Minimum price">
          <template #prefix>
            <span
              class="w-11 h-11 flex justify-center items-center text-Black-and-White-Black font-bold bg-Grayscale-Grey-5"
              >TGS</span
            >
          </template>
        </y-input>
        <y-input prefix class="mt-3 w-full" placeholder="Maximum price">
          <template #prefix>
            <span
              class="w-11 h-11 flex justify-center items-center text-Black-and-White-Black font-bold bg-Grayscale-Grey-5"
              >TGS</span
            >
          </template>
        </y-input>
      </y-accordion>
    </div>
    <div class="block lg:hidden w-full h-px bg-Grayscale-Grey-5 mt-auto"></div>
    <button
      @click="resetAllFilters"
      class="block lg:hidden text-base underline underline-offset-2 py-1.5 text-Primary-Blue cursor-pointer transition-all duration-150 hover:no-underline hover:text-Acsen-Yellow"
    >
      Reset
    </button>
    <button
      class="sticky bottom-0 flex justify-center items-center py-1.5 text-base text-white bg-Primary-Blue cursor-pointer transition-all border border-Primary-Blue rounded-md duration-150 hover:text-Primary-Blue hover:bg-transparent"
    >
      Accept
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

defineProps({
  ecoProjectFilters: {
    type: Boolean,
    default: false,
  },
  ecoMarketFilters: {
    type: Boolean,
    default: false,
  },
});

const maxSupplyPickedVal = ref();
const marketCapPickedVal = ref();
const circulatingSupplyPickedVal = ref();
const idoTakeAmountPickedVal = ref();
const idoTakeSoldPickedVal = ref();
const priceRangePickedVal = ref();
const checkbox = ref();
function resetAllFilters() {
  maxSupplyPickedVal.value = null;
  marketCapPickedVal.value = null;
  circulatingSupplyPickedVal.value = null;
  idoTakeAmountPickedVal.value = null;
  checkbox.value = null;
  idoTakeSoldPickedVal.value = null;
}
</script>

<style>
.filter-side-bar-chip-radio-button input {
  display: none;
}
</style>
