<template>
  <a-list class="cart-company-offers-group-offer-list">
    <cart-company-offers-group-offer-list-item
      v-for="cartItem in cartItems"
      :key="cartItem.offer.id"
      :cart-item="cartItem"
    />
  </a-list>
</template>

<script setup lang="ts">
import CartCompanyOffersGroupOfferListItem from '@/components/core/cart/group/list/CartCompanyOffersGroupOfferListItem.vue'
import { type PropType } from 'vue'
import type { CartItem } from '@sharedInterfaces/cart/CartInterface'

defineProps({
  cartItems: {
    type: Array as PropType<CartItem[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.cart-company-offers-group-offer-list {
  padding-right: 0 !important;
}
</style>
