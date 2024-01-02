<template>
  <div class="partners-section">
    <a-header
      :title="$t('company.promotion.ourPartners')"
      :subtitle="$t('company.promotion.companiesThatChoseUs')"
    />

    <company-card-list :companies="featuredCompanies" />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import HomepageService from '@/services/homepage/HomepageService'
import type { FeaturedCompany } from '@sharedInterfaces/company/CompanyInterface'
import CompanyCardList from '@/components/core/company/card/CompanyCardList.vue'

// Variables
const isLoading = ref(false)
const featuredCompanies = ref<FeaturedCompany[]>([])

// Methods
const handleFetchFeaturedCompanies = async () => {
  isLoading.value = true

  const { success, data } = await HomepageService.getFeaturedCompanies()

  if (success) {
    featuredCompanies.value = data
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(() => {
  handleFetchFeaturedCompanies()
})
</script>

<style scoped lang="scss">
.partners-section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $global-spacing-30;
  align-self: stretch;

  padding: $global-spacing-30 $global-spacing-40;

  border-radius: $global-border-radius-20;
}
</style>
