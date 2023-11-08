<template>
  <a-panel-section class="warehouse-preview-header-section">
    <a-title size="x-large" :title="warehouseName" />

    <div class="warehouse-preview-header-section__content">
      <warehouse-preview-stats :products="products" />

      <div class="warehouse-preview-header-section__content-settings">
        <add-warehouse-product-dialog @fetch-warehouse="emitFetchWarehouse" />

        <edit-warehouse-dialog
          :warehouse-name="warehouseName"
          :warehouse-description="warehouseDescription"
        />

        <confirm-warehouse-removal-dialog />
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import WarehousePreviewStats from '@/components/core/company/management/warehouse/preview/section/header/WarehousePreviewStats.vue'
import AddWarehouseProductDialog from '@/components/core/company/management/warehouse/preview/dialog/AddWarehouseProductDialog.vue'
import type { WarehouseProduct } from '@/interface/warehouse/WarehouseProductInterface'
import EditWarehouseDialog from '@/components/core/company/management/warehouse/preview/dialog/EditWarehouseDialog.vue'
import ConfirmWarehouseRemovalDialog from '../../dialog/ConfirmWarehouseRemovalDialog.vue'

defineProps({
  warehouseName: String,
  warehouseDescription: String,
  products: {
    type: Array as PropType<WarehouseProduct[]>,
    required: true
  }
})

// Emits
const emits = defineEmits(['fetch-warehouse'])

// Methods
const emitFetchWarehouse = () => {
  emits('fetch-warehouse')
}
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

  &__content-settings {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;

    white-space: nowrap;
  }
}
</style>
