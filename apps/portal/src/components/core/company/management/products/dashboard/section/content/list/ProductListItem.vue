<template>
  <a-list-item-wrapper class="product-list-item">
    <a-list-item-title-section :value="product.name" :basis="20" />

    <a-list-item-title-section title="Status" :value="status" :basis="25" />
    <div class="product-list-item__tags">
      <span>Tags:</span>

      <div class="product-list-item__tags-items">
        <a-list-item-title-section v-for="(tag, idx) in tags" :key="idx" :value="tag" :basis="25" />
      </div>
    </div>

    <edit-warehouse-product-dialog
      :warehouse-product="product"
      @product-changed="$emit('product-changed')"
    />
  </a-list-item-wrapper>
</template>
<script setup lang="ts">
import type { Product } from '@/interface/product/ProductInterface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { RouteNames } from '@/routes'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps({
  product: { type: Object as PropType<Product>, required: true }
})

const status = computed(() => 'active')
const tags = computed(() => ['bread', 'water', 'whatever'])

const productLink = computed(() => {
  return {
    name: RouteNames.COMPANY_PRODUCT_PREVIEW,
    params: {
      id: props.product.id
    }
  }
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
}
</style>
