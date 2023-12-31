<template>
  <a-list>
    <order-list-item
      v-for="order in orders"
      :key="order.id"
      :order="order"
      :type="type"
      @fetch-orders="handleFetchOrders"
    />
  </a-list>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { Order } from '@sharedInterfaces/order/OrderInterface'
import OrderListItem from '@/components/core/company/management/orders/list/OrderListItem.vue'

// Emits
const emits = defineEmits(['fetch-orders'])

defineProps({
  orders: {
    type: Array as PropType<Order[]>,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

// Methods
const handleFetchOrders = () => {
  emits('fetch-orders')
}
</script>
