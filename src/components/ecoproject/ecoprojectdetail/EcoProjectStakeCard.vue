<template>
  <div class="stake-card w-full flex flex-col border rounded-md" :class="customClass">
    <div class="w-full flex flex-col p-4 pb-3 gap-3">
      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-center font-semibold">
          <p class="text-sm leading-6 text-Grayscale-Grey-3">Amount</p>
          <p v-if="false" class="text-sm leading-6 text-Color-Code-Orange">Waiting</p>
          <div class="flex items-center">
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
            <p class="text-xl leading-6 text-Black-and-White-Black">50.0</p>
            <p class="text-xs leading-5 text-Grayscale-Grey-3 font-normal">ECO_ORNG_1</p>
          </div>
          <span class="text-sm leading-6 text-Black-and-White-Black">3 months lock</span>
        </div>
      </div>
      <y-progress-bar :progress="stakeProgress" :height="8" color="#FFC841"></y-progress-bar>
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <p class="text-sm leading-6 text-Grayscale-Grey-3">Start date</p>
          <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">30/12/22</p>
        </div>
        <div class="flex flex-col">
          <p class="text-sm leading-6 text-Grayscale-Grey-3">End date</p>
          <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">30/12/22</p>
        </div>
      </div>
    </div>
    <div class="w-full bg-GREY-3 border-t py-1.5 px-4 flex items-center justify-between flex-wrap">
      <p class="text-sm leading-6 text-Grayscale-Grey-3">Current rewartd</p>
      <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">4,000 ECO</p>
    </div>
  </div>
</template>
<script setup>
import { useYartuModal, useYartuNotify } from '@yartu/ui-kit';
import RepeatList from '@/components/profile/RepeatList.vue';

const props = defineProps({
  stake: {
    type: Object,
    required: true,
  },
  customClass: {
    type: String,
    default: '',
  },
});

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
/* eslint-disable */
// import { computed } from 'vue';
// import { formatAmount, formatDate } from '@/utils/helpers';
// import useStakeService from '@/services/stakeService';

// const props = defineProps({
//   tokenSymbol: {
//     type: String,
//     required: true,
//   },
//   stakePosition: {
//     type: Object,
//     required: true,
//   },
// });

// const stakeService = useStakeService(props.tokenSymbol);

// const lockText = computed(() => {
//   const duration = (props.stakePosition.endDate - props.stakePosition.startDate) / (60 * 60 * 24);
//   if (duration < 91) {
//     return '3 months lock';
//   }
//   if (duration < 181) {
//     return '6 months lock';
//   }
//   if (duration < 271) {
//     return '9 months lock';
//   }
//   return '12 months lock';
// });

// const startDate = computed(() => {
//   const date = new Date(props.stakePosition.startDate * 1000);
//   return formatDate(date);
// });
// const endDate = computed(() => {
//   const date = new Date(props.stakePosition.endDate * 1000);
//   return formatDate(date);
// });

// const stakeProgress = computed(() => {
//   const today = Math.floor(Date.now() / 1000);
//   const duration = props.stakePosition.endDate - props.stakePosition.startDate;
//   const elapsed = today - props.stakePosition.startDate;
//   return (elapsed * 100) / duration;
// });

// const leftTime = computed(() => {
//   const today = Math.floor(Date.now() / 1000);
//   const time = props.stakePosition.endDate - today;

//   if (time < 0) {
//     return 'Finished';
//   }

//   const months = Math.floor(time / (60 * 60 * 24 * 30));
//   if (months > 0) {
//     return `${months} months left`;
//   }

//   const days = Math.floor(time / (60 * 60 * 24)) % 30;
//   if (days > 0) {
//     return `${days} days left`;
//   }

//   const hours = Math.floor(time / (60 * 60)) % 24;
//   if (hours > 0) {
//     return `${hours} hours left`;
//   }

//   const minutes = Math.floor(time / 60) % 60;
//   if (minutes > 0) {
//     return `${minutes} minutes left`;
//   }

//   return `${time % 60} seconds left`;
// });

// const exit = () => {
//   stakeService.exit(props.stakePosition.tokenId);
// };
</script>
<style>
.stake-card:hover .stake-card-actions {
  display: flex !important;
}
</style>
