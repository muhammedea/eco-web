<template>
  <div class="stake-card w-full flex flex-col border rounded-md" :class="customClass">
    <div class="w-full flex flex-col p-4 pb-3 gap-3">
      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-center font-semibold">
          <p class="text-sm leading-6 text-Grayscale-Grey-3">Amount</p>
          <p v-if="isFinished == false" class="text-sm leading-6 text-Color-Code-Orange">Waiting</p>
          <div v-else class="flex items-center">
            <p class="text-sm leading-6 text-Color-Code-Green">Finished</p>
            <y-dropdown left :classes="['!w-[98px]']">
              <template #activator="{ open }">
                <y-button
                  class="stake-card-actions flex lg:hidden ml-2"
                  @click="open"
                  circle
                  size="xs"
                  icon="yi yi-more text-Graysacele-Grey-2"
                ></y-button>
              </template>
              <y-dropdown-item @click="openRepeatModal">Restake</y-dropdown-item>
              <y-dropdown-item @click="openFinishModal">Remove</y-dropdown-item>
            </y-dropdown>
          </div>
        </div>
        <div class="flex justify-between items-center font-semibold">
          <div class="flex items-end gap-1">
            <p class="text-xl leading-6 text-Black-and-White-Black">{{ formatAmount(props.stake.amount) }}</p>
            <p class="text-xs leading-5 text-Grayscale-Grey-3 font-normal">{{ tokenSymbol }}</p>
          </div>
          <span class="text-sm leading-6 text-Black-and-White-Black">{{ lockText }}</span>
        </div>
      </div>
      <y-progress-bar :progress="stakeProgress" :height="8" color="#FFC841"></y-progress-bar>
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <p class="text-sm leading-6 text-Grayscale-Grey-3">Start date</p>
          <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">{{ startDate }}</p>
        </div>
        <div class="flex flex-col">
          <p class="text-sm leading-6 text-Grayscale-Grey-3">End date</p>
          <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">{{ endDate }}</p>
        </div>
      </div>
    </div>
    <div class="w-full bg-GREY-3 border-t py-1.5 px-4 flex items-center justify-between flex-wrap">
      <p class="text-sm leading-6 text-Grayscale-Grey-3">Current rewartd</p>
      <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">{{ formatAmount(props.stake.earnedReward) }} {{ tokenSymbol }}</p>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import { computed } from 'vue';
import { formatAmount, formatDate } from '@/utils/helpers';
import useStakeService from '@/services/stakeService';
import { useYartuModal, useYartuNotify } from '@yartu/ui-kit';
import RepeatList from '@/components/profile/RepeatList.vue';

/*
tokenId bigNumber
status number
autoRestake boolean
dayCount number
startDate number
endDate number
minPeriodId number
amount BigNumber
earnedReward BigNumber
*/
const props = defineProps({
  stake: {
    type: Object,
    required: true,
  },
  customClass: {
    type: String,
    default: '',
  },
  tokenSymbol: {
    type: String,
    required: true,
  },
});

console.log('stake', props.stake);

const startDate = computed(() => {
  const date = new Date(props.stake.startDate * 1000);
  return formatDate(date);
});
const endDate = computed(() => {
  const date = new Date(props.stake.endDate * 1000);
  return formatDate(date);
});

const isFinished = computed(() => {
  const today = Math.floor(Date.now() / 1000);
  return today >= props.stake.endDate;
});

const stakeProgress = computed(() => {
  const today = Math.floor(Date.now() / 1000);
  const duration = props.stake.endDate - props.stake.startDate;
  const elapsed = today - props.stake.startDate;
  return (elapsed * 100) / duration;
});

const DAY_DURATION = 60; // 60 * 60 * 24

const lockText = computed(() => {
  const duration = (props.stake.endDate - props.stake.startDate) / DAY_DURATION;
  if (duration < 91) {
    return '3 months lock';
  }
  if (duration < 181) {
    return '6 months lock';
  }
  if (duration < 271) {
    return '9 months lock';
  }
  return '12 months lock';
});

const leftTime = computed(() => {
  const today = Math.floor(Date.now() / 1000);
  const time = props.stake.endDate - today;

  if (time < 0) {
    return 'Finished';
  }

  const months = Math.floor(time / (DAY_DURATION * 30));
  if (months > 0) {
    return `${months} months left`;
  }

  const days = Math.floor(time / (60 * 60 * 24)) % 30;
  if (days > 0) {
    return `${days} days left`;
  }

  const hours = Math.floor(time / (60 * 60)) % 24;
  if (hours > 0) {
    return `${hours} hours left`;
  }

  const minutes = Math.floor(time / 60) % 60;
  if (minutes > 0) {
    return `${minutes} minutes left`;
  }

  return `${time % 60} seconds left`;
});



// ------ ACTIONS ----------
const yartuModal = useYartuModal();
const yartuNotify = useYartuNotify();

function acceptRestake(e) {
  console.log('restake accepted', e);
}

function exitStake(e) {
  console.log('exited stake', e);
}

function openRepeatModal() {
  yartuModal.open(RepeatList, {
    modal: {
      'max-width': '25.5rem',
      'min-width': '25.5rem',
    },
    component: {
      projectName: props.stake.project_name || 'null',
    },
    emits: {
      confirm: acceptRestake,
    },
  });
}
function openFinishModal() {
  yartuNotify.dialog({
    title: 'Are you sure?',
    subtitle: `You will finish the stake for ${props.stake.project_name || 'null'}`,
    type: 'danger',
    class: 'overflow-hidden',
    actionButtons: [
      {
        text: 'Quit',
        color: '!bg-Primary-Blue hover:!bg-Hover-Primary-Blue',
        handler: async () => {
          exitStake();
        },
      },
    ],
  });
}




// const exit = () => {
//   stakeService.exit(props.stakePosition.tokenId);
// };
</script>
<style>
.stake-card:hover .stake-card-actions {
  display: flex !important;
}
</style>
