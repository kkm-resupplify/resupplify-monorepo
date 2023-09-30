<template>
  <div class="basic-view-layout">
    <a-general-notification />

    <div class="basic-view-layout__header">
      <navigation-bar />
    </div>

    <div class="basic-view-layout__hero">
      <slot name="hero" />
    </div>

    <div class="basic-view-layout__body">
      <slot name="body" />
    </div>

    <div class="basic-view-layout__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/navigation/NavigationBar.vue'
</script>

<style scoped lang="scss">
.basic-view-layout {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
  }

  &__hero {
    display: flex;
  }

  &__body {
    display: flex;
    flex-direction: column;
    padding: $global-spacing-30 $global-spacing-40;
  }

  &__footer {
    display: flex;
  }
}
</style>
