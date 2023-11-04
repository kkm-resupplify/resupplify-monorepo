<template>
  <div class="warehouse-preview-content-section">
    <a-title title="Warehouse products" size="large" />

    <div class="warehouse-preview-content-section__items">
      <warehouse-product-list />
    </div>
  </div>
</template>

<script setup lang="ts">
import WarehouseProductList from '@/components/core/company/management/warehouse/preview/list/WarehouseProductList.vue'
</script>

<style scoped lang="scss">
.warehouse-preview-content-section {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;

  &__items {
    max-height: 600px;
    padding: $global-spacing-20 $global-spacing-30;
  }
}
</style>
