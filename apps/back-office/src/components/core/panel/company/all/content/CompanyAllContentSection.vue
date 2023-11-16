<template>
  <a-panel-section class="company-all-content-section">
    <a-title :title="$t('company.all.companyList')" size="large" />

    <span v-text="$t('company.all.companyListSubtitle')" />

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <company-all-company-list v-else :companies="companies" />
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyAllCompanyList from '@/components/core/panel/company/all/content/list/CompanyAllCompanyList.vue'
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

<style lang="scss" scoped>
.company-all-content-section {
  overflow-y: auto;
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__mass-actions {
    display: flex;
    gap: $global-spacing-40;
    align-items: center;
  }
}
</style>
