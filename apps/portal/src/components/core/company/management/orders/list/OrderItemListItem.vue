<template>
  <div class="order-item-list-item">
    <div class="order-item-list-item__header">
      <a-image
        :src="orderItem.offer.product.image"
        :alt="$t('cart.main.content.groups.list.item.imageAlt')"
        :width="60"
        :height="60"
        variant="rounded-sm"
      />

      <div class="order-item-list-item__header-descriptors">
        <a-title :title="orderItem.offer.product.name" line-height="1" />

        <product-tag-list :product-tags="orderItem.offer.product.productTags" font-size="10px" />
      </div>
    </div>

    <div class="order-item-list-item__content">
      <a-currency
        title-size="x-normal"
        :value="pricePerUnit"
        :title="$t('global.pricePerUnit')"
        vertical
        line-height="1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { OrderItem } from '@sharedInterfaces/order/OrderInterface'
import ProductTagList from '@/components/common/product/ProductTagList.vue'

const props = defineProps({
  orderItem: {
    type: Object as PropType<OrderItem>,
    required: true
  }
})

// Computed
const pricePerUnit = computed(() => {
  return props.orderItem.offer.price
})
</script>

<style scoped lang="scss">
.order-item-list-item {
  display: flex;
  flex: 1;
  gap: $global-spacing-40;

  box-sizing: border-box;
  padding: $global-spacing-40;

  &__header {
    display: flex;
    flex: 1;
    gap: $global-spacing-30;
    height: 100%;
  }

  &__header-descriptors {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
    justify-content: space-between;
  }

  &__content {
    display: flex;
    gap: $global-spacing-50;
  }

  &__content-section {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }
}
</style>
