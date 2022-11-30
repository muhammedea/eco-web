<!-- eslint-disable -->
<template>
  <div
    class="w-full md:w-n-gap-3-50 border border-Grayscale-Grey-5 rounded-md p-4 cursor-pointer flex gap-4"
    :class="{ '!w-full !block': detailMode }"
    @click="$emit('open')"
  >
    <img class="w-24 h-24 mb-4 rounded-md" :src="require('@/assets/' + item.img)" alt="" />
    <div class="w-full">
      <h1 class="font-bold text-xl text-Black-and-White-Black">
        {{ item.name }}
      </h1>
      <h1 class="font-bold text-base-leading-5 text-Grayscale-Grey-3">
        {{ item.title }}
      </h1>
      <p v-if="detailMode" class="mt-2 mb-4 dark:text-Dark-Mode-Grey text-Grayscale-Grey-2">
        {{ item.desc }}
      </p>
    </div>
    <div class="mt-4 flex flex-wrap gap-4">
      <a
        v-for="(item2, index2) in item.socials"
        :key="index2"
        :href="index2 == 0 ? '' + item2.link : 'mailto:' + item2.link"
      >
        <i class="eci text-Grayscale-Grey-1 text-2xl" :class="item2.icon"></i>
      </a>
    </div>
  </div>
</template>
<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  detailMode: {
    type: Boolean,
    default: false,
  },
});
</script>
