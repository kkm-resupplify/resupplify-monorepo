<template>
  <company-management-panel class="warehouse-preview-panel">
    <warehouse-preview-header-section />

    <a-line :height="1" />

    <warehouse-preview-content-section />
  </company-management-panel>
</template>

<script setup lang="ts">
import CompanyManagementPanel from '@/components/core/company/panel/CompanyManagementPanel.vue'
import WarehousePreviewHeaderSection from '@/components/core/company/management/warehouse/preview/WarehousePreviewHeaderSection.vue'
import WarehousePreviewContentSection from '@/components/core/company/management/warehouse/preview/WarehousePreviewContentSection.vue'
</script>

<style lang="scss" scoped>
.warehouse-preview-panel {
  display: flex;
  gap: $global-spacing-40;
  width: 100%;
}
</style>
