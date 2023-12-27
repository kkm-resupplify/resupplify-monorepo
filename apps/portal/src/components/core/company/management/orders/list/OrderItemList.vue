<template>
  <a-list>
    <order-item-list-item
      v-for="orderItem in orderItems"
      :key="orderItem.id"
      :order-item="orderItem"
    />
  </a-list>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { OrderItem } from '@sharedInterfaces/order/OrderInterface'
import OrderItemListItem from '@/components/core/company/management/orders/list/OrderItemListItem.vue'

defineProps({
  orderItems: {
    type: Array as PropType<OrderItem[]>,
    required: true
  }
})
</script>
