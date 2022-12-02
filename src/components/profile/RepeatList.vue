<template>
  <div class="flex flex-col gap-3 p-6">
    <span class="text-Black-And-White-Black text-lg font-semibold">{{ projectName }}</span>
    <y-radio v-model="repeatDate" :input-value="3" label="3 Month"></y-radio>
    <y-radio v-model="repeatDate" :input-value="6" label="6 Month"></y-radio>
    <y-radio v-model="repeatDate" :input-value="9" label="9 Month"></y-radio>
    <y-radio v-model="repeatDate" :input-value="12" label="12 Month"></y-radio>
    <y-button primary @click="save">Confirm</y-button>
    <y-button @click="$emit('closeYartuModal')" secondary>Cancel</y-button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

defineProps({
  projectName: {
    type: String,
    default: '',
  },
});

const repeatDate = ref(3);
const emit = defineEmits(['confirm', 'closeYartuModal']);

function save() {
  emit('confirm', repeatDate);
  emit('closeYartuModal');
}
</script>
