<template>
  <basic-view-layout class="test-view">
    <template #body> </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
// Layouts
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
