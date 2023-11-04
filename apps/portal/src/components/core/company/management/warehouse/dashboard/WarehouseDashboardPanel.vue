<template>
  <company-management-panel class="warehouse-dashboard-panel">
    <warehouse-header-section />

    <warehouse-content-section />
  </company-management-panel>
</template>

<script setup lang="ts">
import CompanyManagementPanel from '@/components/core/company/panel/CompanyManagementPanel.vue'
import WarehouseHeaderSection from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseHeaderSection.vue'
import WarehouseContentSection from '@/components/core/company/management/warehouse/dashboard/section/content/WarehouseContentSection.vue'
</script>

<style lang="scss" scoped>
.warehouse-dashboard-panel {
  display: flex;
}
</style>
