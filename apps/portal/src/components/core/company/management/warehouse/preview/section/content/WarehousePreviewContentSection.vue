<template>
  <div class="warehouse-preview-content-section">
    <a-title title="Warehouse products" size="large" />

    <warehouse-product-list />
  </div>
</template>

<script setup lang="ts">
import WarehouseProductList from '@/components/core/company/management/warehouse/preview/list/WarehouseProductList.vue'
</script>

<style scoped lang="scss">
.warehouse-preview-content-section {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;

  height: 100%;
}
</style>
