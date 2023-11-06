<template>
  <div class="warehouse-content-section">
    <a-title
      :title="$t('company.management.navigation.warehouses.companyWarehouses')"
      size="large"
    />

    <warehouse-list :warehouses="warehouses" />
  </div>
</template>

<script setup lang="ts">
import WarehouseList from '@/components/core/company/management/warehouse/dashboard/section/content/list/WarehouseList.vue'
import type { PropType } from 'vue'
import type { Warehouse } from '@/interfaces/warehouse/WarehouseInterface'

defineProps({
  warehouses: {
    type: Array as PropType<Warehouse[]>
  }
})
</script>

<style lang="scss" scoped>
.warehouse-content-section {
  @include default-border-1;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-20 $global-spacing-30;

  background-color: var(--secondary-1);
}
</style>
