<template>
  <div class="partners-section">
    <a-header
      :title="$t('company.partners.ourPartners')"
      :subtitle="$t('company.partners.companiesThatChoseUs')"
    />
    <company-card-list :companies="companies" />
  </div>
</template>

<script setup lang="ts">
// Components
import AHeader from '@sharedAtoms/header/AHeader.vue'
import CompanyCardList from '@/components/core/company/card/CompanyCardList.vue'

const companies = {}
</script>

<style scoped lang="scss">
.partners-section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $global-spacing-30;
  align-self: stretch;

  padding: $global-spacing-30 $global-spacing-40;

  background-color: $global-colors-white;
}
</style>
