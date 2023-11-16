<template>
  <a-panel-section>
    <company-list-statistics :companies="companies" />
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyListStatistics from '@/components/core/panel/company/list/summary/statistics/CompanyVerifyStatistics.vue'
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
