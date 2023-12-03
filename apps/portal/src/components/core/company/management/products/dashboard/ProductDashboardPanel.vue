<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else>
    <product-header-section
      :products="products"
      :products-total="productsTotal"
      @fetch-products="handleFetchProducts"
    />

    <product-content-section
      :products="products"
      :pagination-data="paginationData"
      @search="handleFetchProducts"
      @product-changed="handleFetchProducts"
      @page-changed="handleFetchProducts"
      @filter="handleFetchProducts"
    />
  </a-panel>
</template>

<script setup lang="ts">
import ProductHeaderSection from './section/header/ProductHeaderSection.vue'
import ProductContentSection from './section/content/ProductContentSection.vue'
import { ref, onBeforeMount, computed } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import CompanyProductsService from '@/services/product/CompanyProductsService'
import { useRoute } from 'vue-router'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'

// Variables
const products = ref<Product[]>([])
const isLoading = ref(false)
const route = useRoute()
const paginationData = ref<Pagination>()

// Methods
const handleFetchProducts = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId, subcategoryId, status, verificationStatus }
  } = route

  const { data, success, pagination } = await CompanyProductsService.getProducts({
    page: page as string,
    name: name as string,
    categoryId: categoryId as string,
    subcategoryId: subcategoryId as string,
    status: status as string,
    verificationStatus: verificationStatus as string
  })

  if (success) {
    products.value = data
    paginationData.value = pagination
  }

  isLoading.value = false
}

// Computed
const productsTotal = computed(() => {
  if (paginationData.value?.totalRecords) {
    return paginationData.value.totalRecords
  }
  return '0'
})

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
})
</script>
