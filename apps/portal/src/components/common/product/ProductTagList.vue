<template>
  <div class="product-tag-list">
    <product-tag-list-item
      v-for="productTag in productTags"
      :key="productTag.id"
      :name="productTag.name"
      :color="productTag.color"
      :show-remove="showRemove"
      @remove="$emit('remove', productTag.id)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import { type PropType } from 'vue'
import ProductTagListItem from '@/components/common/product/ProductTagListItem.vue'

defineProps({
  productTags: {
    type: Array as PropType<ProductTag[]>,
    default: () => []
  },
  showRemove: Boolean
})

// Emits
defineEmits(['remove'])
</script>

<style lang="scss" scoped>
.product-tag-list {
  display: flex;
  gap: $global-spacing-20;
}
</style>
