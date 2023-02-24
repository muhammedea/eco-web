<template>
  <div :class="containerClass">
    {{ status === 1 ? 'Partially filled' : status === 2 ? 'Filled' : 'Canceled' }}
  </div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  status: {
    type: Number,
    required: true,
  },
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
    'bg-[#D7D9DF] text-Grayscale-Grey-2': props.status === 1, // Partially filled
    'bg-[#D6F3D3] text-Color-Code-Green': props.status === 2, // Filled
    'bg-[#F8D3D3] text-Color-Code-Red': props.status === 3, // Canceled
  },
]);
</script>
