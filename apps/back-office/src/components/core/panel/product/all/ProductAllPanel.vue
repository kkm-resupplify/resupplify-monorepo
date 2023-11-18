<template>
  <a-panel>
    <product-all-content-section :products="products" :is-loading="isLoading" />
  </a-panel>
</template>

<script setup lang="ts">
import ProductAllContentSection from '@/components/core/panel/product/all/content/ProductAllContentSection.vue'
import ProductVerificationService from '@/services/product/ProductVerificationService'
import { onBeforeMount, ref } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'

// Variables
const isLoading = ref(false)
const products = ref<Product[]>([])

// Methods
const handleFetchProducts = async () => {
  isLoading.value = true

  const { success, data } = await ProductVerificationService.getAllProducts()

  if (success) products.value = data

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
})
</script>
