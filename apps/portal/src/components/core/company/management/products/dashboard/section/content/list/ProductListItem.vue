<template>
  <a-list-item-wrapper class="product-list-item">
    <a-list-item-title-section :value="product.name" :basis="20" />

    <a-list-item-title-section
      :title="$t('company.management.navigation.products.preview.content.status')"
      :value="status"
      :basis="25"
    />
    <div class="product-list-item__tags">
      <a-title :title="$t('company.management.navigation.products.preview.content.tags')" />

      <div class="product-list-item__tags-items">
        <a-list-item-title-section v-for="(tag, idx) in tags" :key="idx" :value="tag" :basis="25" />
      </div>
    </div>

    <edit-product-dialog :product="product" />
  </a-list-item-wrapper>
</template>
<script setup lang="ts">
import type { Product } from '@/interface/product/ProductInterface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import EditProductDialog from '@/components/core/company/management/products/preview/dialog/EditProductDialog.vue'

defineProps({
  product: { type: Object as PropType<Product>, required: true }
})

const status = computed(() => 'active')
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
}
</style>
