<template>
  <a-panel class="warehouse-editor-panel">
    <a-panel-section class="warehouse-editor-panel__main-section">
      <product-editor-stepper />
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import ProductEditorStepper from '@/components/core/company/management/products/editor/ProductEditorStepper.vue'
</script>

<style lang="scss" scoped>
.warehouse-editor-panel {
  &__main-section {
    width: 100%;
  }

  :deep(.a-panel-section) {
    height: 100%;
  }
}
</style>
