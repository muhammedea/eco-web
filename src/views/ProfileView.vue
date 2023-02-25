<template>
  <div class="w-full flex md:flex-row flex-col relative h-full">
    <div class="w-full md:w-1/2 lg:w-1/3 h-full px-6 py-8 md:sticky md:top-20 md:min-h-full_screen">
      <ProfileDetail></ProfileDetail>
    </div>
    <div class="w-full md:w-1/2 lg:w-2/3 md:border-l p-6 h-full min-h-full_screen relative">
      <div class="flex flex-col gap-8 h-full">
        <template v-if="true">
          <ClaimWidget></ClaimWidget>
          <MyStakeList></MyStakeList>
        </template>
        <EmptyState
          v-else
          custom-class="w-full h-full absolute top-0 left-0"
          bg-clr="#ffffff"
          border-clr="#ffffff"
          message="You don’t have any stake yet.<br>Please stake Ecoproject first."
        >
        </EmptyState>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { ref } from 'vue';

import ProfileDetail from '@/components/profile/ProfileDetail.vue';
import ClaimWidget from '@/components/profile/ClaimWidget.vue';
import MyStakeList from '@/components/profile/MyStakeList.vue';
import EmptyState from '@/components/basecomponents/EmptyState.vue';

// const stake = ref({
//   project_name: 'Project Name',
//   description: 'Description(Optional)',
//   email: 2,
//   stake_date: '20.12.2022',
//   due_date: '20.02.2023',
//   amount: '1000 ECO_ORANGE_1',
//   reward: '50 ECO_ORANGE_1',
//   boost: '1.5X',
// });
// const filterSideBarOpen = ref(false);

// function openFilterSideBar() {
//   filterSideBarOpen.value = !filterSideBarOpen.value;
//   if (document.body.classList.value === 'overflow-hidden') document.body.classList.remove('overflow-hidden');
//   else document.body.classList.add('overflow-hidden');
// }
</script>
