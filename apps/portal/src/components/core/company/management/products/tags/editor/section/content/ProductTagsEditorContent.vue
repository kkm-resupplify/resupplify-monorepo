<template>
  <a-panel-section class="product-tags-editor-header">
    <product-tag-list :tags="tags" />
  </a-panel-section>
</template>
<script setup lang="ts">
import ProductTagList from './list/ProductTagList.vue'

const tags = ['bread', 'water', 'milk', 'apple']
</script>
