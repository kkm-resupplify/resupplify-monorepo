<template>
  <a-panel-section>
    <a-title
      :title="$t('company.management.warehouse.preview.content.companyWarehouses')"
      size="large"
    />

    <warehouse-list :warehouses="warehouses" />
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
</script>
