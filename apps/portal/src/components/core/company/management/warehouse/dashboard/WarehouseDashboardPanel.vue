<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else class="warehouse-dashboard-panel">
    <warehouse-header-section :warehouses="warehouses" />

    <warehouse-content-section :warehouses="warehouses" />
  </a-panel>
</template>

<script setup lang="ts">
import WarehouseHeaderSection from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseHeaderSection.vue'
import WarehouseContentSection from '@/components/core/company/management/warehouse/dashboard/section/content/WarehouseContentSection.vue'
import WarehouseService from '@/services/warehouse/WarehouseService'
import { onBeforeMount, reactive, ref } from 'vue'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'

// Variables
const warehouses = reactive<Warehouse[]>([])
const isLoading = ref(false)

// Methods
const handleFetchWarehouses = async () => {
  isLoading.value = true

  const { data, success } = await WarehouseService.getWarehouses()

  if (success) warehouses.push(...(data as Warehouse[]))

  isLoading.value = false
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
