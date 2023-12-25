<template>
  <div class="cart-company-offers-group">
    <div>company-name</div>

    <a-line />

    <div>company-offer-item-list</div>

    <div>footer</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

// Interfaces
export interface CartCompanyGroup {
  companyName: string
  cartItems: CartItem[]
}

export interface CartItem {
  offer: Offer
  quantity: number
}

const props = defineProps({
  groupData: {
    type: Object as any
  }
})
</script>

<style lang="scss" scoped>
.cart-company-offers-group {
  display: flex;
  flex-direction: column;
}
</style>
