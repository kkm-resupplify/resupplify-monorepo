<template>
  <a-panel class="warehouse-preview-panel">
    <warehouse-preview-header-section />

    <a-line :height="1" />

    <warehouse-preview-content-section />
  </a-panel>
</template>

<script setup lang="ts">
import WarehousePreviewHeaderSection from '@/components/core/company/management/warehouse/preview/section/header/WarehousePreviewHeaderSection.vue'
import WarehousePreviewContentSection from '@/components/core/company/management/warehouse/preview/section/content/WarehousePreviewContentSection.vue'
</script>

<style lang="scss" scoped>
.warehouse-preview-panel {
  display: flex;
  gap: $global-spacing-40;
  width: 100%;
}
</style>
