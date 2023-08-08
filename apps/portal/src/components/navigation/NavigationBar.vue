<template>
  <nav class="navigation-bar">
    <div>img</div>
    <navigation-bar-main-section />
    <div>navigationbarauthsection</div>
  </nav>
</template>

<script setup lang="ts">
import NavigationBarMainSection from '@/components/navigation/sections/NavigationBarMainSection.vue'
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
