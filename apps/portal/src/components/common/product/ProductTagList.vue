<template>
  <div class="product-tag-list">
    <product-tag
      v-for="productTag in productTags"
      :key="productTag.id"
      :product-tag="productTag"
      :show-remove="showRemove"
      :font-size="fontSize"
      @remove="$emit('remove', productTag.id)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProductTag as ProductTagInterface } from '@sharedInterfaces/product/ProductTagInterface'
import { type PropType } from 'vue'
import ProductTag from '@/components/common/product/ProductTag.vue'

defineProps({
  productTags: {
    type: Array as PropType<ProductTagInterface[]>,
    default: () => []
  },
  showRemove: Boolean,
  fontSize: String
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
