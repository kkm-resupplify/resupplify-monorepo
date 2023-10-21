<template>
  <nav class="navigation-bar">
    <div>img</div>

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

  margin: $global-spacing-20 $global-spacing-40;
  padding: $global-spacing-30 $global-spacing-40;

  border-radius: 4px;
}
</style>
