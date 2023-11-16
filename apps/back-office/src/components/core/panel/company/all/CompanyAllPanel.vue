<template>
  <a-panel>
    <company-all-summary-section :companies="companies" :is-loading="isLoading" />

    <company-all-content-section :companies="companies" :is-loading="isLoading" />
  </a-panel>
</template>

<script setup lang="ts">
import CompanyAllSummarySection from '@/components/core/panel/company/all/summary/CompanyAllSummarySection.vue'
import CompanyAllContentSection from '@/components/core/panel/company/all/content/CompanyAllContentSection.vue'
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
