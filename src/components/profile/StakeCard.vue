<template>
  <y-card :class="cardClass">
    <div class="flex flex-wrap flex-1">
      <div class="flex-1">
        <h1 class="text-Black-and-White-Black w-full subtitle-4">{{ stake.project_name }}</h1>
        <p class="caption text-Grayscale-Grey-3 w-full">
          {{ stake.description }}
        </p>
      </div>
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="openRepeatModal"
          class="px-3 py-1 text-white bg-Color-Code-Green rounded-lg text-xs"
        >
          Uzat
        </button>
        <button @click="openFinishModal" class="px-3 py-1 text-white bg-Color-Code-Red rounded-lg text-xs">
          Bitir
        </button>
      </div>
    </div>
    <div class="flex w-full justify-between mb-2">
      <div class="flex gap-1 items-end">
        <h1 class="text-Black-and-White-Black caption">Stake Amount:</h1>
        <p class="text-Black-and-White-Black text-base-leading-5 caption">
          {{ stake.amount }}
        </p>
      </div>
      <div class="flex gap-1 items-end">
        <h1 class="text-Black-and-White-Black caption">Estimated Income:</h1>
        <p class="text-Black-and-White-Black text-base-leading-5 animate-pulse caption">{{ stake.income }}</p>
      </div>
    </div>
    <div class="flex w-full justify-between mb-2">
      <div class="flex gap-1">
        <h1 class="text-Black-and-White-Black caption">Start Date:</h1>
        <p class="text-Grayscale-Grey-3 caption">
          {{ stake.start_date }}
        </p>
      </div>
      <div class="flex gap-1">
        <h1 class="text-Black-and-White-Black caption">End Date:</h1>
        <p class="text-Grayscale-Grey-3 caption">{{ stake.end_date }}</p>
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

function hello(e) {
  console.log('hello onayladı modal kapandı', e);
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
      confirm: hello,
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
          hello();
        },
      },
    ],
  });
}
</script>
