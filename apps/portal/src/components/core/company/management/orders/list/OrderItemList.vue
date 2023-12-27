<template>
  <a-list class="order-item-list">
    <order-item-list-item
      v-for="(orderItem, idx) in orderItems"
      :key="orderItem.id"
      :order-item="orderItem"
      :style="borderStyle(idx)"
    />
  </a-list>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { OrderItem } from '@sharedInterfaces/order/OrderInterface'
import OrderItemListItem from '@/components/core/company/management/orders/list/OrderItemListItem.vue'

const props = defineProps({
  orderItems: {
    type: Array as PropType<OrderItem[]>,
    required: true
  }
})

// Methods
const borderStyle = (idx: number) => {
  return {
    borderBottom: idx === props.orderItems.length - 1 ? 'none' : '2px solid var(--secondary-2)'
  }
}
</script>

<style scoped lang="scss">
.order-item-list {
  flex: 1;
}
</style>
