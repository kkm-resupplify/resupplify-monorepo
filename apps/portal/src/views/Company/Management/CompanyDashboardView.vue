<template>
  <company-view-layout class="company-dashboard-view">
    <template #header>Dashboard</template>
    <template #tiles>Dashboard</template>
  </company-view-layout>
</template>

<script setup lang="ts">
// Layouts
import CompanyViewLayout from '@/layouts/view/CompanyViewLayout.vue'
</script>

<style lang="scss" scoped>
.company-dashboard-view {
  display: flex;
  flex-direction: column;
}
</style>
