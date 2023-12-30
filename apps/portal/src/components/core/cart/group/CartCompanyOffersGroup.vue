<template>
  <div class="cart-company-offers-group">
    <a-title :title="groupData.companyName" />

    <a-line />

    <cart-company-offers-group-offer-list :cart-items="groupData.cartItems" />

    <div class="cart-company-offers-group__footer">
      <a-button
        :text="$t('cart.main.content.groups.footer.placeOrder')"
        @click="handlePlaceOrder"
      />

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
import { ref, computed, type PropType } from 'vue'
import type { CartCompanyGroup } from '@sharedInterfaces/cart/CartInterface'
import CartCompanyOffersGroupOfferList from '@/components/core/cart/group/list/CartCompanyOffersGroupOfferList.vue'
import OrderService from '@/services/order/OrderService'
import { useUserCartStore } from '@stores/user/useUserCartStore'

const props = defineProps({
  groupData: {
    type: Object as PropType<CartCompanyGroup>,
    required: true
  }
})

// Variables
const isLoading = ref(false)
const userCartStore = useUserCartStore()

// Computed
const totalCost = computed(() => {
  return props.groupData.cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.offer.price * cartItem.quantity
  }, 0)
})

const groupOrderItems = computed(() => {
  return props.groupData.cartItems.map((cartItem) => ({
    offerId: cartItem.offer.id,
    orderQuantity: cartItem.quantity
  }))
})

// Methods
const handlePlaceOrder = async () => {
  isLoading.value = true

  const { success } = await OrderService.placeOrder(groupOrderItems.value)

  if (success) {
    userCartStore.removeCompanyGroup(props.groupData.companyName)
  }

  isLoading.value = false
}
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
