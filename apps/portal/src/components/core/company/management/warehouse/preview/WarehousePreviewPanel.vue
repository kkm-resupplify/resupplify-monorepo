<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else class="warehouse-preview-panel">
    <warehouse-preview-header-section
      :products="warehouseProducts"
      :warehouse-name="warehouse?.name"
      @fetch-warehouse="handleFetchWarehouse"
    />

    <a-line :height="2" color="secondary-2" />

    <warehouse-preview-content-section :products="warehouseProducts" />
  </a-panel>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeMount } from 'vue'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'
import WarehousePreviewHeaderSection from '@/components/core/company/management/warehouse/preview/section/header/WarehousePreviewHeaderSection.vue'
import WarehousePreviewContentSection from '@/components/core/company/management/warehouse/preview/section/content/WarehousePreviewContentSection.vue'
import { useRoute } from 'vue-router'
import WarehouseService from '@/services/warehouse/WarehouseService'

// Variables
const isLoading = ref(false)
const route = useRoute()

const warehouse = ref<Warehouse>()

// Computed
const warehouseId = computed(() => route.params.id)
const warehouseProducts = computed(() => (warehouse.value ? warehouse.value.products : []))

// Methods
const handleFetchWarehouse = async () => {
  isLoading.value = true

  const { data, success } = await WarehouseService.getWarehouse(+warehouseId.value)

  if (success) {
    warehouse.value = data
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchWarehouse()
})
</script>

<style lang="scss" scoped>
.warehouse-preview-panel {
  display: flex;
  gap: $global-spacing-40;
  width: 100%;
}
</style>
