<template>
  <div class="w-full px-6 py-8">
    <button @click="router.back()" class="flex gap-4 items-center">
      <span class="w-10 h-10 text-Grayscale-Grey-2 text-xl outline outline-Grayscale-Grey-4 -outline-offset-1 flex justify-center items-center font-semibold rounded-full">
        <i class="yi yi-chevron-left"></i>
      </span>
      <p class="text-base-leading-5 text-Black-and-White-Black font-semibold">Back to {{ whereToGoBack }}</p>
    </button>
  </div>
</template>
<script setup>
import router from '@/router';

defineProps({
  whereToGoBack: {
    type: String,
    required: true,
  },
});
</script>
