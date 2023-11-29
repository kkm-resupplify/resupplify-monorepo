<template>
  <div class="product-list">
    <product-list-item v-for="(product, idx) in products" :key="idx" :product="product" />
  </div>
</template>

<script setup lang="ts">
import ProductListItem from './ProductListItem.vue'
import type { PropType } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'

defineProps({
  products: {
    type: Array as PropType<Product[]>
  }
})

// Emits
defineEmits(['search'])
</script>

<style scoped lang="scss">
.product-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;

  padding: $global-spacing-30;
}
</style>
