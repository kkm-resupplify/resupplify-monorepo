<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else>
    <product-header-section />
  </a-panel>
</template>
<script setup lang="ts">
import ProductHeaderSection from './section/header/ProductHeaderSection.vue'
import { ref, onBeforeMount } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import CompanyProductsService from '@/services/product/CompanyProductsService'
import { useRoute } from 'vue-router'

// Variables
const products = ref<Product[]>([])
const isLoading = ref(false)
const route = useRoute()

const handleFetchProducts = async () => {
  isLoading.value = true

  const {
    query: { search }
  } = route

  const { data, success } = await CompanyProductsService.getCompanyProducts({
    page: search as string
  })

  console.log(data, success)

  if (success) products.value = data

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
})
</script>
