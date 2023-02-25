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
          <!-- <EcoProjectStakeCard v-for="position in stakeService.stakePositions.value" :key="position.tokenId" :stake-position="position" :token-symbol="project.token.symbol" /> -->
          <EcoProjectStakeCard custom-class="w-full sm:w-1/2-gap-4 lg:w-full" v-for="i in 5" :key="i" :stake="{}"/>
          <!-- <EmptyState message="You don’t have any stake yet.<br>Please stake Ecoproject first."></EmptyState> -->
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-col gap-5">
      <span class="text-Black-and-White-Black text-base-leading-5 font-bold">More EcoProject</span>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 min-w-max items-center">
              <div class="w-6 h-6 outline-Grayscale-Grey-5 outline -outline-offset-1 rounded-full p-0.5">
                <img src="@/assets/images/exp-logo.jpg" class="w-full h-full object-contain" alt="" />
              </div>
              <span class="text-sm text-Grayscale-Grey-2">Greenland New Energy</span>
            </div>
            <p class="text-Black-and-White-Black font-semibold text-base">Green wind electric project of west coast</p>
          </div>
          <div class="py-3 pr-2 rounded-md overflow-hidden">
            <img
              src="@/assets/images/exp-photo-2.png"
              class="h-[57px] object-cover w-[94px] rounded-md"
              alt="project-photo"
            />
          </div>
        </div>
        <div class="w-full h-px bg-Grayscale-Grey-5"></div>
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 min-w-max items-center">
              <div class="w-6 h-6 outline-Grayscale-Grey-5 outline -outline-offset-1 rounded-full p-0.5">
                <img src="@/assets/images/exp-logo.jpg" class="w-full h-full object-contain" alt="" />
              </div>
              <span class="text-sm text-Grayscale-Grey-2">Greenland New Energy</span>
            </div>
            <p class="text-Black-and-White-Black font-semibold text-base">Green wind electric project of west coast</p>
          </div>
          <div class="py-3 pr-2 rounded-md overflow-hidden">
            <img
              src="@/assets/images/exp-photo-2.png"
              class="h-[57px] object-cover w-[94px] rounded-md"
              alt="project-photo"
            />
          </div>
        </div>
        <div class="w-full h-px bg-Grayscale-Grey-5"></div>
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 min-w-max items-center">
              <div class="w-6 h-6 outline-Grayscale-Grey-5 outline -outline-offset-1 rounded-full p-0.5">
                <img src="@/assets/images/exp-logo.jpg" class="w-full h-full object-contain" alt="" />
              </div>
              <span class="text-sm text-Grayscale-Grey-2">Greenland New Energy</span>
            </div>
            <p class="text-Black-and-White-Black font-semibold text-base">Green wind electric project of west coast</p>
          </div>
          <div class="py-3 pr-2 rounded-md overflow-hidden">
            <img
              src="@/assets/images/exp-photo-2.png"
              class="h-[57px] object-cover w-[94px] rounded-md"
              alt="project-photo"
            />
          </div>
        </div>
        <div class="w-full h-px bg-Grayscale-Grey-5"></div>
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 min-w-max items-center">
              <div class="w-6 h-6 outline-Grayscale-Grey-5 outline -outline-offset-1 rounded-full p-0.5">
                <img src="@/assets/images/exp-logo.jpg" class="w-full h-full object-contain" alt="" />
              </div>
              <span class="text-sm text-Grayscale-Grey-2">Greenland New Energy</span>
            </div>
            <p class="text-Black-and-White-Black font-semibold text-base">Green wind electric project of west coast</p>
          </div>
          <div class="py-3 pr-2 rounded-md overflow-hidden">
            <img
              src="@/assets/images/exp-photo-2.png"
              class="h-[57px] object-cover w-[94px] rounded-md"
              alt="project-photo"
            />
          </div>
        </div>
      </div>
    </div> -->
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
    type: Number,
    required: true,
  },
});

const project = computed(() => getProjectById(props.id));
const stakeService = useStakeService(project.value.token.symbol);
</script>
