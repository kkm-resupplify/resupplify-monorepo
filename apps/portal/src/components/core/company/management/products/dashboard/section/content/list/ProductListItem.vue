<template>
  <a-list-item-wrapper class="product-list-item">
    <a-status-indicator :status="productStatus(product)" />

    <a-list-item-title-section :value="product.name" :basis="20" />

    <a-list-item-title-section
      :title="$t('company.management.products.content.category')"
      :value="product.productCategory.name"
      :basis="25"
    />

    <a-list-item-title-section
      :title="$t('company.management.products.content.subcategory')"
      :value="product.productSubcategory.name"
      :basis="25"
    />

    <div class="product-list-item__tags">
      <a-list-item-title-section
        v-if="product.productTags.length"
        :title="$t('company.management.products.content.tags')"
      />

      <product-tag-list :product-tags="product.productTags" />
    </div>

    <a-dropdown>
      <template #activator>
        <div style="display: flex; justify-content: flex-end; min-width: 120px">
          <a-icon icon="more_vert" size="xx-large" hoverable />
        </div>
      </template>

      <template #content>
        <div class="product-list-item__dropdown-item">
          <edit-product-dialog
            :product="product"
            status="active"
            @product-changed="$emit('product-changed')"
          />
        </div>

        <div class="product-list-item__dropdown-item">Delete</div>
      </template>
    </a-dropdown>
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type { PropType } from 'vue'
import EditProductDialog from '../../../dialog/EditProductDialog.vue'
import { useProductStatus } from '@/composable/product/useProductStatus'
import ProductTagList from '@/components/common/product/ProductTagList.vue'
defineProps({
  product: { type: Object as PropType<Product>, required: true }
})

// Emits
defineEmits(['product-changed'])

// Variables
const { productStatus } = useProductStatus()
</script>

<style scoped lang="scss">
.product-list-item {
  justify-content: space-between;

  &__tags {
    display: flex;
    flex-basis: 25%;
    flex-direction: column;
    align-items: center;
  }

  &__status-section {
    display: flex;
    gap: $global-spacing-50;
  }

  &__dropdown-item {
    cursor: pointer;

    display: flex;
    gap: $global-spacing-20;
    align-items: center;
    justify-content: space-between;

    padding: $global-spacing-10 $global-spacing-20;

    font-size: $global-text-medium-font-size;
    color: var(--white);
    text-decoration: none;

    border-radius: $global-border-radius-10;

    &:hover {
      background-color: var(--secondary-2);
    }
  }
}
</style>
