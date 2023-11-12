<template>
  <a-panel-section class="warehouse-preview-header-section">
    <a-title size="x-large" :title="warehouse?.name" />

    <div class="warehouse-preview-header-section__content">
      <warehouse-preview-stats :products="products" />

      <div class="warehouse-preview-header-section__content-settings">
        <add-warehouse-product-dialog @fetch-warehouse="emitFetchWarehouse" />

        <edit-warehouse-dialog :warehouse="warehouse" @fetch-warehouse="emitFetchWarehouse" />

        <o-confirm-dialog
          type="delete"
          :item-name="warehouse?.name"
          :activator-name="$t('company.management.warehouse.delete.title')"
          @confirmed="handleSubmitRemoveWarehouse"
        />
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import WarehousePreviewStats from '@/components/core/company/management/warehouse/preview/section/header/WarehousePreviewStats.vue'
import AddWarehouseProductDialog from '@/components/core/company/management/warehouse/preview/dialog/AddWarehouseProductDialog.vue'
import type { WarehouseProduct } from '@/interface/warehouse/WarehouseProductInterface'
import EditWarehouseDialog from '@/components/core/company/management/warehouse/preview/dialog/EditWarehouseDialog.vue'
import type { Warehouse } from '@/interface/warehouse/WarehouseInterface'
import WarehouseService from '@/services/warehouse/WarehouseService'
import { useRoute } from 'vue-router'
import router from '@/routes/index'
import { RouteNames } from '@/routes/index'

defineProps({
  warehouse: Object as PropType<Warehouse>,
  products: {
    type: Array as PropType<WarehouseProduct[]>,
    required: true
  }
})

// Variables
const route = useRoute()
const warehouseId = computed(() => +route.params.id)

// Emits
const emits = defineEmits(['fetch-warehouse', 'delete-warehouse'])

// Methods
const emitFetchWarehouse = () => {
  emits('fetch-warehouse')
}

const handleSubmitRemoveWarehouse = async () => {
  const { success } = await WarehouseService.deleteWarehouse(warehouseId.value)

  if (success) {
    await router.push({ name: RouteNames.COMPANY_WAREHOUSE_LIST })
  }
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
