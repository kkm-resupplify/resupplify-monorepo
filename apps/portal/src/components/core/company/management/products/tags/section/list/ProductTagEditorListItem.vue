<template>
  <a-list-item-wrapper class="product-list-item">
    <a-list-item-title-section
      :title="$t('company.management.products.tags.listItem.name')"
      :value="tag?.name"
      :basis="20"
    />

    <edit-product-tag-dialog :tag="tag" />
  </a-list-item-wrapper>
</template>
<script setup lang="ts">
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import EditProductTagDialog from '@/components/core/company/management/products/tags/dialog/EditProductTagDialog.vue'
import type { PropType } from 'vue'

defineProps({
  tag: Object as PropType<ProductTag>
})
</script>

<style scoped lang="scss">
.product-list-item {
  justify-content: space-between;
  min-width: 600px;

  &__tags {
    display: flex;
    flex-direction: column;
  }

  &__tags-items {
    display: flex;
    gap: $global-spacing-30;
  }

  &__status-section {
    display: flex;
    gap: $global-spacing-50;
  }
}
</style>
