<template>
  <basic-view-layout class="test-view">
    <template #body>
      <register-company />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import RegisterCompany from '@/components/core/company/register/RegisterCompany.vue'
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
