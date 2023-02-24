<template>
  <div class="w-full flex flex-col gap-4">
    <div class="text-lg leading-5 font-medium text-Black-and-White-Black py-4 w-full border-b">
      {{ isSell ? 'Sell' : 'Buy' }}
    </div>
    <div class="flex items-center justify-between">
      <div class="text-sm font-medium text-Grayscale-Grey-2">
        Available: <span>{{ availableInputAmountText }}</span>
      </div>
      <a
        v-if="false"
        :class="
          isSell
            ? 'text-Color-Code-Red border-Color-Code-Red cursor-pointer hover:bg-Color-Code-Red hover:text-white'
            : 'text-Color-Code-Green border-Color-Code-Green cursor-pointer hover:bg-Color-Code-Green hover:text-white'
        "
        class="px-4 py-2 flex justify-center items-center border text-sm rounded transition-all duration-200"
      >
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
        <div class="w-full flex items-center gap-2 py-4 flex-wrap">
          <button
            @click="limitPercentage = '25'"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="limitPercentage === '25' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
          >
            25%
          </button>
          <button
            @click="limitPercentage = '50'"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="limitPercentage === '50' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
          >
            50%
          </button>
          <button
            @click="limitPercentage = '75'"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="limitPercentage === '75' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
          >
            75%
          </button>
          <button
            @click="limitPercentage = '100'"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="limitPercentage === '100' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
          >
            100%
          </button>
        </div>
        <y-input suffix class="w-full" placeholder="0" type="number" label="Amount">
          <template #suffix>
            <div class="py-2">
              <span class="px-2 border-l flex justify-center items-center text-Black-and-White-Black font-bold">
                {{ inputTokenSymbol }}
              </span>
            </div>
          </template>
        </y-input>
        <div v-if="web3Store.isLoading">Loading...</div>
        <button
          v-else-if="!approveStatus"
          @click="approve"
          :disabled="!web3Store.isWalletConnected"
          class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md transition-all duration-200"
          :class="isSell ? 'bg-Color-Code-Red hover:bg-Color-Code-Red-Hover' : 'bg-Color-Code-Green hover:bg-Color-Code-Green-Hover'"
        >
          Approve {{ inputTokenSymbol }}
        </button>
        <button
          v-else
          @click="action"
          :disabled="!web3Store.isWalletConnected"
          class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md transition-all duration-200"
          :class="isSell ? 'bg-Color-Code-Red hover:bg-Color-Code-Red-Hover' : 'bg-Color-Code-Green hover:bg-Color-Code-Green-Hover'"
        >
          {{ isSell ? 'Sell' : 'Buy' }} {{ pair.tokenA.symbol }}
        </button>
      </y-tab>
      <y-tab title="Market">
        <y-input class="mt-3 w-full" placeholder="0" type="number" label="Price" disabled disabledText="Best available price"> </y-input>
        <y-input suffix class="mt-3 w-full" placeholder="0" type="number" label="Total">
          <template #suffix>
            <div class="py-2">
              <span class="px-2 border-l flex justify-center items-center text-Black-and-White-Black font-bold">
                {{ inputTokenSymbol }}
              </span>
            </div>
          </template>
        </y-input>
        <div class="w-full flex items-center gap-2 py-4 flex-wrap">
          <button
            @click="marketPercentage = '25'"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="marketPercentage === '25' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
          >
            25%
          </button>
          <button
            @click="marketPercentage = '50'"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="marketPercentage === '50' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
          >
            50%
          </button>
          <button
            @click="marketPercentage = '75'"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="marketPercentage === '75' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
          >
            75%
          </button>
          <button
            @click="marketPercentage = '100'"
            class="filter-side-bar-chip-radio-button rounded-full px-2 xs:px-3 py-1 text-sm font-semibold border cursor-pointer hover:border-Primary-Blue"
            :class="marketPercentage === '100' ? ' bg-Tint-Brand-Secondary border-Tint-Brand-Secondary text-Primary-Blue' : 'bg-transparent text-Black-and-White-Black'"
          >
            100%
          </button>
        </div>
        <button
          :disabled="!web3Store.isWalletConnected"
          class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md transition-all duration-200"
          :class="isSell ? 'bg-Color-Code-Red hover:bg-Color-Code-Red-Hover' : 'bg-Color-Code-Green hover:bg-Color-Code-Green-Hover'"
        >
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
const limitPercentage = ref();
const marketPercentage = ref();
const inputAmount = ref('0');
const outputAmount = ref('0');
const rangeSliderMax = ref(1300);
const rangeSliderText = ref([]);
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
  const promise = props.isSell ? tradeService.createSellOrder(inputAmount.value, outputAmount.value) : tradeService.createBuyOrder(inputAmount.value, outputAmount.value);
  await promise;
};
</script>
