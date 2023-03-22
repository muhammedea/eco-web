<template>
  <div class="flex flex-col gap-10 w-full lg:w-[333px] sticky top-24 max-h-screen pb-8 overflow-y-scroll scrollbar-hide">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-Black-and-White-Black text-base-leading-5 font-bold">Staking</span>
        <StakeCard :project-id="project.id" />
      </div>
      <div class="flex flex-col gap-4">
        <span class="text-Black-and-White-Black text-base-leading-5 font-bold">My Stakes</span>
        <div v-if="stakeService.isLoading.value"></div>
        <div v-else class="flex gap-3 flex-wrap">
          <EcoProjectStakeCard v-for="position in stakeService.stakePositions.value" :key="position.tokenId" :stake="position" :token-symbol="project.token.symbol" custom-class="w-full sm:w-1/2-gap-4 lg:w-full" />
          <!-- <EmptyState message="You don’t have any stake yet.<br>Please stake Ecoproject first."></EmptyState> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { getProjectById } from '@/utils/projects';
import useStakeService from '@/services/stakeService';
import EcoProjectStakeCard from './EcoProjectStakeCard.vue';
// import EmptyState from '@/components/basecomponents/EmptyState.vue';
import StakeCard from './StakeCard.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const project = computed(() => getProjectById(props.id));
const stakeService = useStakeService(project.value.token.symbol);
</script>
