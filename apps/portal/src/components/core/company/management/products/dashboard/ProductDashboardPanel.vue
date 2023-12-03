<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else>
    <product-header-section
      :products="products"
      :products-total="productsTotal"
      @fetch-products="handleFetchProducts"
    />

    <product-content-section />
  </a-panel>
</template>

<script setup lang="ts">
import ProductHeaderSection from './section/header/ProductHeaderSection.vue'
import ProductContentSection from './section/content/ProductContentSection.vue'
import { ref, onBeforeMount, computed } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import CompanyProductsService from '@/services/product/CompanyProductsService'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'

// Variables
const products = ref<Product[]>([])
const isLoading = ref(false)
const paginationData = ref<Pagination>()

// Methods
const handleFetchProducts = async () => {
  isLoading.value = true

  const { data, success } = await CompanyProductsService.getProducts()

  if (success) products.value = data

  isLoading.value = false
}

// Computed
const productsTotal = computed(() => {
  return paginationData.value?.totalRecords ? paginationData.value.totalRecords : '0'
})

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
})
</script>
