<template>
  <yartu-notify></yartu-notify>
  <yartu-modal></yartu-modal>
  <RouterView></RouterView>
</template>
<script setup></script>
<style>
html {
  scroll-behavior: smooth;
}
table,
th,
td {
  border: 1px solid rgb(229, 231, 235);
  border-collapse: collapse;
}
table {
  border-radius: 1px;
  overflow: hidden;
}
th,
td {
  padding: 0.6em 1em;
}
</style>
