<template>
  <div>
    CompanyWarehouseHeaderSection

    <company-warehouse-needing-attention />

    <company-warehouse-statistics />
  </div>
</template>

<script setup lang="ts">
import CompanyWarehouseNeedingAttention from '@/components/core/company/management/warehouse/dashboard/section/header/CompanyWarehouseNeedingAttention.vue'
import CompanyWarehouseStatistics from '@/components/core/company/management/warehouse/dashboard/section/header/CompanyWarehouseStatistics.vue'
</script>

<style scoped lang="scss"></style>
