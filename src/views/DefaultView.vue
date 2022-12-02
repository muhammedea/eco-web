<template>
  <EcolariumHeader></EcolariumHeader>
  <div :class="$route.path === '/' ? 'max-w-[1800px] mx-auto' : 'max-w-[1800px] mx-auto'">
    <router-view v-slot="{ Component }">
      <transition leave-to-class="opacity-0" leave-active-class="transition duration-200">
        <Component :is="Component"></Component>
      </transition>
    </router-view>
  </div>
</template>
<script setup>
import EcolariumHeader from '@/components/basecomponents/EcolariumHeader.vue';
</script>
<style></style>
