<template>
  <div class="product-tag-list">
    <product-tag-list-item
      v-for="productTag in productTags"
      :key="productTag.id"
      :product-tag="productTag"
      @fetch-product-tags="$emit('fetch-product-tags')"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import ProductTagListItem from '@/components/core/company/management/products/tags/list/ProductTagListItem.vue'
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'

defineProps({
  productTags: { type: Array as PropType<ProductTag[]>, default: () => [] }
})

// Emits
const emits = defineEmits(['fetch-product-tags'])
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
