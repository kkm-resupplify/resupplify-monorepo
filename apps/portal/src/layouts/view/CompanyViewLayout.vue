<template>
  <div class="company-view-layout">
    <a-general-notification />

    <div class="company-view-layout__header">
      <navigation-bar />
    </div>

    <div class="company-view-layout__body">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/core/navigation/NavigationBar.vue'
</script>

<style scoped lang="scss">
@import '../../styles/mixins/custom-scrollbar';

.company-view-layout {
  @include custom-scrollbar;

  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    display: flex;
  }

  &__body {
    display: flex;
    flex-direction: column;
    padding: $global-spacing-30 $global-spacing-40;
  }
}
</style>
