<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else>
    <product-preview-header-section :products-count="numberOfProducts" :products="products" />

    <product-preview-content-section
      :products="products"
      :pagination-data="paginationData"
      @search="handleFetchProducts"
      @product-changed="handleFetchProducts"
      @page-changed="handleFetchProducts"
    />
  </a-panel>
</template>
<script setup lang="ts">
import ProductPreviewHeaderSection from './section/header/ProductPreviewHeaderSection.vue'
import ProductPreviewContentSection from './section/content/ProductPreviewContentSection.vue'
import { ref, onBeforeMount } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import CompanyProductsService from '@/services/product/CompanyProductsService'
import { useRoute } from 'vue-router'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'

// Variables
const products = ref<Product[]>([])
const numberOfProducts = ref()
const isLoading = ref(false)
const route = useRoute()
const paginationData = ref<Pagination>()

// Methods
const handleFetchProducts = async () => {
  isLoading.value = true

  const {
    query: { search, page }
  } = route

  const { data, success, pagination } = await CompanyProductsService.getCompanyProducts({
    page: page as string
  })

  if (success) {
    console.log(pagination)

    products.value = data
    numberOfProducts.value = pagination.totalRecords
    paginationData.value = pagination
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
})
</script>
