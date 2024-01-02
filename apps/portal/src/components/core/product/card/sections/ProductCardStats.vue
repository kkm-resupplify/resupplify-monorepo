<template>
  <div class="product-card-stats">
    <product-card-stat-item icon="category" :value="stats.available" />

    <product-card-stat-item icon="shopping_cart" :value="stats.soldQuantity" />
  </div>
</template>

<script setup lang="ts">
// Components
import ProductCardStatItem from '@/components/core/product/card/sections/items/ProductCardStatItem.vue'

// Props
defineProps({
  stats: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.product-card-stats {
  display: flex;
  gap: $global-spacing-40;
  padding: $global-spacing-20;
  background: rgb(118 161 241 / 40%);
}
</style>
