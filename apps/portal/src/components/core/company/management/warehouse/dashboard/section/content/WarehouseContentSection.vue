<template>
  <a-panel-section class="warehouse-content-section">
    <a-title
      :title="$t('company.management.warehouse.preview.content.companyWarehouses')"
      size="large"
    />

    <m-skeleton
      v-if="isLoading"
      :rows="1"
      :repetitions="7"
      skeleton-height="180px"
      skeleton-width="200px"
      class="warehouse-content-section__skeleton"
    />

    <warehouse-list v-else :warehouses="warehouses" @search="$emit('search')" />
  </a-panel-section>
</template>

<script setup lang="ts">
import WarehouseList from '@/components/core/company/management/warehouse/dashboard/section/content/list/WarehouseList.vue'
import type { PropType } from 'vue'
import type { Warehouse } from '@sharedInterfaces/warehouse/WarehouseInterface'

defineProps({
  warehouses: {
    type: Array as PropType<Warehouse[]>
  },
  isLoading: Boolean
})

// Emits
defineEmits(['search'])
</script>

<style scoped lang="scss">
.warehouse-content-section {
  overflow-y: auto;

  &__skeleton {
    :deep(.m-skeleton__row) {
      flex-direction: row;
    }
  }
}
</style>
