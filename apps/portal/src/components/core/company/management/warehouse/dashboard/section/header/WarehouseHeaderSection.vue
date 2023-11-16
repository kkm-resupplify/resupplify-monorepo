<template>
  <a-panel-section>
    <warehouseneeding-attention-list :warehouses="warehouses" />
  </a-panel-section>
</template>

<script setup lang="ts">
import WarehouseneedingAttentionList from '@/components/core/company/management/warehouse/dashboard/section/header/list/WarehouseNeedingAttentionList.vue'
import type { Warehouse } from '@sharedInterfaces/warehouse/WarehouseInterface'
import { type PropType } from 'vue'

defineProps({
  warehouses: {
    type: Array as PropType<Warehouse[]>,
    required: true
  }
})
</script>
