<template>
  <a-panel-section class="product-all-content-section">
    <a-title :title="$t('product.all.productList')" size="large" />

    <span v-text="$t('product.all.productListSubtitle')" />

    <a-line />

    <a-skeleton v-if="isLoading" />

    <product-all-product-list v-else :products="products" />
  </a-panel-section>
</template>

<script setup lang="ts">
import ProductAllProductList from '@/components/core/panel/product/all/content/list/ProductAllProductList.vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { type PropType } from 'vue'

defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  },
  isLoading: { type: Boolean, required: true }
})
</script>

<style lang="scss" scoped>
.product-all-content-section {
  overflow-y: auto;
  height: 100%;
}
</style>
