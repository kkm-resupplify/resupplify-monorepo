<template>
  <a-panel-section>
    <div class="product-header-section">
      <div class="product-header-section__content-titles">
        <a-title
          :title="$t('company.management.products.dashboard.totalProductsCount')"
          :subtitle="productStats.productsTotal"
          size="x-large"
          variant="horizontal"
          class="product-header-section__title"
        />

        <a-title
          :title="$t('company.management.products.dashboard.activeProductsCount')"
          :subtitle="productStats.activeProducts"
          variant="horizontal"
          class="product-header-section__title"
        />

        <a-title
          :title="$t('company.management.products.dashboard.verifiedProductsCount')"
          :subtitle="productStats.verifiedProducts"
          variant="horizontal"
          class="product-header-section__title"
        />

        <a-title
          :title="$t('company.management.products.dashboard.inactiveProductsCount')"
          :subtitle="productStats.inactiveProducts"
          variant="horizontal"
          class="product-header-section__title"
        />

        <a-title
          :title="$t('company.management.products.dashboard.pendingVerificationProductsCount')"
          :subtitle="productStats.productsAwaitingVerification"
          variant="horizontal"
          class="product-header-section__title"
        />
      </div>

      <div class="product-header-section__actions">
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
import { ref, onBeforeMount } from 'vue'

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
  justify-content: space-between;

  &__title {
    white-space: nowrap;
  }

  &__content-titles {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
    align-items: flex-end;
  }
}
</style>
