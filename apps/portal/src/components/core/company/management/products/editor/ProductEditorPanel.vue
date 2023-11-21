<template>
  <a-panel class="warehouse-editor-panel">
    <a-panel-section class="warehouse-editor-panel__main-section">
      <product-editor-form />
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import ProductEditorForm from './form/ProductEditorForm.vue'
</script>

<style lang="scss" scoped>
.warehouse-editor-panel {
  &__main-section {
    width: fit-content;
  }
}
</style>
