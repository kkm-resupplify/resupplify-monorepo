<template>
  <nav class="navigation-bar">
    <div>img</div>
    <navigation-bar-main-section />
    <navigation-bar-auth-section />
  </nav>
</template>

<script setup lang="ts">
import NavigationBarMainSection from '@/components/navigation/sections/NavigationBarMainSection.vue'
import NavigationBarAuthSection from './sections/NavigationBarAuthSection.vue'
</script>

<style scoped lang="scss">
.navigation-bar {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  padding: 8px 12px;
}
</style>
