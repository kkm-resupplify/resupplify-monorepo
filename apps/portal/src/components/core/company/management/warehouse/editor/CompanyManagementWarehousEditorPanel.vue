<template>
  <company-management-panel class="company-management-warehous-editor-panel">
    <warehouse-editor-form />
  </company-management-panel>
</template>

<script setup lang="ts">
import CompanyManagementPanel from '@/components/core/company/panel/CompanyManagementPanel.vue'
import WarehouseEditorForm from './components/WarehouseEditorForm.vue';
 
</script>

<style lang="scss" scoped>
.company-management-warehous-editor-panel {
  display: flex;
}
</style>
