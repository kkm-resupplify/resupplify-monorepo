<template>
  <a-panel-section>
    <company-all-statistics :companies="companies" />
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyAllStatistics from '@/components/core/panel/company/all/summary/statistics/CompanyAllStatistics.vue'
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
