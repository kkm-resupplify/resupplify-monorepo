<template>
  <div class="company-view-layout">
    <a-general-notification />

    <div class="company-view-layout__header">
      <navigation-bar />
    </div>
    <div class="company-view-layout__body-wrapper">
      <div class="company-view-layout__body">
        <company-navigation />

        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/core/navigation/NavigationBar.vue'
import CompanyNavigation from '@/components/core/company/navigation/CompanyNavigation.vue'
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

  &__body-wrapper {
    padding: $global-spacing-30 $global-spacing-40;
  }

  &__body {
    @include boxshadow-primary-2;

    display: flex;
    min-height: 800px;
  }
}
</style>
