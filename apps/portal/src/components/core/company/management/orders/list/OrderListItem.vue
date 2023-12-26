<template>
  <a-list-item-wrapper class="order-list-item">
    {{ order }}
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { Order } from '@sharedInterfaces/order/OrderInterface'

defineProps({
  order: {
    type: Object as PropType<Order>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.order-list-item {
  display: flex;
}
</style>
