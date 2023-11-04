<template>
  <div class="warehouse-product-list-item">
    <a-status-indicator :status="warehouseIndicatorStatus" />

    <a-title :title="product.name" />

    <div class="warehouse-product-list-item__stats">
      <div
        v-for="(productStat, idx) in productStatList"
        :key="idx"
        class="warehouse-product-list-item__stat-item"
      >
        <a-title :title="productStat.title" />
        <span v-text="productStat.value" />
      </div>
    </div>
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
    if (productSafeQuantityRatio.value >= 1) return 1
    else if (productSafeQuantityRatio.value === 0) return 3

    return 2
  }

  return 0
})

const productStatList = computed(() => {
  return [
    { title: 'Current supply', value: props.product.quantity },
    { title: 'Safe supply', value: props.product.quantity }
  ]
})
</script>

<style scoped lang="scss">
.warehouse-product-list-item {
  display: flex;
  flex: 1;
  gap: $global-spacing-40;
  align-items: center;

  box-sizing: border-box;
  padding: $global-spacing-40;

  border: 1px solid var(--font-primary);
  border-radius: $global-border-radius-10;

  &__stats {
    display: flex;
    gap: $global-spacing-40;
  }

  &__stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
