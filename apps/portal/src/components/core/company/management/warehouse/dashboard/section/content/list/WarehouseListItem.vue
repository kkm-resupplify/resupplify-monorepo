<template>
  <m-tile :to="warehouseLink">
    <div class="warehouse-list-item__header">
      <a-status-indicator :status="warehouseStatus(warehouse)" />
    </div>

    <div class="warehouse-list-item__content" v-text="warehouse.name" />
  </m-tile>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { RouteNames } from '@/routes/index'
import { useWarehouseStatus } from '@/composable/warehouse/useWarehouseStatus'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'

const props = defineProps({
  warehouse: { type: Object as PropType<Warehouse>, required: true }
})

// Variable
const { warehouseStatus } = useWarehouseStatus()

// Computed
const warehouseLink = computed(() => {
  return {
    name: RouteNames.COMPANY_WAREHOUSE_PREVIEW,
    params: {
      id: props.warehouse.id
    }
  }
})
</script>

<style scoped lang="scss">
.warehouse-list-item {
  &__header {
    display: flex;
    align-self: flex-end;
  }

  &__content {
    display: flex;
    flex: 1;
    align-items: center;
  }
}
</style>
