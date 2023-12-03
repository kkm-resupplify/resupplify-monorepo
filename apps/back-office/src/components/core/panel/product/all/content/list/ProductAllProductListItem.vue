<template>
  <a-expansion-panel>
    <template #activator>
      <a-list-item-wrapper class="product-all-product-list-item">
        <a-status-indicator :status="product.verificationStatus" />

        <a-list-item-title-section :title="$t('product.data.name')" :value="product.name" />

        <a-list-item-title-section :title="$t('product.data.code')" :value="product.code" />

        <a-list-item-title-section
          :title="$t('product.data.category')"
          :value="product.productCategory.name"
        />

        <a-list-item-title-section
          :title="$t('product.data.subcategory')"
          :value="product.productSubcategory.name"
        />
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="product-all-product-list-item__content">
        <a-title
          v-for="(productDetail, idx) in productDetailsContent"
          :key="idx"
          :title="productDetail.title"
          :subtitle="productDetail.value"
          append-colon
        />
      </div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { type PropType, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

// Variables
const { t } = useI18n()

// Computed
const productDetailsContent = computed(() => {
  return [
    { title: t('product.data.description'), value: props.product.description },
    { title: t('product.data.unit'), value: props.product.productUnit.code }
  ]
})
</script>

<style lang="scss" scoped>
.product-all-product-list-item {
  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }
}
</style>
