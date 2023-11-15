<template>
  <div class="company-verify-company-list">
    <company-verify-company-list-item />
  </div>
</template>

<script setup lang="ts">
import CompanyVerifyCompanyListItem from '@/components/core/panel/company/verify/list/CompanyVerifyCompanyListItem.vue'
</script>

<style lang="scss" scoped>
.company-verify-company-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-30;
}
</style>
