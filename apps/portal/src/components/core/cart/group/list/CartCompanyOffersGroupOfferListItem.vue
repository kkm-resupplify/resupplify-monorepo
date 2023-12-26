<template>
  <a-list-item-wrapper class="cart-company-offers-group-offer-list-item">
    <div class="cart-company-offers-group-offer-list-item__header">
      <a-image
        :src="cartItem.offer.product.logoSrc"
        :alt="$t('cart.main.content.groups.list.item.imageAlt')"
        :width="60"
        :height="60"
        variant="rounded-sm"
      />

      <div class="cart-company-offers-group-offer-list-item__header-descriptors">
        <a-title :title="cartItem.offer.product.name" line-height="1" />

        <product-tag-list :product-tags="cartItem.offer.product.productTags" font-size="10px" />
      </div>
    </div>

    <div class="cart-company-offers-group-offer-list-item__content">
      <a-currency
        title-size="x-normal"
        :value="pricePerUnit"
        :title="$t('global.pricePerUnit')"
        vertical
      />

      <div class="cart-company-offers-group-offer-list-item__content-section">
        <a-title size="x-normal" :title="$t('cart.main.content.groups.list.item.quantity')" />

        <m-text-field
          name="quantity"
          :validate="false"
          input-type="number"
          width="60px"
          size="small"
          text-center
          :value="quanity"
          :min-value="1"
          :max-value="cartItem.offer.productQuantity"
          @input-change="handleQuantityChange"
        />
      </div>

      <a-currency
        title-size="x-normal"
        :title="$t('cart.main.content.groups.list.item.totalPrice')"
        :value="totalPrice"
        vertical
      />

      <m-icon
        class="cart-company-offers-group-offer-list-item__remove-icon"
        color="danger"
        icon="close"
        size="x-large"
        hoverable
        @click="handleRemoveCartItem"
      />
    </div>
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { CartItem } from '@sharedInterfaces/cart/CartInterface'
import ProductTagList from '@/components/common/product/ProductTagList.vue'
import { useUserCartStore } from '@stores/user/useUserCartStore'

const props = defineProps({
  cartItem: {
    type: Object as PropType<CartItem>,
    required: true
  }
})

// Variables
const userCartStore = useUserCartStore()

// Computed
const pricePerUnit = computed(() => {
  return props.cartItem.offer.price
})

const totalPrice = computed(() => {
  return props.cartItem.offer.price * props.cartItem.quantity
})

const quanity = computed(() => {
  return props.cartItem.quantity
})

const offerId = computed(() => {
  return props.cartItem.offer.id
})

// Methods
const handleQuantityChange = (newQuantity: number) => {
  userCartStore.updateCartItemQuantity(offerId.value, newQuantity)
}

const handleRemoveCartItem = () => {
  userCartStore.removeCartItem(offerId.value)
}
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
    gap: $global-spacing-50;
  }

  &__content-section {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__remove-icon {
    align-self: center;
  }
}
</style>
