<template>
  <a-panel-section class="warehouse-content-section">
    <a-title
      :title="$t('company.management.warehouse.preview.content.companyWarehouses')"
      size="large"
    />

    <warehouse-list :warehouses="warehouses" @search="$emit('search')" />
  </a-panel-section>
</template>

<script setup lang="ts">
import WarehouseList from '@/components/core/company/management/warehouse/dashboard/section/content/list/WarehouseList.vue'
import type { PropType } from 'vue'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'

defineProps({
  warehouses: {
    type: Array as PropType<Warehouse[]>
  }
})

// Emits
defineEmits(['search'])
</script>

<style scoped lang="scss">
.warehouse-content-section {
  overflow: hidden;
}
</style>
