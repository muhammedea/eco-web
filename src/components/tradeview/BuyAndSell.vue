<template>
  <div class="w-full flex flex-col gap-4">
    <div class=" text-lg leading-5 font-medium text-Black-and-White-Black py-4 w-full border-b pl-4">{{isSell? 'Sell':'Buy'}}</div>
    <div class="flex items-center justify-between">
        <div class="text-sm font-medium text-Grayscale-Grey-2">Available <span>-- USDT</span></div>
        <a :class="isSell?'text-Color-Code-Red border-Color-Code-Red cursor-pointer':'text-Color-Code-Green border-Color-Code-Green cursor-pointer'"
        class="px-4 py-2 flex justify-center items-center border text-sm rounded">
            <span class="h-5 pr-1">
                <i class="yi yi-leave-alt" style="font-size:20px"></i>
            </span>
            {{isSell?'Withdraw':'Deposit'}}
        </a>
    </div>
    <y-tabs v-model="test" class="overflow-scroll scrollbar-hide w-full">
      <y-tab title="Limit">
        <y-input
          class="mt-3 w-full"
          type="number"
          dropdown
          label="Price"
          dropdown-title="USDT"
        ></y-input>
        <y-input
          class="mt-3 w-full"
          type="number"
          dropdown
          label="Total"
          dropdown-title="TFBX"
        ></y-input>
        <y-input
          class="mt-3 w-full"
          type="number"
          dropdown
          label="Amount"
          dropdown-title="USDT"
        ></y-input>
        <button class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md" :class="isSell ?'bg-Color-Code-Red':'bg-Color-Code-Green'">Log In or Sign Up</button>
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
import { defineProps, ref } from 'vue';

const props = defineProps({
  isSell: {
    type: Boolean,
    default: false,
  },
});
const test = ref(['0']);
console.log(props.isSell);
</script>
