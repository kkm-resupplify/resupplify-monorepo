<template>
  <div class="warehouse-product-list-item">
    <a-status-indicator :status="warehouseIndicatorStatus" />

    <a-title :title="product.name" />
  </div>
</template>

<script setup lang="ts">
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
    if (productSafeQuantityRatio.value >= 1.2) return 1
    else if (productSafeQuantityRatio.value >= 0.8) return 2
    else if (productSafeQuantityRatio.value === 0) return 3
  }

  return 0
})
</script>

<style scoped lang="scss">
.warehouse-product-list-item {
  display: flex;
  flex: 1;
  gap: $global-spacing-20;
  align-items: center;

  box-sizing: border-box;
  padding: $global-spacing-40;

  border: 1px solid var(--font-primary);
  border-radius: $global-border-radius-10;
}
</style>
