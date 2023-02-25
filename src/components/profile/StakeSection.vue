<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2.5">
      <span class="w-7 h-7 border rounded-full flex items-center justify-center p-2">
        <img src="@/assets/images/ampl.svg" alt="project-logo" />
      </span>
      <div class="flex items-center gap-2 text-baes-leading-5 leading-10 font-bold text-Black-and-White-Black">
        Orange Renewable Energy Plant 001 <span class="text-Grayscale-Grey-3">(3)</span>
      </div>
    </div>
    <div class="w-full flex items-center gap-6 flex-wrap">
      <EcoProjectStakeCard
        custom-class="w-full sm:w-1/2-gap-6 md:w-full lg:w-1/2-gap-6 xl:w-1/3-gap-6 2xl:w-1/4-gap-6"
        v-for="i in 5"
        :key="i"
        :stake="{}"
      />
    </div>
  </div>
</template>
<script setup>
import EcoProjectStakeCard from '../ecoproject/ecoprojectdetail/EcoProjectStakeCard.vue';
</script>
