<template>
  <basic-view-layout class="test-view">
    <template #body>
      <m-dropdown name="test" placeholder="Select country" :options="options" :filter="true" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'

const options = computed(() => {
  return [
    { text: 'Yo', iconPrepend: { name: 'check', color: 'info' } },
    { text: 'Moe', iconPrepend: { name: 'check', color: 'danger' } },
    { text: 'Go', iconPrepend: { name: 'check', color: 'warning' } }
  ]
})
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
