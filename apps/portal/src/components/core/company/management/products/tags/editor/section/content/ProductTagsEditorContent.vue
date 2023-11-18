<template>
  <a-panel-section class="product-tags-editor-header">
    <product-tag-list :tags="tags" />
  </a-panel-section>
</template>
<script setup lang="ts">
import type { ProductTag } from '@sharedInterfaces/product/ProductInterface'
import ProductTagList from './list/ProductTagList.vue'

const tags: ProductTag[] = [
  { id: 1, name: 'bread', differentLanguageName: 'chleb', color: '#fff' },
  { id: 2, name: 'water', differentLanguageName: 'woda', color: '#fff' },
  { id: 3, name: 'milk', differentLanguageName: 'mleko', color: '#fff' },
  { id: 4, name: 'apple', differentLanguageName: 'jabłko', color: '#fff' }
]
</script>
