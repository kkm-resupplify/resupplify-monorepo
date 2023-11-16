<template>
  <a-panel-section class="company-verify-content-section">
    <a-title title="Verify companies" size="large" />

    <span v-text="`Companies awaiting verification`" />

    <a-line />
    <template v-if="isLoading">implement-loader-here</template>

    <company-verify-company-list
      v-else
      :companies="companies"
      @update-list="$emit('fetch-companies')"
    />
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyVerifyCompanyList from '@/components/core/panel/company/verify/content/list/CompanyVerifyCompanyList.vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import { type PropType } from 'vue'

defineProps({
  companies: {
    type: Array as PropType<CompanyData[]>,
    required: true
  },
  isLoading: { type: Boolean, required: true }
})

// Emits
defineEmits(['fetch-companies'])
</script>

<style lang="scss" scoped>
.company-verify-content-section {
  overflow-y: auto;
  height: 100%;
}
</style>
