<template>
  <div class="order-item-list">
    <a-list class="order-item-list__items">
      <order-item-list-item
        v-for="(orderItem, idx) in orderItems"
        :key="orderItem.id"
        :order-item="orderItem"
        :style="borderStyle(idx)"
      />
    </a-list>

    <a-line />

    <div class="order-item-list__footer">
      <a-button
        v-if="seller"
        :text="$t('company.management.order.item.setStatus')"
        size="x-large"
      />

      <a-currency
        :title="$t('company.management.order.totalPrice')"
        :value="totalCost"
        value-size="large"
        vertical
        line-height="1"
        align-end
        class="order-item-list__footer-price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { OrderItem } from '@sharedInterfaces/order/OrderInterface'
import OrderItemListItem from '@/components/core/company/management/orders/list/OrderItemListItem.vue'

const props = defineProps({
  orderItems: {
    type: Array as PropType<OrderItem[]>,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

// Computed
const seller = computed(() => {
  return props.type === 'sold'
})

// Methods
const totalCost = computed(() => {
  return props.orderItems.reduce((acc, orderItem) => {
    return acc + orderItem.quantity * orderItem.offer.price
  }, 0)
})

const borderStyle = (idx: number) => {
  return {
    borderBottom: idx === props.orderItems.length - 1 ? 'none' : '1px solid var(--secondary-2)'
  }
}
</script>

<style scoped lang="scss">
.order-item-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;
  width: 100%;

  &__items {
    flex: 1;
    padding-right: 0 !important;
  }

  &__footer {
    display: flex;
    align-items: center;
    padding-right: $global-spacing-40;
  }

  &__footer-price {
    margin-left: auto;
  }
}
</style>
