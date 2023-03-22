<template>
  <div :class="containerClass">
    {{ statusText }}
  </div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  orderStatus: {
    type: Number,
    required: true,
  },
  orderFilledAmount: {
    type: Number,
    required: true,
  },
});
/*
  Invalid: 0,
  InvalidMakerAssetAmount: 1,
  InvalidTakerAssetAmount: 2,
  Fillable: 3,
  Expired: 4,
  FullyFilled: 5,
  Cancelled: 6,
*/
const statusText = computed(() => {
  if (props.orderStatus === 5) {
    return 'Filled';
  }
  if (props.orderFilledAmount > 0) {
    return 'Partially Filled';
  }
  if (props.orderStatus === 6) {
    return 'Canceled';
  }
  return 'Expired';
});
const containerClass = computed(() => [
  'flex',
  'capitalize',
  'items-center',
  'gap-1',
  'text-xs leading-5',
  'px-3 py-0.5',
  'max-w-fit min-w-max',
  'rounded-full',
  {
    'bg-[#D6F3D3] text-Color-Code-Green': props.orderStatus === 5, // Filled
    'bg-[#D7D9DF] text-Grayscale-Grey-2': props.orderStatus !== 5 && props.orderFilledAmount > 0, // Partially filled
    'bg-[#D7D9DE] text-Grayscale-Grey-2': props.orderStatus === 4 && props.orderFilledAmount === 0, // Expired
    'bg-[#F8D3D3] text-Color-Code-Red': props.orderStatus === 6 && props.orderFilledAmount === 0, // Canceled
  },
]);
</script>
