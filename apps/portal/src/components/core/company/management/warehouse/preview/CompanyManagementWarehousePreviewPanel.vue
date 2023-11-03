<template>
  <company-management-panel class="company-management-warehouse-preview-panel">
    <company-management-warehouse-preview-header-section />

    <a-line :height="1" />

    <company-management-warehouse-preview-content-section />
  </company-management-panel>
</template>

<script setup lang="ts">
import CompanyManagementPanel from '@/components/core/company/panel/CompanyManagementPanel.vue'
import CompanyManagementWarehousePreviewHeaderSection from '@/components/core/company/management/warehouse/preview/CompanyManagementWarehousePreviewHeaderSection.vue'
import CompanyManagementWarehousePreviewContentSection from '@/components/core/company/management/warehouse/preview/CompanyManagementWarehousePreviewContentSection.vue'
</script>

<style lang="scss" scoped>
.company-management-warehouse-preview-panel {
  display: flex;
  gap: $global-spacing-40;
  width: 100%;
}
</style>
