<template>
  <div class="product-card-list">
    <m-card-list :cardComponent="ProductCard" :cards-data="products" />
  </div>
</template>

<script setup lang="ts">
// Components
import MCardList from '@sharedMolecules/cards/MCardList.vue'
import ProductCard from '@/components/core/product/card/ProductCard.vue'

// Props
defineProps({
  products: {
    type: Array<object>,
    required: true
  }
})
</script>
