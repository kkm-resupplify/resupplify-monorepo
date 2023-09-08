<template>
  <div class="product-card-stats">
    <product-card-stat-item icon="beenhere" :value="stats.available" />

    <product-card-stat-item icon="bookmark_added" :value="stats.timesBought" />

    <product-card-stat-item icon="star_half" :value="stats.rating" />
  </div>
</template>

<script setup lang="ts">
// Components
import ProductCardStatItem from '@/components/core/product/card/sections/items/ProductCardStatItem.vue'

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
