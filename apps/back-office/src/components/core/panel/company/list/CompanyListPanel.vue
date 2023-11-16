<template>
  <a-panel>
    <company-list-summary-section :companies="companies" :is-loading="isLoading" />

    <company-list-content-section :companies="companies" :is-loading="isLoading" />
  </a-panel>
</template>

<script setup lang="ts">
import CompanyListSummarySection from '@/components/core/panel/company/list/summary/CompanyListSummarySection.vue'
import CompanyListContentSection from '@/components/core/panel/company/list/content/CompanyListContentSection.vue'
import CompanyVerificationService from '@/services/company/CompanyVerificationService'
import { onBeforeMount, ref } from 'vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'

// Variables
const isLoading = ref(false)
const companies = ref<CompanyData[]>([])

// Methods
const handleFetchCompanies = async () => {
  isLoading.value = true

  const { success, data } = await CompanyVerificationService.getAllCompanies()

  if (success) companies.value = data

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchCompanies()
})
</script>
