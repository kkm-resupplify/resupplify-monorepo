<template>
  <div v-if="products.length" class="product-all-product-list">
    <product-all-product-list-item
      v-for="(product, idx) in products"
      :key="idx"
      :product="product"
      @update-list="$emit('update-list')"
    />
  </div>

  <a-list-no-results v-else :text="$t('product.all.noResults')" />
</template>

<script setup lang="ts">
import ProductAllProductListItem from '@/components/core/panel/product/all/content/list/ProductAllProductListItem.vue'
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
.product-all-product-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-30;
}
</style>
