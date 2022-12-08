<template>
  <y-card :class="cardClass">
    <div class="flex flex-wrap flex-1">
      <div class="flex-1">
        <h1 class="text-Black-and-White-Black w-full text-lg font-semibold">{{ stake.project_name }}</h1>
        <p class="caption text-Primary-Blue text-2xl w-full">
          <span class="text-Grayscale-Grey-3 text-base">Boost: </span>{{ stake.boost }}
        </p>
      </div>
      <div v-if="true" class="flex items-center h-7 gap-2">
        <button
          type="button"
          @click="openRepeatModal"
          class="px-3 py-1 text-white bg-Color-Code-Green rounded-lg text-xs"
        >
          Restake
        </button>
        <button @click="openFinishModal" class="px-3 py-1 text-white bg-Color-Code-Red rounded-lg text-xs">
          Exit
        </button>
      </div>
      <div v-else class="flex items-center gap-2 h-7">
        <button
          type="button"
          @click="openRepeatModal"
          class="px-3 py-1 text-white bg-Color-Code-Green rounded-lg text-xs"
        >
          Extend
        </button>
      </div>
    </div>
    <div class="flex w-full justify-between mb-2">
      <div class="flex gap-1 items-end">
        <h1 class="text-Black-and-White-Black caption">Amount:</h1>
        <p class="text-Black-and-White-Black text-base-leading-5 caption">
          {{ stake.amount }}
        </p>
      </div>
      <div class="flex gap-1 items-end">
        <h1 class="text-Black-and-White-Black caption">Current Reward:</h1>
        <p class="text-Black-and-White-Black text-base-leading-5 animate-pulse caption">{{ stake.reward }}</p>
      </div>
    </div>
    <div class="flex w-full justify-between mb-2">
      <div class="flex flex-col">
        <p class="text-Grayscale-Grey-3 caption">3 months lock</p>
        <div class="flex gap-1">
          <h1 class="text-Black-and-White-Black caption">Stake Date:</h1>
          <p class="text-Grayscale-Grey-3 caption">
            {{ stake.stake_date }}
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <p class="text-Grayscale-Grey-3 caption ml-auto">1 month left</p>
        <div class="flex gap-1">
          <h1 class="text-Black-and-White-Black caption">Due Date:</h1>
          <p class="text-Grayscale-Grey-3 caption">
            {{ stake.due_date }}
          </p>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 -inset-x-1 h-2">
      <y-progress-bar v-if="false" color="#9aa1b4" default :height="8" :progress="100"></y-progress-bar>
      <y-progress-bar v-else default :height="8" :progress="progress"></y-progress-bar>
    </div>
  </y-card>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useYartuModal, useYartuNotify } from '@yartu/ui-kit';
import RepeatList from './RepeatList.vue';

const props = defineProps({
  stake: {
    type: Object,
    required: true,
  },
});

const yartuModal = useYartuModal();
const yartuNotify = useYartuNotify();

const progress = ref(18);

const cardClass = computed(() => [
  'relative',
  'flex-wrap w-full xl:w-n-gap-3-50 items-center',
  'py-2 px-4',
  'overflow-hidden',
]);

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
      projectName: props.stake.project_name,
    },
    emits: {
      confirm: acceptRestake,
    },
  });
}
function openFinishModal() {
  yartuNotify.dialog({
    title: 'Are you sure?',
    subtitle: `You will finish the stake for ${props.stake.project_name}`,
    type: 'danger',
    actionButtons: [
      {
        text: 'Quit',
        color: '!bg-RED hover:!bg-RED-2',
        handler: async () => {
          exitStake();
        },
      },
    ],
  });
}
</script>
