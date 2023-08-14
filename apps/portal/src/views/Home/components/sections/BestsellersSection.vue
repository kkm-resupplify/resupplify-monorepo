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

const products = {}
</script>

<style scoped lang="scss">
.bestsellers-section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $global-spacing-30;
  align-self: stretch;

  padding: $global-spacing-30 $global-spacing-40;

  background-color: $global-colors-white;
}
</style>
