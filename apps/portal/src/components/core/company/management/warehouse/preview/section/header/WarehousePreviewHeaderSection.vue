<template>
  <a-panel-section class="warehouse-preview-header-section">
    <a-title size="x-large" :title="warehouse?.name" />

    <div class="warehouse-preview-header-section__content">
      <warehouse-preview-stats :products="products" />

      <div class="warehouse-preview-header-section__content-settings">
        <add-warehouse-product-dialog @fetch-warehouse="emitFetchWarehouse" />

        <edit-warehouse-dialog :warehouse="warehouse" @fetch-warehouse="emitFetchWarehouse" />

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
import ConfirmWarehouseRemovalDialog from '@/components/core/company/management/warehouse/preview/dialog/ConfirmWarehouseRemovalDialog.vue'
import type { Warehouse } from '@/interface/warehouse/WarehouseInterface'

defineProps({
  warehouse: Object as PropType<Warehouse>,
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
    padding-right: $global-spacing-50;
    padding-bottom: $global-spacing-50;
  }

  &__content-settings {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-40;
  }
}
</style>
