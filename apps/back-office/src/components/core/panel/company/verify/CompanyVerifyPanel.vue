<template>
  <a-panel>
    <company-verify-summary-section :companies="companies" :is-loading="isLoading" />

    <company-verify-content-section
      :companies="companies"
      :is-loading="isLoading"
      @fetch-companies="handleFetchCompanies"
      @verify-all="handleVerifyAllCompanies"
      @reject-all="handleRejectAllCompanies"
    />
  </a-panel>
</template>

<script setup lang="ts">
import CompanyVerifySummarySection from '@/components/core/panel/company/verify/summary/CompanyVerifySummarySection.vue'
import CompanyVerifyContentSection from '@/components/core/panel/company/verify/content/CompanyVerifyContentSection.vue'
import CompanyVerificationService from '@/services/company/CompanyVerificationService'
import { onBeforeMount, ref, computed } from 'vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'

// Variables
const isLoading = ref(false)
const companies = ref<CompanyData[]>([])

// Computed
const companyIds = computed(() => companies.value.flatMap((company: CompanyData) => company.id))

// Methods
const handleFetchCompanies = async () => {
  isLoading.value = true

  const { success, data } = await CompanyVerificationService.getUnverifiedCompanies()

  if (success) companies.value = data

  isLoading.value = false
}

const handleVerifyAllCompanies = async () => {
  isLoading.value = true

  const { success } = await CompanyVerificationService.verifyAllCompanies({
    companyIds: companyIds.value
  })

  if (success) handleFetchCompanies()

  isLoading.value = false
}

const handleRejectAllCompanies = async () => {
  isLoading.value = true

  const { success } = await CompanyVerificationService.rejectAllCompanies({
    companyIds: companyIds.value
  })

  if (success) handleFetchCompanies()
  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchCompanies()
})
</script>
