<template>
  <div class="warehouse-preview-header-section">
    <a-title size="x-large" :title="warehouse.title" />

    <div class="warehouse-preview-header-section__content">
      <warehouse-preview-stats />

      <add-warehouse-product-dialog />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import WarehousePreviewStats from '@/components/core/company/management/warehouse/preview/section/header/WarehousePreviewStats.vue'
import AddWarehouseProductDialog from '@/components/core/company/management/warehouse/preview/dialog/AddWarehouseProductDialog.vue'

const warehouse = reactive({
  title: 'Bread Warehouse'
})
</script>

<style scoped lang="scss">
.warehouse-preview-header-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;

  &__content {
    display: flex;
    align-items: flex-start;
  }
}
</style>
