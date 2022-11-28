<template>
  <div class="w-full overflow-x-scroll py-8 scrollbar-hide">
    <div class=" flex gap-5 px-6 w-full min-w-max">
    <EcoMarketCard hero-card v-for="i in 10" :key="i" />
  </div>
  </div>
  <!-- <Carousel :itemsToScroll="4" v-model="currentSlide" :breakpoints="breakpoints" :settings="settings">
    <slide >
      <EcoMarketCard hero-card v-for="i in 10" :key="i"/>
    </slide>
    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel> -->
</template>
<script setup>
// import { ref } from 'vue';
import EcoMarketCard from '@/components/ecomarket/EcoMarketCard.vue';
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';

// const currentSlide = ref(0);

// const settings = ref({
//   itemsToShow: 1.2,
//   snapAlign: 'center',
// });
// const breakpoints = ref({
//   // 550px and up
//   550: {
//     itemsToShow: 1.8,
//     snapAlign: 'start',
//   },
//   // 700px and up
//   700: {
//     itemsToShow: 2.2,
//     snapAlign: 'start',
//   },
//   // 750px and up
//   750: {
//     itemsToShow: 2.4,
//     snapAlign: 'start',
//   },
//   // 780px and up
//   780: {
//     itemsToShow: 2.6,
//     snapAlign: 'start',
//   },
//   // 840px and up
//   840: {
//     itemsToShow: 2.8,
//     snapAlign: 'start',
//   },
//   // 1024px and up
//   1024: {
//     itemsToShow: 3.5,
//     snapAlign: 'start',
//   },
//   // 1280px and up
//   1280: {
//     itemsToShow: 4,
//     snapAlign: 'start',
//   },
// });
</script>
