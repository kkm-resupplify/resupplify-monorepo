<template>
  <a-panel-section>
    <company-verify-statistics :companies="companies" />
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyVerifyStatistics from '@/components/core/panel/company/verify/summary/statistics/CompanyVerifyStatistics.vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import { type PropType } from 'vue'

defineProps({
  companies: {
    type: Array as PropType<CompanyData[]>,
    required: true
  },
  isLoading: { type: Boolean, required: true }
})
</script>

<style lang="scss" scoped></style>
