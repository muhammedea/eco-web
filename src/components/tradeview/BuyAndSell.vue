<template>
  <div class="w-full flex flex-col gap-4">
    <div class="text-lg leading-5 font-medium text-Black-and-White-Black py-4 w-full border-b pl-4">
      {{ isSell ? 'Sell' : 'Buy' }}
    </div>
    <div class="flex items-center justify-between">
      <div class="text-sm font-medium text-Grayscale-Grey-2">Available <span>-- USDT</span></div>
      <a
        :class="
          isSell
            ? 'text-Color-Code-Red border-Color-Code-Red cursor-pointer'
            : 'text-Color-Code-Green border-Color-Code-Green cursor-pointer'
        "
        class="px-4 py-2 flex justify-center items-center border text-sm rounded"
      >
        <span class="h-5 pr-1">
          <i class="yi yi-leave-alt" style="font-size: 20px"></i>
        </span>
        {{ isSell ? 'Withdraw' : 'Deposit' }}
      </a>
    </div>
    <y-tabs v-model="tabs" class="overflow-scroll scrollbar-hide w-full">
      <y-tab title="Limit">
        <y-input class="mt-1 w-full" type="number" dropdown label="Price" dropdown-title="USDT"></y-input>
        <y-input class="mt-3 w-full" type="number" dropdown label="Total" dropdown-title="TFBX"></y-input>
        <div class="w-full flex flex-col gap-2">
          <label for="myRange" class="w-full">
            <input
              type="range"
              min="0"
              :max="rangeSliderMax"
              v-model="rangeSliderVal"
              class="rangeSlider mt-5"
              id="myRange"
            />
          </label>
          <div class="w-full flex items-center justify-between text-sm text-Grayscale-Grey-2">
            <span v-for="i in rangeSliderText.length" :key="i" class="text-center">{{ rangeSliderText[i - 1] }}</span>
          </div>
        </div>
        <y-input class="mt-3 w-full" type="number" dropdown label="Amount" dropdown-title="USDT"></y-input>
        <button
          class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md"
          :class="isSell ? 'bg-Color-Code-Red' : 'bg-Color-Code-Green'"
        >
          Log In or Sign Up
        </button>
      </y-tab>
      <y-tab title="Market">
        <div></div>
      </y-tab>
      <y-tab title="Stop-limit">
        <div></div>
      </y-tab>
    </y-tabs>
  </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
  isSell: {
    type: Boolean,
    default: false,
  },
});
const tabs = ref(['0']);
const rangeSliderMax = ref(1300);
const rangeSliderText = ref([]);
const rangeSliderVal = ref(rangeSliderMax.value / 2);
onMounted(() => {
  const test = rangeSliderMax.value / 4;
  for (let index = 0; index < 5; index += 1) {
    rangeSliderText.value[index] = test * index;
    console.log('asdasdasadas', rangeSliderText.value);
  }
  console.log(rangeSliderText.value);
});
console.log(props.isSell);
</script>

<style scoped>
.rangeSlider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 3px;
  background: rgb(136, 222, 122);
  background: linear-gradient(90deg, rgba(136, 222, 122, 1) 0%, rgba(246, 184, 99, 1) 50%, rgba(222, 122, 122, 1) 100%);
  outline: none;
  border-radius: 999px;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.rangeSlider:hover {
  opacity: 1;
}

.rangeSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: #ffffff;
  border: 1px #f1f2f6 solid;
  border-radius: 999px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.rangeSlider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}
</style>
