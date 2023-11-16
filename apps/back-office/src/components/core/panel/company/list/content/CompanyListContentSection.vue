<template>
  <a-panel-section class="company-list-content-section">
    <a-title :title="$t('company.list.companyList')" size="large" />

    <span v-text="$t('company.list.companyListSubtitle')" />

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <company-list-company-list
      v-else
      :companies="companies"
      @update-list="$emit('fetch-companies')"
    />
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyListCompanyList from '@/components/core/panel/company/list/content/list/CompanyListCompanyList.vue'
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
.company-list-content-section {
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
