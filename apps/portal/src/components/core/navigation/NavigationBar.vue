<template>
  <nav class="navigation-bar">
    <router-link :to="{ name: 'HOME' }" style="align-self: center">
      <img rel="preload" src="/resupplify-logo.png" alt="logo" :width="100" />
    </router-link>

    <navigation-bar-main-section />

    <navigation-bar-auth-section />
  </nav>
</template>

<script setup lang="ts">
import NavigationBarMainSection from './sections/NavigationBarMainSection.vue'
import NavigationBarAuthSection from './sections/NavigationBarAuthSection.vue'
</script>

<style scoped lang="scss">
.navigation-bar {
  display: flex;
  flex: 1;
  gap: 16px;
  align-items: flex-start;

  min-height: 80px;
  margin: 0 $global-spacing-50;

  border-bottom: 2px solid var(--secondary-2);
}
</style>
