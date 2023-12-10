<template>
  <a-panel>
    <product-header-section :stat-sections="statSections" :is-loading="isLoading" />

    <product-content-section @update-stats="handleFetchProductStats" />
  </a-panel>
</template>

<script setup lang="ts">
import ProductHeaderSection from './section/header/ProductHeaderSection.vue'
import ProductContentSection from './section/content/ProductContentSection.vue'
import type { ProductStatsInterface } from '@sharedInterfaces/product/ProductStatsInterface'
import { ref, onBeforeMount, computed } from 'vue'

import CompanyProductsService from '@/services/product/CompanyProductsService'

// Variables
const isLoading = ref(false)
const productStats = ref<ProductStatsInterface>({
  productsTotal: 0,
  productsAwaitingVerification: 0,
  verifiedProducts: 0,
  rejectedProducts: 0,
  activeProducts: 0,
  inactiveProducts: 0
})

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
