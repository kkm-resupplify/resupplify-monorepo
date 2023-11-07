<template>
  <div class="warehouse-product-list">
    <warehouse-product-list-item
      v-for="(warehouseProduct, idx) in products"
      :key="idx"
      :product="warehouseProduct"
    />
  </div>
</template>

<script setup lang="ts">
import WarehouseProductListItem from '@/components/core/company/management/warehouse/preview/list/WarehouseProductListItem.vue'
import type { PropType } from 'vue'
import type { WarehouseProduct } from '@interfaces/warehouse/WarehouseProductInterface'

defineProps({
  products: {
    type: Array as PropType<WarehouseProduct[]>,
    required: true
  }
})
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
