<template>
  <company-management-panel class="company-management-warehouse-dashboard-panel">
    <company-warehouse-header-section />

    <company-warehouse-content-section />
  </company-management-panel>
</template>

<script setup lang="ts">
import CompanyManagementPanel from '@/components/core/company/panel/CompanyManagementPanel.vue'
import CompanyWarehouseHeaderSection from '@/components/core/company/management/warehouse/dashboard/section/header/CompanyWarehouseHeaderSection.vue'
import CompanyWarehouseContentSection from '@/components/core/company/management/warehouse/dashboard/section/content/CompanyWarehouseContentSection.vue'
</script>

<style lang="scss" scoped>
.company-management-warehouse-dashboard-panel {
  display: flex;
}
</style>
