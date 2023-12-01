<template>
  <a-panel>
    <product-verify-content-section
      :products="products"
      :is-loading="isLoading"
      @fetch-products="handleFetchProducts"
      @verify-all="handleVerifyAllProducts"
      @reject-all="handleRejectAllProducts"
    />
  </a-panel>
</template>

<script setup lang="ts">
import ProductVerifyContentSection from '@/components/core/panel/product/verify/content/ProductVerifyContentSection.vue'
import ProductVerificationService from '@/services/product/ProductVerificationService'
import { onBeforeMount, ref, computed } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'

// Variables
const isLoading = ref(false)
const products = ref<Product[]>([])

// Computed
const productIds = computed(() => products.value.flatMap((product: Product) => product.id))

// Methods
const handleFetchProducts = async () => {
  isLoading.value = true

  const { success, data } = await ProductVerificationService.getUnverifiedProducts()

  if (success) products.value = data

  isLoading.value = false
}

const handleVerifyAllProducts = async () => {
  isLoading.value = true

  const { success } = await ProductVerificationService.verifyAllProducts({
    productIds: productIds.value
  })

  if (success) handleFetchProducts()

  isLoading.value = false
}

const handleRejectAllProducts = async () => {
  isLoading.value = true

  const { success } = await ProductVerificationService.rejectAllProducts({
    productIds: productIds.value
  })

  if (success) handleFetchProducts()
  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
})
</script>
