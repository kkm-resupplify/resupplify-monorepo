<template>
  <div v-if="companies.length" class="company-list-company-list">
    <company-all-company-list-item
      v-for="(company, idx) in companies"
      :key="idx"
      :company="company"
    />
  </div>

  <a-list-no-results v-else :text="$t('company.all.noResults')" />
</template>

<script setup lang="ts">
import CompanyAllCompanyListItem from '@/components/core/panel/company/all/content/list/CompanyAllCompanyListItem.vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import { type PropType } from 'vue'

defineProps({
  companies: {
    type: Array as PropType<CompanyData[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.company-list-company-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-30;
}
</style>
