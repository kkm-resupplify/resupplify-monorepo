<template>
  <a-panel-section class="company-verify-content-section">
    <a-title title="Verify companies" />

    <company-verify-company-list />
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyVerifyCompanyList from '@/components/core/panel/company/verify/list/CompanyVerifyCompanyList.vue'
</script>

<style lang="scss" scoped>
.company-verify-content-section {
  overflow-y: auto;
}
</style>
