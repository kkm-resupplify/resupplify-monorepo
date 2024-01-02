<template>
  <a-panel-section class="company-verify-content-section">
    <a-title :title="$t('company.verify.companyVerification')" size="large" />

    <div class="company-verify-content-section__header">
      <span v-text="$t('company.verify.companiesAwaitingVerification')" />

      <div class="company-verify-content-section__mass-actions">
        <a-button
          size="large"
          color="gradient-danger"
          :text="$t('global.rejectAll')"
          :disabled="disableButtons"
          @click="$emit('reject-all')"
        />

        <a-button
          size="large"
          :text="$t('global.verifyAll')"
          :disabled="disableButtons"
          @click="$emit('verify-all')"
        />
      </div>
    </div>

    <a-line />

    <a-skeleton v-if="isLoading" />

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
import { type PropType, computed } from 'vue'

const props = defineProps({
  companies: {
    type: Array as PropType<CompanyData[]>,
    required: true
  },
  isLoading: { type: Boolean, required: true }
})

// Emits
defineEmits(['fetch-companies', 'verify-all', 'reject-all'])

// Computed
const disableButtons = computed(() => {
  return props.isLoading || props.companies.length === 0
})
</script>

<style lang="scss" scoped>
.company-verify-content-section {
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
