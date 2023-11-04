<template>
  <a-list-item-wrapper>
    <a-status-indicator :status="warehouseIndicatorStatus" />

    <a-list-item-title-section title="Product name" :value="product.name" :basis="20" />

    <div class="warehouse-product-list-item__stats">
      <a-list-item-title-section
        v-for="(productStat, idx) in productStatList"
        :key="idx"
        :title="productStat.title"
        :value="productStat.value"
      />
    </div>

    <edit-warehouse-product-dialog />
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import EditWarehouseProductDialog from '@/components/core/company/management/warehouse/preview/dialog/EditWarehouseProductDialog.vue'
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// Computed
const isProductActive = computed(() => {
  return props.product.status === 1
})

const productSafeQuantityRatio = computed(() => {
  return props.product.quantity / props.product.safeQuantity
})

const warehouseIndicatorStatus = computed(() => {
  if (isProductActive.value) {
    if (productSafeQuantityRatio.value >= 1) return 1
    else if (productSafeQuantityRatio.value === 0) return 3

    return 2
  }

  return 0
})

const productStatList = computed(() => {
  return [
    { title: 'Current supply', value: props.product.quantity },
    { title: 'Safe supply', value: props.product.safeQuantity }
  ]
})
</script>

<style scoped lang="scss">
.warehouse-product-list-item {
  &__stats {
    display: flex;
    flex: 1;
    gap: $global-spacing-40;
  }

  &__stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
