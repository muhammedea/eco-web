<template>
  <div class="p-6 border rounded-md flex flex-col gap-4 items-center justify-center" :class="customClass" :style="{ background: bgClr, borderColor: borderClr }">
    <slot name="icon">
      <img src="@/assets/images/empty-state.svg" alt="empty-state" class="h-20 w-20 object-contain" />
    </slot>
    <p v-html="message" class="text-base-leading-5 font-medium text-Black-and-White-Black"></p>
  </div>
</template>
<script setup>
defineProps({
  bgClr: {
    type: String,
    default: '#FAFCFD',
  },
  borderClr: {
    type: String,
    default: '#E6E7EB',
  },
  message: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
});
</script>
