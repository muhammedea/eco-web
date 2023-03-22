<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2.5">
      <span class="w-7 h-7 border rounded-full flex items-center justify-center p-2">
        <img src="@/assets/images/ampl.svg" alt="project-logo" />
      </span>
      <div class="flex items-center gap-2 text-baes-leading-5 leading-10 font-bold text-Black-and-White-Black">
        {{ props.project.name }} <span class="text-Grayscale-Grey-3">({{ stakeService.stakePositions.value.length }})</span>
      </div>
    </div>
    <div class="w-full flex items-center gap-6 flex-wrap">
      <EcoProjectStakeCard
        v-for="position in stakeService.stakePositions.value"
        :key="position.tokenId"
        :stake="position"
        :token-symbol="props.project.token.symbol"
        custom-class="w-full sm:w-1/2-gap-6 md:w-full lg:w-1/2-gap-6 xl:w-1/3-gap-6 2xl:w-1/4-gap-6"
      />
      <EmptyState
        v-if="stakeService.stakePositions.value.length === 0"
        custom-class="w-full h-full"
        bg-clr="#ffffff"
        border-clr="#ffffff"
        message="You don’t have any stake yet."
      >
      </EmptyState>
    </div>
  </div>
</template>
<script setup>
import useStakeService from '@/services/stakeService';
import EmptyState from '../basecomponents/EmptyState.vue';
import EcoProjectStakeCard from '../ecoproject/ecoprojectdetail/EcoProjectStakeCard.vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const stakeService = useStakeService(props.project.token.symbol);

</script>
