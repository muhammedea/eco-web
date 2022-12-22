<template>
  <div class="w-full flex flex-col gap-4">
    <div class="text-lg leading-5 font-medium text-Black-and-White-Black py-4 w-full border-b pl-4">
      {{ isSell ? 'Sell' : 'Buy' }}
    </div>
    <div class="flex items-center justify-between">
      <div class="text-sm font-medium text-Grayscale-Grey-2">Available: <span>{{ availableInputAmountText }}</span>
      </div>
      <a v-if="false" :class="
  isSell
    ? 'text-Color-Code-Red border-Color-Code-Red cursor-pointer hover:bg-Color-Code-Red hover:text-white'
    : 'text-Color-Code-Green border-Color-Code-Green cursor-pointer hover:bg-Color-Code-Green hover:text-white'
" class="px-4 py-2 flex justify-center items-center border text-sm rounded transition-all duration-200">
        <span class="h-5 pr-1">
          <i class="yi yi-leave-alt" style="font-size: 20px"></i>
        </span>
        {{ isSell ? 'Withdraw' : 'Deposit' }}
      </a>
    </div>
    <y-tabs v-model="tabs" class="overflow-scroll scrollbar-hide w-full">
      <y-tab title="Limit">
        <y-input suffix class="mt-3 w-full" placeholder="0" type="number" label="Price" v-model="inputAmount">
          <template #suffix>
            <div class="py-2">
              <span class="px-2 border-l flex justify-center items-center text-Black-and-White-Black font-bold">
                {{ inputTokenSymbol }}
              </span>
            </div>
          </template>
        </y-input>
        <y-input suffix class="mt-3 w-full" placeholder="0" type="number" label="Total" v-model="outputAmount">
          <template #suffix>
            <div class="py-2">
              <span class="px-2 border-l flex justify-center items-center text-Black-and-White-Black font-bold">
                {{ outputTokenSymbol }}
              </span>
            </div>
          </template>
        </y-input>
        <div class="w-full flex flex-col gap-2">
          <label for="myRange" class="w-full">
            <input type="range" min="0" :max="rangeSliderMax" v-model="rangeSliderVal" class="rangeSlider mt-5"
              id="myRange" />
          </label>
          <div class="w-full flex items-center justify-between text-sm text-Grayscale-Grey-2">
            <span v-for="i in rangeSliderText.length" :key="i" class="text-center">{{ rangeSliderText[i - 1] }}</span>
          </div>
        </div>
        <y-input suffix class="mt-3 w-full" placeholder="0" type="number" label="Amount">
          <template #suffix>
            <div class="py-2">
              <span class="px-2 border-l flex justify-center items-center text-Black-and-White-Black font-bold">
                {{ inputTokenSymbol }}
              </span>
            </div>
          </template>
        </y-input>
        <div v-if="web3Store.isLoading">Loading...</div>
        <button v-else-if="!approveStatus" @click="approve" :disabled="!web3Store.isWalletConnected"
          class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md transition-all duration-200 bg-gray-500 hover:bg-gray-400">
          Approve {{ inputTokenSymbol }}
        </button>
        <button v-else @click="action" :disabled="!web3Store.isWalletConnected"
          class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md transition-all duration-200" :class="
  isSell
    ? 'bg-Color-Code-Red hover:bg-Color-Code-Red-Hover'
    : 'bg-Color-Code-Green hover:bg-Color-Code-Green-Hover'
">
          {{ isSell ? 'Sell' : 'Buy' }} {{ pair.tokenA.symbol }}
        </button>
      </y-tab>
      <y-tab title="Market">
        <y-input class="mt-3 w-full" placeholder="0" type="number" label="Price" disabled
          disabledText="Best available price">
        </y-input>
        <y-input suffix class="mt-3 w-full" placeholder="0" type="number" label="Total">
          <template #suffix>
            <div class="py-2">
              <span class="px-2 border-l flex justify-center items-center text-Black-and-White-Black font-bold">
                {{ inputTokenSymbol }}
              </span>
            </div>
          </template>
        </y-input>
        <div class="w-full flex flex-col gap-2">
          <label for="myRange" class="w-full">
            <input type="range" min="0" :max="rangeSliderMax" v-model="rangeSliderVal" class="rangeSlider mt-5"
              id="myRange" />
          </label>
          <div class="w-full flex items-center justify-between text-sm text-Grayscale-Grey-2">
            <span v-for="i in rangeSliderText.length" :key="i" class="text-center">{{ rangeSliderText[i - 1] }}</span>
          </div>
        </div>
        <button :disabled="!web3Store.isWalletConnected"
          class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md transition-all duration-200" :class="
  isSell
    ? 'bg-Color-Code-Red hover:bg-Color-Code-Red-Hover'
    : 'bg-Color-Code-Green hover:bg-Color-Code-Green-Hover'
">
          {{ isSell ? 'Sell' : 'Buy' }} {{ pair.tokenA.symbol }}
        </button>
      </y-tab>
    </y-tabs>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import useWeb3Store from '@/store/web3';
import useTradeService from '@/services/tradeService';
import { formatAmount } from '@/utils/helpers';

const props = defineProps({
  pair: {
    type: Object,
    required: true,
  },
  isSell: {
    type: Boolean,
    default: false,
  },
});

const web3Store = useWeb3Store();
const tabs = ref(['0']);
const inputAmount = ref('0');
const outputAmount = ref('0');
const rangeSliderMax = ref(1300);
const rangeSliderText = ref([]);
const rangeSliderVal = ref(rangeSliderMax.value / 2);
onMounted(() => {
  const test = rangeSliderMax.value / 4;
  for (let index = 0; index < 5; index += 1) {
    rangeSliderText.value[index] = test * index;
  }
});

const tradeService = useTradeService(props.pair);

const availableInputAmountText = computed(() => {
  if (props.isSell) {
    return `${formatAmount(tradeService.balanceTokenA.value)} ${props.pair.tokenA.symbol}`;
  }
  return `${formatAmount(tradeService.balanceTokenB.value)} ${props.pair.tokenB.symbol}`;
});

const inputTokenSymbol = computed(() => (props.isSell ? props.pair.tokenA.symbol : props.pair.tokenB.symbol));
const outputTokenSymbol = computed(() => (props.isSell ? props.pair.tokenB.symbol : props.pair.tokenA.symbol));
const approveStatus = computed(() => (props.isSell ? tradeService.isApprovedTokenA.value : tradeService.isApprovedTokenB.value));

const approve = async () => {
  const promise = props.isSell ? tradeService.approveTokenA() : tradeService.approveTokenB();
  await promise;
};

const action = async () => {
  const promise = props.isSell
    ? tradeService.createSellOrder(inputAmount.value, outputAmount.value)
    : tradeService.createBuyOrder(inputAmount.value, outputAmount.value);
  await promise;
};
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
  opacity: 0.6;
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

.rangeSlider::-webkit-slider-thumb:hover {
  transform: scale(1.3);
}

.rangeSlider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}
</style>
