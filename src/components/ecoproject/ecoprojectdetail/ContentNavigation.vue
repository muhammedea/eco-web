<template>
  <div class="flex xl:w-62 min-w-max flex-row xl:flex-col overflow-scroll scrollbar-hide gap-2 px-6 sticky top-24">
    <button
      @click="scrollDown('#about-project')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-bas"
      :class="contentListToggler[0] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-info" style="font-size: 20px"></i>
      About the project
    </button>
    <button
      @click="scrollDown('#documents')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-base"
      :class="contentListToggler[1] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-file" style="font-size: 20px"></i>
      Documents
    </button>
    <button
      @click="scrollDown('#team')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-base"
      :class="contentListToggler[2] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-shared-with-me" style="font-size: 20px"></i>
      Team
    </button>
    <button
      @click="scrollDown('#production')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-base"
      :class="contentListToggler[3] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-address" style="font-size: 20px"></i>
      Production
    </button>
    <button
      @click="scrollDown('#financial-tables')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-base"
      :class="contentListToggler[4] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-table-cells" style="font-size: 20px"></i>
      Financial tables
    </button>
    <button
      @click="scrollDown('#energy-analysis')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-base"
      :class="contentListToggler[5] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-flash" style="font-size: 20px"></i>
      Energy analysis
    </button>
    <button
      @click="scrollDown('#pics-and-videos')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-base"
      :class="contentListToggler[6] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-image" style="font-size: 20px"></i>
      Pics and videos
    </button>
    <button
      @click="scrollDown('#updates')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-base"
      :class="contentListToggler[7] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-copy" style="font-size: 20px"></i>
      Updates
    </button>
    <button
      @click="scrollDown('#questions')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 rounded text-base"
      :class="contentListToggler[8] ? 'text-white bg-Acsen-Yellow' : 'hover:bg-Grayscale-Grey-5 text-Grayscale-Grey-3'"
    >
      <i class="yi yi-question-mark" style="font-size: 20px"></i>
      Questions
    </button>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';

const contentList = ref([
  'about-project',
  'documents',
  'team',
  'production',
  'financial-tables',
  'energy-analysis',
  'pics-and-videos',
  'updates',
  'questions',
]);
const contentListToggler = ref([true, false, false, false, false, false, false, false, false]);
function handleScroll() {
  for (let index = 0; index < contentList.value.length; index += 1) {
    const element = document.getElementById(contentList.value[index]);
    const gap = element.offsetTop - window.scrollY;
    if (gap < 150) {
      for (let temp = 0; temp < contentListToggler.value.length; temp += 1) {
        contentListToggler.value[temp] = false;
      }
      contentListToggler.value[index] = true;
    }
  }
}
onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll);
});
function scrollDown(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  }
}
</script>
