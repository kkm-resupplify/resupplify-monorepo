<template>
  <a-panel-section>
    WarehouseHeaderSection

    <warehouse-needing-attention />

    <warehouse-statistics />
  </a-panel-section>
</template>

<script setup lang="ts">
import WarehouseNeedingAttention from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseNeedingAttention.vue'
import WarehouseStatistics from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseStatistics.vue'
</script>

<style scoped lang="scss"></style>
