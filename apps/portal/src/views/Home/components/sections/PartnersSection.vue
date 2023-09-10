<template>
  <div class="partners-section">
    <a-header
      :title="$t('company.promotion.ourPartners')"
      :subtitle="$t('company.promotion.companiesThatChoseUs')"
    />
    <company-card-list :companies="companies" />
  </div>
</template>

<script setup lang="ts">
// Components
import AHeader from '@sharedAtoms/header/AHeader.vue'
import CompanyCardList from '@/components/core/company/card/CompanyCardList.vue'

// Mock data
const companies = [
  {
    companyName: 'KKM Marketify',
    shortDescription:
      'Company specializes in this and that. We offer products of the highest quality in this industry.',
    companyStats: {
      productsListed: 1339,
      uniqueClients: 237,
      ordersFullfilled: 27932
    }
  }
]
</script>

<style scoped lang="scss">
.partners-section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $global-spacing-30;
  align-self: stretch;

  padding: $global-spacing-30 $global-spacing-40;

  background-color: $global-colors-grey-100;
}
</style>
