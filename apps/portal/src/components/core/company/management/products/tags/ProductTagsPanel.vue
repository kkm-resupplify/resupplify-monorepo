<template>
  <a-panel class="warehouse-editor-panel">
    <product-tags-header-section />

    <product-tags-content-section />
  </a-panel>
</template>

<script setup lang="ts">
import ProductTagsContentSection from '@/components/core/company/management/products/tags/section/ProductTagsContentSection.vue'
import ProductTagsHeaderSection from '@/components/core/company/management/products/tags/section/ProductTagsHeaderSection.vue'
</script>
