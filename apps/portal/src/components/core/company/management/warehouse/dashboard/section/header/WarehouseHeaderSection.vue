<template>
  <div class="warehouse-header-section">
    WarehouseHeaderSection

    <warehouse-needing-attention />

    <warehouse-statistics />
  </div>
</template>

<script setup lang="ts">
import WarehouseNeedingAttention from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseNeedingAttention.vue'
import WarehouseStatistics from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseStatistics.vue'
</script>

<style scoped lang="scss">
.warehouse-header-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;
}
</style>
