<template>
  <a-panel-section class="warehouse-preview-header-section">
    <a-title size="x-large" :title="warehouseName" />

    <div class="warehouse-preview-header-section__content">
      <warehouse-preview-stats :products="products" />

      <div class="warehouse-preview-header-section__content-settings">
        <add-warehouse-product-dialog />

        <edit-warehouse-dialog
          :warehouse-name="warehouse.title"
          :warehouse-description="warehouse.description"
        />
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import WarehousePreviewStats from '@/components/core/company/management/warehouse/preview/section/header/WarehousePreviewStats.vue'
import AddWarehouseProductDialog from '@/components/core/company/management/warehouse/preview/dialog/AddWarehouseProductDialog.vue'
import type { WarehouseProduct } from '@/interface/warehouse/WarehouseProductInterface'

defineProps({
  warehouseName: String,
  products: {
    type: Array as PropType<WarehouseProduct[]>,
    required: true
  }
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
