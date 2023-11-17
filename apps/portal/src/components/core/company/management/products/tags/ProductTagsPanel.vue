<template>
  <a-panel class="warehouse-editor-panel">
    <product-tags-editor-header />

    <product-tags-editor-content />
  </a-panel>
</template>
<script setup lang="ts">
import ProductTagsEditorHeader from './editor/section/header/ProductTagsEditorHeader.vue'
import ProductTagsEditorContent from './editor/section/content/ProductTagsEditorContent.vue'
</script>
