<template>
  <a-panel class="warehouse-editor-panel">
    <product-tags-editor-header />

    <product-tags-editor-content />
  </a-panel>
</template>
<script setup lang="ts">
import ProductTagsEditorContent from '@/components/core/company/management/products/tags/editor/ProductTagsEditorContent.vue'
import ProductTagsEditorHeader from '@/components/core/company/management/products/tags/editor/ProductTagsEditorHeader.vue'
</script>
