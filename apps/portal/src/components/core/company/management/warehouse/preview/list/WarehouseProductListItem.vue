<template>
  <div class="warehouse-product-list-item">
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
const warehouseIndicatorStatus = computed(() => {
  return 0
})
</script>

<style scoped lang="scss">
.warehouse-product-list-item {
  display: flex;
  flex: 1;
  align-items: center;

  box-sizing: border-box;
  padding: $global-spacing-40;

  border: 1px solid var(--font-primary);
  border-radius: $global-border-radius-10;
}
</style>
