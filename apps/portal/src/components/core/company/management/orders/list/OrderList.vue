<template>
  <a-list>
    <order-list-item v-for="order in orders" :key="order.id" :order="order" :type="type" />
  </a-list>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { Order } from '@sharedInterfaces/order/OrderInterface'
import OrderListItem from '@/components/core/company/management/orders/list/OrderListItem.vue'

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
</script>
