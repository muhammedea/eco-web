<template>
  <div class="w-full flex flex-col relative">
    <GoBackBanner whereToGoBack="EcoProject List" />
    <div class="flex xl:flex-row flex-col">
      <div class="w-full overflow-scroll scrollbar-hide xl:overflow-visible xl:w-fit py-6 xl:p-0 xl:border-none border-y">
        <ContentNavigation />
      </div>
      <div class="flex xl:p-0 pt-6 lg:flex-row flex-col">
        <div class="w-full lg:w-full px-6 lg:px-8 lg:border-x">
          <AboutProject :id="rotuteId" />
        </div>
        <div class="mx-6 border-t lg:border-none mt-6 pt-6 lg:mt-0 lg:pt-0">
          <AboutCompany :id="rotuteId" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import GoBackBanner from '@/components/basecomponents/GoBackBanner.vue';
import ContentNavigation from '@/components/ecoproject/ecoprojectdetail/ContentNavigation.vue';
import AboutCompany from '@/components/ecoproject/ecoprojectdetail/AboutCompany.vue';
import AboutProject from '@/components/ecoproject/ecoprojectdetail/AboutProject.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const rotuteId = computed(() => +route.params.id);
</script>
