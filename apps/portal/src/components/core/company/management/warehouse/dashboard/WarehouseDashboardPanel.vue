<template>
  <a-panel class="warehouse-dashboard-panel">
    <warehouse-header-section />

    <warehouse-content-section :warehouses="warehouses" />
  </a-panel>
</template>

<script setup lang="ts">
import WarehouseHeaderSection from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseHeaderSection.vue'
import WarehouseContentSection from '@/components/core/company/management/warehouse/dashboard/section/content/WarehouseContentSection.vue'
import WarehouseService from '@/services/warehouse/WarehouseService'
import { onBeforeMount, reactive } from 'vue'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'

// Variables
const warehouses = reactive<Warehouse[]>([])

// Methods
const handleFetchWarehouses = async () => {
  const { data, success } = await WarehouseService.getWarehouses()

  if (success) warehouses.push(...(data as Warehouse[]))
}

// Hooks
onBeforeMount(async () => {
  await handleFetchWarehouses()
})
</script>

<style lang="scss" scoped>
.warehouse-dashboard-panel {
  width: 100%;
  height: 100%;
}
</style>
