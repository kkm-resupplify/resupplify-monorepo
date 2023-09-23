<template>
  <div class="bestsellers-section">
    <a-header
      :title="$t('product.promotion.bestsellers')"
      :subtitle="$t('product.promotion.topSellingProducts')"
    />

    <product-card-list :products="products" />
  </div>
</template>

<script setup lang="ts">
// Components
import AHeader from '@sharedAtoms/header/AHeader.vue'
import ProductCardList from '@/components/core/product/card/ProductCardList.vue'

// Mock data
const products = [
  {
    productName: 'El Produkto',
    shortDescription:
      'Item description is something like that. Very important item for many applications.',
    price: {
      total: 50.49,
      currencyCode: 'PLN'
    },
    stats: {
      available: 5212,
      timesBought: 41209,
      rating: 9.9
    },
    unit: {
      name: 'kg',
      code: 'WEIGHT_KG'
    },
    link: '',
    company: 'KKM Marketify'
  }
]
</script>

<style scoped lang="scss">
.bestsellers-section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $global-spacing-30;
  align-self: stretch;

  padding: $global-spacing-30 $global-spacing-40;

  background-color: var(--secondary-1);
  border-radius: $global-border-radius-20;
}
</style>
