<template>
  <div class="cart-company-offers-group">
    <a-title :title="groupData.companyName" /> <a-line />

    <div>company-offer-item-list</div>

    <div>footer</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import type { CartCompanyGroup } from '@sharedInterfaces/cart/CartInterface'

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
}
</style>
