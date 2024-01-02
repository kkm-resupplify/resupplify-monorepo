<template>
  <div class="product-card-list">
    <m-card-list :card-component="ProductCard" :cards-data="products" />
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { FeaturedProduct } from '@sharedInterfaces/product/ProductInterface'
import MCardList from '@sharedMolecules/cards/MCardList.vue'
import ProductCard from '@/components/core/product/card/ProductCard.vue'

// Props
defineProps({
  products: {
    type: Array as PropType<FeaturedProduct[]>,
    required: true
  }
})
</script>
