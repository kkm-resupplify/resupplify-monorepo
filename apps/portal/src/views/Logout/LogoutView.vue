<template>
  <basic-view-layout class="logout-view">
    <template #body>
      <div class="logout-view__content">LOGOUT</div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
</script>

<style lang="scss" scoped>
.logout-view {
  &__content {
    @include boxshadow-primary-2;

    display: flex;
    align-self: center;

    width: 800px;
    height: 600px;

    border-radius: $global-border-radius-10;
  }
}
</style>
