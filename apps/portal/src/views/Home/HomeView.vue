<template>
  <basic-view-layout>
    <template #hero>
      <hero-section />
    </template>

    <template #body>
      <div class="home-view__sections">
        <partners-section />
        <bestsellers-section />
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
// Layouts
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'

// Components
import PartnersSection from './components/sections/PartnersSection.vue'
import BestsellersSection from './components/sections/BestsellersSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
</script>

<style lang="scss" scoped>
.home-view {
  &__sections {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }
}
</style>
