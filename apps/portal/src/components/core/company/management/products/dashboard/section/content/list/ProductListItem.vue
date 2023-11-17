<template>
  <a-list-item-wrapper class="product-list-item">
    <a-status-indicator :status="productStatus(product)" />
    
    <a-list-item-title-section :value="product.name" :basis="20" />

    <div class="product-list-item__tags">
      <a-list-item-title-section
        :title="$t('company.management.navigation.products.preview.content.tags')"
        :basis="25"
      />

      <div class="product-list-item__tags-items">
        <a-list-item-title-section v-for="(tag, idx) in tags" :key="idx" :value="tag" :basis="25" />
      </div>
    </div>

    <edit-product-dialog :product="product" status="active" />
  </a-list-item-wrapper>
</template>
<script setup lang="ts">
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import EditProductDialog from '@/components/core/company/management/products/preview/dialog/EditProductDialog.vue'
import { useProductStatus } from '@/composable/product/useProductStatus'

defineProps({
  product: { type: Object as PropType<Product>, required: true }
})

// Variables
const { productStatus } = useProductStatus()
const tags = computed(() => ['bread', 'water', 'whatever'])
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
