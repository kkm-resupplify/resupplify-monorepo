<template>
  <a-panel-section class="company-verify-content-section">
    <a-title title="Verify companies" size="large" />

    <span v-text="`Companies awaiting verification`" />

    <a-line />
    <template v-if="isLoading">implement-loader-here</template>

    <company-verify-company-list v-else :companies="companies" />
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyVerifyCompanyList from '@/components/core/panel/company/verify/list/CompanyVerifyCompanyList.vue'
import CompanyVerificationService from '@/services/company/CompanyVerificationService'
import { onBeforeMount, ref } from 'vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'

// Variables
const isLoading = ref(false)
const companies = ref<CompanyData[]>([])

// Hooks
onBeforeMount(async () => {
  isLoading.value = true

  const { success, data } = await CompanyVerificationService.getUnverifiedCompanies()

  if (success) companies.value = data

  isLoading.value = false
})
</script>

<style lang="scss" scoped>
.company-verify-content-section {
  overflow-y: auto;
  height: 100%;
}
</style>
