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
import type { PropType } from 'vue'
import type { WarehouseProduct } from '@interfaces/warehouse/WarehouseProductInterface'

defineProps({
  products: {
    type: Array as PropType<WarehouseProduct[]>,
    required: true
  }
})

// Variables
// TODO: remove this
const warehouseProducts = reactive([
  { id: 1, code: 'QJSD1128s', name: 'Shampoo', quantity: 1200, safeQuantity: 500, status: 0 },
  { id: 2, code: 'QJSD1128s', name: 'Toothpaste', quantity: 340, safeQuantity: 300, status: 1 },
  { id: 3, code: 'QJSD1128s', name: 'Soap', quantity: 0, safeQuantity: 100, status: 2 },
  { id: 4, code: 'QJSD1128s', name: 'Cereal', quantity: 100, safeQuantity: 50, status: 1 },
  { id: 5, code: 'QJSD1128s', name: 'Detergent', quantity: 500, safeQuantity: 250, status: 0 },
  { id: 6, code: 'QJSD1128s', name: 'Milk', quantity: 70, safeQuantity: 100, status: 1 },
  { id: 7, code: 'QJSD1128s', name: 'Bread', quantity: 150, safeQuantity: 75, status: 1 },
  { id: 8, code: 'QJSD1128s', name: 'Canned Soup', quantity: 90, safeQuantity: 150, status: 2 },
  { id: 9, code: 'QJSD1128s', name: 'Toilet Paper', quantity: 1, safeQuantity: 125, status: 1 },
  { id: 10, code: 'QJSD1128s', name: 'Bottled Water', quantity: 400, safeQuantity: 200, status: 1 },
  { id: 11, code: 'QJSD1128s', name: 'Cereal Bars', quantity: 100, safeQuantity: 50, status: 1 },
  { id: 12, code: 'QJSD1128s', name: 'Juice', quantity: 0, safeQuantity: 250, status: 1 },
  {
    id: 13,
    code: 'QJSD1128s',
    name: 'Canned Vegetables',
    quantity: 200,
    safeQuantity: 100,
    status: 1
  },
  { id: 14, code: 'QJSD1128s', name: 'Chips', quantity: 150, safeQuantity: 75, status: 0 },
  { id: 15, code: 'QJSD1128s', name: 'Coffee', quantity: 300, safeQuantity: 150, status: 1 },
  { id: 16, code: 'QJSD1128s', name: 'Tea', quantity: 250, safeQuantity: 125, status: 0 },
  { id: 17, code: 'QJSD1128s', name: 'Paper Towels', quantity: 400, safeQuantity: 200, status: 1 },
  { id: 18, code: 'QJSD1128s', name: 'Shaving Cream', quantity: 100, safeQuantity: 50, status: 2 },
  {
    id: 19,
    code: 'QJSD1128s',
    name: 'Laundry Detergent',
    quantity: 500,
    safeQuantity: 250,
    status: 1
  },
  { id: 20, code: 'QJSD1128s', name: 'Candles', quantity: 0, safeQuantity: 100, status: 0 },
  { id: 1, code: 'QJSD1128s', name: 'Shampoo', quantity: 1200, safeQuantity: 500, status: 0 }
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
