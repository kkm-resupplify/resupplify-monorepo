<template>
  <a-list-item-wrapper class="cart-company-offers-group-offer-list-item">
    <div class="cart-company-offers-group-offer-list-item__header">
      <a-image
        :src="cartItem.offer.product.logoSrc"
        :alt="$t('cart.main.content.groups.list.item.imageAlt')"
        :width="60"
        :height="60"
      />

      <div class="cart-company-offers-group-offer-list-item__header-descriptors">
        <a-title :title="cartItem.offer.product.name" />
      </div>
    </div>

    <div class="cart-company-offers-group-offer-list-item__content"></div>
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { CartItem } from '@sharedInterfaces/cart/CartInterface'

defineProps({
  cartItem: {
    type: Object as PropType<CartItem>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.cart-company-offers-group-offer-list-item {
  &__header {
    display: flex;
    gap: $global-spacing-30;
    align-items: center;
  }

  &__header-descriptors {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-10;
    align-self: flex-start;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-10;
  }
}
</style>
