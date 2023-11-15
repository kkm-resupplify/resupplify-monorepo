<template>
  <a-panel>
    <company-verify-summary-section />

    <company-verify-content-section />
  </a-panel>
</template>

<script setup lang="ts">
import CompanyVerifySummarySection from '@/components/core/panel/company/verify/summary/CompanyVerifySummarySection.vue'
import CompanyVerifyContentSection from '@/components/core/panel/company/verify/content/CompanyVerifyContentSection.vue'
</script>
