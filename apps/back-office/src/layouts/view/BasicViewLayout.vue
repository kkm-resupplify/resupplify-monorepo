<template>
  <div class="basic-view-layout">
    <a-general-notification />

    <div class="basic-view-layout__body-wrapper">
      <div class="basic-view-layout__body">
        <admin-navigation />

        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminNavigation from '@/components/core/navigation/AdminNavigation.vue'
</script>

<style scoped lang="scss">
.basic-view-layout {
  @include custom-scrollbar;

  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    display: flex;
  }

  &__body-wrapper {
    display: flex;
    flex: 1;
    max-height: 100%;
    padding: $global-spacing-30 $global-spacing-40;
  }

  &__body {
    @include default-border-1;
    display: flex;
    flex: 1;
    background-color: var(--secondary-3);
  }
}
</style>
