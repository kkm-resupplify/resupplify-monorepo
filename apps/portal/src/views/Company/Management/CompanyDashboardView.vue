<template>
  <company-view-layout class="company-dashboard-view">
    <template #header>Dashboard</template>
  </company-view-layout>
</template>

<script setup lang="ts">
import CompanyViewLayout from '@/layouts/view/CompanyViewLayout.vue'
</script>

<style lang="scss" scoped>
.company-dashboard-view {
  display: flex;
  flex-direction: column;
}
</style>
