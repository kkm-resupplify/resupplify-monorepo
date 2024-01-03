<template>
  <basic-view-layout class="home-view">
    <template #hero>
      <a-panel>
        <hero-section />
      </a-panel>
    </template>

    <template #body>
      <a-panel width="auto" class="home-view__body">
        <partners-section />

        <bestsellers-section />
      </a-panel>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import PartnersSection from './components/sections/PartnersSection.vue'
import BestsellersSection from './components/sections/BestsellersSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
</script>

<style lang="scss" scoped>
.home-view {
  &__body {
    gap: $global-spacing-40 !important;

    :deep(.a-panel-section) {
      padding: $global-spacing-40;
      background-color: var(--primary);
    }
  }
}
</style>
