<template>
  <div class="product-list">
    <m-tile-list v-if="products?.length" class="product-list__content">
      <product-list-item v-for="(product, idx) in products" :key="idx" :product="product" />
    </m-tile-list>

    <a-list-no-results
      v-else
      :text="$t('company.management.warehouse.preview.list.noWarehouses')"
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
defineEmits(['search'])
</script>

<style scoped lang="scss">
.product-list {
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: $global-spacing-40;
}
</style>
