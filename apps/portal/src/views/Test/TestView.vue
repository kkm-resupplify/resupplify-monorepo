<template>
  <basic-view-layout class="test-view">
    <template #body>
      <o-confirm-dialog type="update" item-name="item" activator-name="Update" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
