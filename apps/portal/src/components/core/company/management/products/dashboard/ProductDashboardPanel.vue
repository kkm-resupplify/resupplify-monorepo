<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else>
    <product-header-section :products-count="numberOfProducts" :products="products" />

    <product-content-section
      :products="products"
      @search="handleFetchProducts"
      @product-changed="handleFetchProducts"
    />
  </a-panel>
</template>
<script setup lang="ts">
import ProductHeaderSection from './section/header/ProductHeaderSection.vue'
import ProductContentSection from './section/content/ProductContentSection.vue'
import { ref, onBeforeMount } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import CompanyProductsService from '@/services/product/CompanyProductsService'
import { useRoute } from 'vue-router'

// Variables
const products = ref<Product[]>([])
const numberOfProducts = ref()
const isLoading = ref(false)
const route = useRoute()

// Methods
const handleFetchProducts = async () => {
  isLoading.value = true

  const {
    query: { search }
  } = route

  const { data, success, pagination } = await CompanyProductsService.getCompanyProducts({
    page: search as string
  })

  if (success) {
    products.value = data
    numberOfProducts.value = pagination.totalRecords
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
})
</script>
