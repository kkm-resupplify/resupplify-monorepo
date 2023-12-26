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
        <a-title :title="cartItem.offer.product.name" line-height="1" />

        <product-tag-list :product-tags="cartItem.offer.product.productTags" font-size="10px" />
      </div>
    </div>

    <div class="cart-company-offers-group-offer-list-item__content">
      <a-currency :value="pricePerUnit" :title="$t('global.pricePerUnit')" vertical />
    </div>
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { CartItem } from '@sharedInterfaces/cart/CartInterface'
import ProductTagList from '@/components/common/product/ProductTagList.vue'

const props = defineProps({
  cartItem: {
    type: Object as PropType<CartItem>,
    required: true
  }
})

// Computed
const pricePerUnit = computed(() => {
  return props.cartItem.offer.price
})
</script>

<style lang="scss" scoped>
.cart-company-offers-group-offer-list-item {
  &__header {
    display: flex;
    flex: 1;
    gap: $global-spacing-30;
    align-items: center;

    height: 100%;
  }

  &__header-descriptors {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
    align-self: flex-start;
    justify-content: space-between;

    height: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-10;
  }
}
</style>
