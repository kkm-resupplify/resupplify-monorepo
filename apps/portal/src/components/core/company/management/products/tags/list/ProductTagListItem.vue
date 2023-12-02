<template>
  <a-list-item-wrapper class="product-tag-list-item">
    <a-list-item-title-section
      :title="$t('company.management.products.tags.listItem.name')"
      :value="productTag.name"
      :basis="20"
    />

    <update-product-tag-dialog :product-tag="productTag" />
  </a-list-item-wrapper>
</template>
<script setup lang="ts">
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import UpdateProductTagDialog from '@/components/core/company/management/products/tags/dialog/UpdateProductTagDialog.vue'
import type { PropType } from 'vue'

defineProps({
  productTag: { type: Object as PropType<ProductTag>, required: true }
})
</script>

<style scoped lang="scss">
.product-tag-list-item {
  justify-content: space-between;
  min-width: 600px;
}
</style>
