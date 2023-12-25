<template>
  <div class="cart-company-offers-group">
    <a-title :title="groupData.companyName" />

    <a-line />

    <cart-company-offers-group-offer-list :cart-items="groupData.cartItems" />

    <div>footer</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import type { CartCompanyGroup } from '@sharedInterfaces/cart/CartInterface'
import CartCompanyOffersGroupOfferList from '@/components/core/cart/group/list/CartCompanyOffersGroupOfferList.vue'

const props = defineProps({
  groupData: {
    type: Object as PropType<CartCompanyGroup>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.cart-company-offers-group {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;
}
</style>
