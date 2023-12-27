<template>
  <a-list-item-wrapper class="order-list-item">
    <a-list-item-title-section
      v-for="(section, idx) in orderTitleSections"
      :key="idx"
      :title="section.title"
      :value="section.value"
      :basis="section.basis"
    />
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { Order } from '@sharedInterfaces/order/OrderInterface'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  order: {
    type: Object as PropType<Order>,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

// Variables
const { t } = useI18n()

// Computed
const orderStatusText = computed(() => {
  return t(`company.management.order.status.${props.order.status}`)
})

const orderValue = computed(() => {
  return props.order.orderItems
    .map((orderItem) => orderItem.offer.price * orderItem.quantity)
    .reduce((a, b) => a + b, 0)
})

const orderTitleSections = computed(() => [
  {
    title: getTranslationValue('id'),
    value: props.order.id,
    basis: 10
  },
  {
    title: getTranslationValue('status.title'),
    value: orderStatusText.value,
    basis: 15
  },
  {
    title: getTranslationValue(props.type === 'purchased' ? 'seller' : 'buyer'),
    value: props.type === 'purchased' ? props.order.seller.name : props.order.buyer.name,
    basis: 15
  },
  {
    title: getTranslationValue('totalPrice'),
    value: orderValue.value,
    basis: 15
  },
  {
    title: getTranslationValue('datePlaced'),
    value: props.order.createdAt,
    basis: 15
  },
  {
    title: getTranslationValue('lastUpdate'),
    value: props.order.updatedAt,
    basis: 15
  }
])

// Methods
const getTranslationValue = (key: string) => {
  return t(`company.management.order.${key}`)
}
</script>

<style lang="scss" scoped>
.order-list-item {
  display: flex;
}
</style>
