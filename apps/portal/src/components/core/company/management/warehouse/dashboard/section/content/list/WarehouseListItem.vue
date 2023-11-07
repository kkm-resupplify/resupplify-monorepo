<template>
  <m-tile :to="warehouseLink">
    <div class="warehouse-list-item__header">
      <a-status-indicator :status="warehouseStatus" />
    </div>

    <div class="warehouse-list-item__content" v-text="warehouse.name" />
  </m-tile>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouteNames } from '@/routes/index'
import type { WarehouseProduct } from '@/interfaces/warehouse/WarehouseProductInterface'
const props = defineProps({
  warehouse: { type: Object, required: true }
})

// Computed
const warehouseLink = computed(() => {
  return {
    name: RouteNames.COMPANY_WAREHOUSE_PREVIEW,
    params: {
      id: props.warehouse.id
    }
  }
})

const warehouseStatus = computed(() => {
  if (
    props.warehouse.products.some(
      (product: WarehouseProduct) => warehouseIndicatorStatus(product) === 1
    )
  ) {
    return 1
  }

  if (
    props.warehouse.products.some(
      (product: WarehouseProduct) => warehouseIndicatorStatus(product) === 3
    )
  ) {
    return 3
  }

  return 2
})

// Methods
const warehouseIndicatorStatus = (product: WarehouseProduct) => {
  const productSafeQuantityRatio = product.quantity / product.safeQuantity

  if (productSafeQuantityRatio >= 1) return 1
  else if (productSafeQuantityRatio === 0) return 3

  return 2
}
</script>

<style scoped lang="scss">
.warehouse-list-item {
  &__header {
    display: flex;
    align-self: flex-end;
  }

  &__content {
    display: flex;
    flex: 1;
    align-items: center;
  }
}
</style>
