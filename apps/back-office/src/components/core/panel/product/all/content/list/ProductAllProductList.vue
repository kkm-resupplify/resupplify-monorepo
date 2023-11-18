<template>
  <div v-if="products.length" class="product-verify-product-list">
    <product-verify-product-list-item
      v-for="(product, idx) in products"
      :key="idx"
      :product="product"
      @update-list="$emit('update-list')"
    />
  </div>

  <a-list-no-results v-else :text="$t('product.verify.noResults')" />
</template>

<script setup lang="ts">
import ProductVerifyProductListItem from '@/components/core/panel/product/verify/content/list/ProductVerifyProductListItem.vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { type PropType } from 'vue'

defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  }
})

// Emits
defineEmits(['update-list'])
</script>

<style lang="scss" scoped>
.product-verify-product-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-30;
}
</style>
