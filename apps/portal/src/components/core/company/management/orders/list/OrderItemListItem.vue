<template>
  <div>{{ orderItem }}</div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { OrderItem } from '@sharedInterfaces/order/OrderInterface'

defineProps({
  orderItem: {
    type: Object as PropType<OrderItem>,
    required: true
  }
})
</script>
