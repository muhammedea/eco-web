<template>
  <div class="flex gap-2 center justify-between border rounded-md p-4">
    <div class="flex items-center gap-3">
      <span class="w-10 h-10 border rounded-full flex items-center justify-center p-2">
        <img src="@/assets/images/ampl.svg" alt="project-logo" />
      </span>
      <div class="flex flex-col text-baes-leading-5 leading-10 font-bold text-Black-and-White-Black">
        ECO_ORNG_1
        <p class="text-sm leading-6 text-Grayscale-Grey-3 font-normal">
          Total <span class="font-semibold">123.000</span>
        </p>
      </div>
    </div>
    <div class="flex items-center gap-5">
      <div class="flex flex-col text-Color-Code-Green">
        <p class="text-xs">Available</p>
        <p class="text-xl leading-6">123.000</p>
      </div>
      <div class="h-7 w-px bg-BORDER"></div>
      <div class="flex flex-col text-Grayscale-Grey-3">
        <p class="text-xs">Staked</p>
        <p class="text-xl leading-6">100</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
