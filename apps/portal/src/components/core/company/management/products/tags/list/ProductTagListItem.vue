<template>
  <a-list-item-wrapper class="product-tag-list-item">
    <a-list-item-title-section
      :title="$t('company.management.products.tags.list.itemName')"
      :value="productTag.name"
    />

    <a-list-item-title-section
      :title="$t('company.management.products.tags.list.colorValue')"
      :value="productTag.color"
    />

    <div class="product-tag-list-item__preview">
      <a-title :title="$t('global.preview')" />

      <product-tag :product-tag="productTag" />
    </div>

    <update-product-tag-dialog
      :product-tag="productTag"
      @fetch-product-tags="$emit('fetch-product-tags')"
    />
  </a-list-item-wrapper>
</template>
<script setup lang="ts">
import type { ProductTag as ProductTagInterface } from '@sharedInterfaces/product/ProductTagInterface'
import UpdateProductTagDialog from '@/components/core/company/management/products/tags/dialog/UpdateProductTagDialog.vue'
import ProductTag from '@/components/common/product/ProductTag.vue'
import type { PropType } from 'vue'

defineProps({
  productTag: { type: Object as PropType<ProductTagInterface>, required: true }
})

// Emits
defineEmits(['fetch-product-tags'])
</script>

<style scoped lang="scss">
.product-tag-list-item {
  justify-content: space-between;
  min-width: 600px;

  &__preview {
    display: flex;
    flex-basis: 20%;
    flex-direction: column;
    align-items: center;
  }
}
</style>
