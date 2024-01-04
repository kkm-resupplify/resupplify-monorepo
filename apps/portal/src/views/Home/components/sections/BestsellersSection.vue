<template>
  <a-panel-section>
    <a-header
      :title="$t('product.promotion.bestsellers')"
      :subtitle="$t('product.promotion.topSellingProducts')"
    />

    <product-card-list :products="featuredProducts.slice(0, 6)" />
  </a-panel-section>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import HomepageService from '@/services/homepage/HomepageService'
import type { FeaturedProduct } from '@sharedInterfaces/product/ProductInterface'
import ProductCardList from '@/components/core/product/card/ProductCardList.vue'

// Variables
const isLoading = ref(false)
const featuredProducts = ref<FeaturedProduct[]>([])

// Methods
const handleFetchFeaturedProducts = async () => {
  isLoading.value = true

  const { success, data } = await HomepageService.getFeaturedProducts()

  if (success) {
    featuredProducts.value = data
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchFeaturedProducts()
})
</script>

<style scoped lang="scss">
.bestsellers-section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $global-spacing-30;
  align-self: stretch;

  padding: $global-spacing-30 $global-spacing-40;

  border-radius: $global-border-radius-20;
}
</style>
