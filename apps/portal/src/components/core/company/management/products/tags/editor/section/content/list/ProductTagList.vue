<template>
  <div class="product-tag-list">
    <product-tag-list-item v-for="(tag, idx) in tags" :key="idx" :name="tag" />
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import ProductTagListItem from './ProductTagListItem.vue'

defineProps({
  tags: Array as PropType<string[]>
})
</script>
<style scoped lang="scss">
.product-tag-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-30;
}
</style>
