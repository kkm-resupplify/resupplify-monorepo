<template>
  <a-title :title="$t('company.management.warehouse.needingAttention.title')" size="x-large" />

  <div v-if="warehouseNeedingAttentionListItems.length" class="warehouse-needing-attention-list">
    <warehouse-needing-attention-list-item
      v-for="(warehouse, idx) in warehouseNeedingAttentionListItems"
      :key="idx"
      :warehouse="warehouse"
    />
  </div>

  <a-list-no-results v-else :text="$t('company.management.warehouse.needingAttention.noResults')" />
</template>

<script setup lang="ts">
import WarehouseNeedingAttentionListItem from '@/components/core/company/management/warehouse/dashboard/section/header/list/WarehouseNeedingAttentionListItem.vue'
import { computed, type PropType } from 'vue'

import { useWarehouseStatus } from '@/composable/warehouse/useWarehouseStatus'
import type { Warehouse } from '@sharedInterfaces/warehouse/WarehouseInterface'
import WarehouseStatusEnum from '@sharedEnums/warehouse/WarehouseStatusEnum'

const props = defineProps({
  warehouses: { type: Object as PropType<Warehouse[]>, required: true }
})

// Variables
const { warehouseStatus } = useWarehouseStatus()

// Computed
const warehouseNeedingAttentionListItems = computed(() => {
  const warehouses2 = props.warehouses.filter((warehouse) => {
    const status = warehouseStatus(warehouse)
    if (
      status === WarehouseStatusEnum.PRODUCTS_BELOW_SAFE_QUANTITY ||
      status === WarehouseStatusEnum.PRODUCTS_OUT_OF_STOCK
    ) {
      return true
    }
  })

  return warehouses2
})
</script>

<style scoped lang="scss">
.warehouse-needing-attention-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  width: 50%;
  max-height: 280px;
  padding: $global-spacing-30;
}
</style>
