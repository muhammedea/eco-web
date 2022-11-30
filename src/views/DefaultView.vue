<template>
  <EcolariumHeader></EcolariumHeader>
  <div class="max-w-[1440px] mx-auto">
    <router-view v-slot="{ Component }">
      <transition leave-to-class="opacity-0" leave-active-class="transition duration-300">
        <Component :is="Component"></Component>
      </transition>
    </router-view>
  </div>
</template>
<script setup>
import EcolariumHeader from '@/components/basecomponents/EcolariumHeader.vue';
</script>
<style></style>
