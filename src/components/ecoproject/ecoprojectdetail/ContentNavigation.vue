<template>
  <div class="flex w-62 flex-col gap-2 px-6 sticky top-6">
    <button
      @click="scrollDown('#about-project')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 px-5 py-3 text-white bg-Acsen-Yellow rounded text-base"
    >
      <i class="yi yi-info" style="font-size: 20px"></i>
      About the project
    </button>
    <button
      @click="scrollDown('#documents')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 hover:bg-Grayscale-Grey-5 px-5 py-3 text-Grayscale-Grey-3 rounded text-base"
    >
      <i class="yi yi-file" style="font-size: 20px"></i>
      Documents
    </button>
    <button
      @click="scrollDown('#team')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 hover:bg-Grayscale-Grey-5 px-5 py-3 text-Grayscale-Grey-3 rounded text-base"
    >
      <i class="yi yi-shared-with-me" style="font-size: 20px"></i>
      Team
    </button>
    <button
      @click="scrollDown('#production')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 hover:bg-Grayscale-Grey-5 px-5 py-3 text-Grayscale-Grey-3 rounded text-base"
    >
      <i class="yi yi-address" style="font-size: 20px"></i>
      Production
    </button>
    <button
      @click="scrollDown('#financial-tables')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 hover:bg-Grayscale-Grey-5 px-5 py-3 text-Grayscale-Grey-3 rounded text-base"
    >
      <i class="yi yi-table-cells" style="font-size: 20px"></i>
      Financial tables
    </button>
    <button
      @click="scrollDown('#energy-analysis')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 hover:bg-Grayscale-Grey-5 px-5 py-3 text-Grayscale-Grey-3 rounded text-base"
    >
      <i class="yi yi-flash" style="font-size: 20px"></i>
      Energy analysis
    </button>
    <button
      @click="scrollDown('#pics-and-videos')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 hover:bg-Grayscale-Grey-5 px-5 py-3 text-Grayscale-Grey-3 rounded text-base"
    >
      <i class="yi yi-image" style="font-size: 20px"></i>
      Pics and videos
    </button>
    <button
      @click="scrollDown('#updates')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 hover:bg-Grayscale-Grey-5 px-5 py-3 text-Grayscale-Grey-3 rounded text-base"
    >
      <i class="yi yi-copy" style="font-size: 20px"></i>
      Updates
    </button>
    <button
      @click="scrollDown('#questions')"
      class="flex gap-3 items-center cursor-pointer transition-all duration-200 hover:bg-Grayscale-Grey-5 px-5 py-3 text-Grayscale-Grey-3 rounded text-base"
    >
      <i class="yi yi-question-mark" style="font-size: 20px"></i>
      Questions
    </button>
  </div>
</template>
<script setup>
function scrollDown(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
