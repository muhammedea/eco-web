<template>
  <div class="w-full flex md:flex-row flex-col relative">
    <div class="w-full md:w-1/2 xl:w-1/3 h-full px-6 py-8 md:sticky md:top-20 md:min-h-full_screen">
      <y-simple-table ariaDesc="Profile Details" class="border rounded-lg">
        <template #thead>
          <tr>
            <th colspan="2">
              <span class="text-Black-and-White-Black w-full text-center flex">Profile Details</span>
            </th>
          </tr>
        </template>
        <template #tbody>
          <tr>
            <td class="w-1/3 text-Grayscale-Grey-3 text-sm">Wallet Address</td>
            <td class="text-Black-and-White-Black text-base-leading-5">1BoatSLRHtKNngkdXEeobR76b53LETtpyT</td>
          </tr>
          <tr>
            <td class="w-1/3 text-Grayscale-Grey-3 text-sm">ECO Token</td>
            <td class="text-Black-and-White-Black text-base-leading-5">1273123</td>
          </tr>
          <tr>
            <td class="w-1/3 text-Grayscale-Grey-3 text-sm">Project Token</td>
            <td class="text-Black-and-White-Black text-base-leading-5">21313</td>
          </tr>
        </template>
      </y-simple-table>
    </div>
    <div class="w-full md:w-1/2 xl:w-2/3 md:border-l px-6 py-8">
      <div class="flex flex-col gap-6">
        <h1 class="text-Black-and-White-Black text-logo font-bold">My Stakes</h1>
        <div class="flex flex-wrap gap-6">
          <StakeCard :stake="stake" v-for="i in 17" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import StakeCard from '@/components/profile/StakeCard.vue';

const stake = ref({
  project_name: 'Project Name',
  description: 'Description(Optional)',
  email: 2,
  stake_date: '20.12.2022',
  due_date: '20.02.2023',
  amount: '1000 ECO_ORANGE_1',
  reward: '50 ECO_ORANGE_1',
  boost: '1.5X',
});
// const filterSideBarOpen = ref(false);

// function openFilterSideBar() {
//   filterSideBarOpen.value = !filterSideBarOpen.value;
//   if (document.body.classList.value === 'overflow-hidden') document.body.classList.remove('overflow-hidden');
//   else document.body.classList.add('overflow-hidden');
// }
</script>
