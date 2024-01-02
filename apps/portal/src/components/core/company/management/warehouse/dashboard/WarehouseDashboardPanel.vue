<template>
  <a-loader v-if="isLoading" />

  <a-panel v-else class="warehouse-dashboard-panel">
    <warehouse-header-section :warehouses="warehouses" />

    <warehouse-content-section :warehouses="warehouses" @search="handleFetchWarehouses" />
  </a-panel>
</template>

<script setup lang="ts">
import WarehouseHeaderSection from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseHeaderSection.vue'
import WarehouseContentSection from '@/components/core/company/management/warehouse/dashboard/section/content/WarehouseContentSection.vue'
import WarehouseService from '@/services/warehouse/WarehouseService'
import { onBeforeMount, ref } from 'vue'
import type { Warehouse } from '@sharedInterfaces/warehouse/WarehouseInterface'
import { useRoute } from 'vue-router'

// Variables
const warehouses = ref<Warehouse[]>([])
const isLoading = ref(false)
const route = useRoute()

// Methods
const handleFetchWarehouses = async () => {
  isLoading.value = true

  const {
    query: { search }
  } = route

  const { data, success } = await WarehouseService.getWarehouses({ name: search as string })

  if (success) warehouses.value = data

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
