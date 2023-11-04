<template>
  <div class="warehouse-product-list">
    <warehouse-product-list-item
      v-for="(warehouseProduct, idx) in warehouseProducts"
      :key="idx"
      :product="warehouseProduct"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import WarehouseProductListItem from '@/components/core/company/management/warehouse/preview/list/WarehouseProductListItem.vue'

// Variables
const warehouseProducts = reactive([
  { id: 1, name: 'Product 1', quantity: 1200, safeQuantity: 500, status: 0 },
  { id: 2, name: 'Product 2', quantity: 340, safeQuantity: 300, status: 1 },
  { id: 3, name: 'Product 3', quantity: 0, safeQuantity: 100, status: 2 },
  { id: 4, name: 'Product 4', quantity: 100, safeQuantity: 50, status: 1 },
  { id: 5, name: 'Product 5', quantity: 500, safeQuantity: 250, status: 0 },
  { id: 6, name: 'Product 6', quantity: 70, safeQuantity: 100, status: 1 },
  { id: 7, name: 'Product 7', quantity: 150, safeQuantity: 75, status: 1 },
  { id: 8, name: 'Product 8', quantity: 90, safeQuantity: 150, status: 2 },
  { id: 9, name: 'Product 9', quantity: 1, safeQuantity: 125, status: 1 },
  { id: 10, name: 'Product 10', quantity: 400, safeQuantity: 200, status: 1 },
  { id: 11, name: 'Product 11', quantity: 100, safeQuantity: 50, status: 1 },
  { id: 12, name: 'Product 12', quantity: 0, safeQuantity: 250, status: 1 },
  { id: 13, name: 'Product 13', quantity: 200, safeQuantity: 100, status: 1 },
  { id: 14, name: 'Product 14', quantity: 150, safeQuantity: 75, status: 0 },
  { id: 15, name: 'Product 15', quantity: 300, safeQuantity: 150, status: 1 },
  { id: 16, name: 'Product 16', quantity: 250, safeQuantity: 125, status: 0 },
  { id: 17, name: 'Product 17', quantity: 400, safeQuantity: 200, status: 1 },
  { id: 18, name: 'Product 18', quantity: 100, safeQuantity: 50, status: 2 },
  { id: 19, name: 'Product 19', quantity: 500, safeQuantity: 250, status: 1 },
  { id: 20, name: 'Product 20', quantity: 0, safeQuantity: 100, status: 0 }
])
</script>

<style scoped lang="scss">
.warehouse-product-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-30;
}
</style>
