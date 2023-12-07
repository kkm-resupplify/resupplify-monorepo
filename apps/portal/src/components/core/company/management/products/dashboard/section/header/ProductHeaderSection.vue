<template>
  <a-panel-section>
    <div class="product-header-section">
      <a-title :title="$t('company.management.products.dashboard.title')" size="x-large" />

      <div class="product-header-section__main">
        <a-list-item-wrapper>
          <a-list-item-title-section
            v-for="statSection in statSections"
            :key="statSection.title"
            :title="$t(statSection.title)"
            :value="statSection.value"
          />
        </a-list-item-wrapper>

        <router-link :to="{ name: RouteNames.COMPANY_PRODUCT_EDITOR }">
          <a-button :text="$t('company.management.products.dashboard.addProduct')" size="x-large" />
        </router-link>
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes'
import type { ProductStatsInterface } from '@sharedInterfaces/product/ProductStatsInterface'
import { ref, onBeforeMount, computed } from 'vue'

import CompanyProductsService from '@/services/product/CompanyProductsService'

// Variables
const productStats = ref<ProductStatsInterface>({
  productsTotal: 0,
  productsAwaitingVerification: 0,
  verifiedProducts: 0,
  rejectedProducts: 0,
  activeProducts: 0,
  inactiveProducts: 0
})
const isLoading = ref(false)

// Computed
const statSections = computed(() => [
  {
    title: 'company.management.products.dashboard.totalProductsCount',
    value: productStats.value.productsTotal
  },
  {
    title: 'company.management.products.dashboard.activeProductsCount',
    value: productStats.value.activeProducts
  },
  {
    title: 'company.management.products.dashboard.verifiedProductsCount',
    value: productStats.value.verifiedProducts
  },
  {
    title: 'company.management.products.dashboard.inactiveProductsCount',
    value: productStats.value.inactiveProducts
  },
  {
    title: 'company.management.products.dashboard.pendingVerificationProductsCount',
    value: productStats.value.productsAwaitingVerification
  }
])

// Methods
const handleFetchProductStats = async () => {
  isLoading.value = true

  const { data, success } = await CompanyProductsService.getProductStats()

  if (success) productStats.value = data

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProductStats()
})
</script>

<style scoped lang="scss">
.product-header-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  &__title {
    white-space: nowrap;
  }

  &__main {
    display: flex;
    gap: $global-spacing-50;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
