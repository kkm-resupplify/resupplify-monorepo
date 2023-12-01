<template>
  <div class="product-tag-list">
    <product-tag-editor-list-item
      v-for="productTag in productTags"
      :key="productTag.id"
      :product-tag="productTag"
    />
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import ProductTagEditorListItem from '@/components/core/company/management/products/tags/section/list/ProductTagEditorListItem.vue'
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'

defineProps({
  productTags: Array as PropType<ProductTag[]>
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
