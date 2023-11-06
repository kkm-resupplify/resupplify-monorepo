<template>
  <a-panel class="warehouse-editor-panel">
    <warehouse-editor-form />
  </a-panel>
</template>

<script setup lang="ts">
import WarehouseEditorForm from '@/components/core/company/management/warehouse/editor/form/WarehouseEditorForm.vue'
</script>

<style lang="scss" scoped>
.warehouse-editor-panel {
  display: flex;
}
</style>
