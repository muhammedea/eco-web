<template>
  <div class="flex flex-col gap-2 w-full">
    <y-input suffix class="mt-3 w-full" placeholder="0" type="number" label="Amount" v-model="stakeAmount">
      <template #suffix>
        <div class="py-2">
          <span class="px-2 border-l flex justify-center items-center text-Black-and-White-Black font-bold">
            {{ project.token.symbol }}
          </span>
        </div>
      </template>
    </y-input>
    <y-select
      class="mt-3 w-full"
      placeholder="Select Lock Period"
      label="Lock Period"
      v-model="selectedPeriod"
      :items="items"
      return-object
      item-text="text"
    >
    </y-select>

    <div v-if="stakeService.isLoading.value">Loading...</div>
    <button
      v-else-if="stakeService.isTokenApproved.value === false"
      @click="approve"
      class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md transition-all duration-200 bg-gray-500 hover:bg-gray-400"
    >
        Approve {{ project.token.symbol }}
    </button>
    <button
      v-else
      @click="stake"
      class="py-[14px] text-white text-sm font-medium w-full mt-4 rounded-md transition-all duration-200 bg-Color-Code-Green hover:bg-Color-Code-Green-Hover"
    >
        Stake {{ project.token.symbol }}
    </button>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { getProjectById } from '@/utils/projects';
import useStakeService from '@/services/stakeService';

const props = defineProps({
  projectId: {
    type: Number,
    required: true,
  },
});
console.log(props);

const project = computed(() => getProjectById(props.projectId));
const stakeService = useStakeService(project.value.token.symbol);

const stakeAmount = ref('0');
const items = [
  {
    id: 90,
    text: '3 Months',
  },
  {
    id: 180,
    text: '6 Months',
  },
  {
    id: 270,
    text: '9 Months',
  },
  {
    id: 360,
    text: '12 Months',
  },
];
const selectedPeriod = ref(items[0]);

const approve = () => {
  stakeService.approveToken();
};
const stake = () => {
  stakeService.stake(stakeAmount.value, selectedPeriod.value.id);
};
</script>
