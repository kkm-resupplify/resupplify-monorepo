<template>
  <a-panel-section class="product-tags-editor-header">
    <product-tag-editor-list :product-tags="productTags" />
  </a-panel-section>
</template>
<script setup lang="ts">
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import ProductTagEditorList from '@/components/core/company/management/products/tags/editor/list/ProductTagEditorList.vue'
import { ref } from 'vue'

// Variables
const productTags = ref<ProductTag[]>([])
</script>
