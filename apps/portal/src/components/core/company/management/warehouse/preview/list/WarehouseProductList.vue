<template>
  <div class="warehouse-product-list">
    <warehouse-product-list-item
      v-for="(warehouseProduct, idx) in warehouseProducts"
      :key="idx"
      :product="warehouseProduct"
      @product-changed="handleProductChanged"
    />
  </div>
</template>

<script setup lang="ts">
import WarehouseProductListItem from '@/components/core/company/management/warehouse/preview/list/WarehouseProductListItem.vue'
import type { WarehouseProduct } from '@sharedInterfaces/warehouse/WarehouseProductInterface'
import { type PropType } from 'vue'

defineProps({
  warehouseProducts: {
    type: Array as PropType<WarehouseProduct[]>,
    required: true
  }
})

// Emits
const emits = defineEmits(['product-changed'])

const handleProductChanged = () => {
  emits('product-changed')
}
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
