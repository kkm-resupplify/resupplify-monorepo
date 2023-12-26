<template>
  <div class="cart-company-offers-group">
    <a-title :title="groupData.companyName" />

    <a-line />

    <cart-company-offers-group-offer-list :cart-items="groupData.cartItems" />

    <div class="cart-company-offers-group__footer">
      <a-button :text="$t('cart.main.content.groups.footer.placeOrder')" />

      <a-currency
        :title="$t('cart.main.content.groups.footer.totalCost')"
        :value="totalCost"
        vertical
        align-end
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { CartCompanyGroup } from '@sharedInterfaces/cart/CartInterface'
import CartCompanyOffersGroupOfferList from '@/components/core/cart/group/list/CartCompanyOffersGroupOfferList.vue'

const props = defineProps({
  groupData: {
    type: Object as PropType<CartCompanyGroup>,
    required: true
  }
})

// Computed
const totalCost = computed(() => {
  return props.groupData.cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.offer.price * cartItem.quantity
  }, 0)
})
</script>

<style lang="scss" scoped>
.cart-company-offers-group {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;

  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
