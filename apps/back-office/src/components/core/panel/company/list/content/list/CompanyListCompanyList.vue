<template>
  <div v-if="companies.length" class="company-list-company-list">
    <company-list-company-list-item
      v-for="(company, idx) in companies"
      :key="idx"
      :company="company"
      @update-list="$emit('update-list')"
    />
  </div>

  <a-list-no-results v-else :text="$t('company.list.noResults')" />
</template>

<script setup lang="ts">
import CompanyListCompanyListItem from '@/components/core/panel/company/list/content/list/CompanyListCompanyListItem.vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import { type PropType } from 'vue'

defineProps({
  companies: {
    type: Array as PropType<CompanyData[]>,
    required: true
  }
})

// Emits
defineEmits(['update-list'])
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
