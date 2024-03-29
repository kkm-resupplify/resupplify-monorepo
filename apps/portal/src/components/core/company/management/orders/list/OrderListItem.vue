<template>
  <a-expansion-panel>
    <template #activator>
      <a-list-item-wrapper class="order-list-item">
        <div class="order-list-item__section">
          <a-list-item-title-section
            v-for="(section, idx) in orderTitleMainSections"
            :key="idx"
            :title="section.title"
            :value="section.value"
            :basis="section.basis"
          />

          <a-currency
            :title="getTranslationValue('totalPrice')"
            :value="orderValue"
            vertical
            title-size="x-normal"
          />
        </div>

        <div class="order-list-item__section order-list-item__section--right">
          <a-list-item-title-section
            v-for="(section, idx) in orderTitleDatesSections"
            :key="idx"
            :title="section.title"
            :value="section.value"
            :basis="section.basis"
          />
        </div>
      </a-list-item-wrapper>
    </template>

    <template #content>
      <order-item-list
        :order-items="orderItems"
        :type="type"
        :order="order"
        @fetch-orders="handleFetchOrders"
      />
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { Order } from '@sharedInterfaces/order/OrderInterface'
import { useI18n } from 'vue-i18n'
import OrderItemList from '@/components/core/company/management/orders/list/OrderItemList.vue'

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

// Emits
const emits = defineEmits(['fetch-orders'])

// Variables
const { t } = useI18n()

// Computed
const orderStatusText = computed(() => {
  return t(`company.management.order.status.${props.order.status}`)
})

const orderItems = computed(() => {
  return props.order.orderItems
})

const orderValue = computed(() => {
  return orderItems.value
    .map((orderItem) => orderItem.offer.price * orderItem.quantity)
    .reduce((a, b) => a + b, 0)
})

const orderTitleMainSections = computed(() => [
  {
    title: getTranslationValue('id'),
    value: props.order.id,
    basis: 25
  },
  {
    title: getTranslationValue('status.title'),
    value: orderStatusText.value,
    basis: 25
  },
  {
    title: getTranslationValue(props.type === 'purchased' ? 'seller' : 'buyer'),
    value: props.type === 'purchased' ? props.order.seller.name : props.order.buyer.name,
    basis: 40
  }
])

const orderTitleDatesSections = computed(() => [
  {
    title: getTranslationValue('datePlaced'),
    value: props.order.createdAt,
    basis: 33
  },
  {
    title: getTranslationValue('lastUpdate'),
    value: props.order.updatedAt,
    basis: 33
  }
])

// Methods
const getTranslationValue = (key: string) => {
  return t(`company.management.order.${key}`)
}

const handleFetchOrders = () => {
  emits('fetch-orders')
}
</script>

<style lang="scss" scoped>
.order-list-item {
  justify-content: space-between;

  &__section {
    display: flex;
    flex: 1;

    &--right {
      justify-content: flex-end;
    }
  }
}
</style>
