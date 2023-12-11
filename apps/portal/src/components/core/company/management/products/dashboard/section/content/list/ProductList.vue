<template>
  <div class="product-list">
    <product-list-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      @product-changed="handleProductChanged"
    />
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
const emits = defineEmits(['product-changed'])

// Methods
const handleProductChanged = () => {
  emits('product-changed')
}
</script>

<style scoped lang="scss">
.product-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;

  height: 100%;
}
</style>
