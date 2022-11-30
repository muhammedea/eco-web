<template>
  <div class="w-full flex flex-col relative">
    <GoBackBanner whereToGoBack="EcoProject List" />
    <div class="flex">
      <div>
        <ContentNavigation />
      </div>
      <div class="w-full lg:w-full px-8 lg:border-x">
        <AboutProject />
      </div>
      <div class="px-6">
        <AboutCompany />
      </div>
    </div>
  </div>
</template>
<script setup>
import GoBackBanner from '@/components/basecomponents/GoBackBanner.vue';
import ContentNavigation from '@/components/ecoproject/ecoprojectdetail/ContentNavigation.vue';
import AboutCompany from '@/components/ecoproject/ecoprojectdetail/AboutCompany.vue';
import AboutProject from '@/components/ecoproject/ecoprojectdetail/AboutProject.vue';
</script>
