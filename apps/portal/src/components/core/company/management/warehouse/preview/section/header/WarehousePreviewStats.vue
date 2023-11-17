<template>
  <div class="warehouse-preview-stats">
    <a-title
      v-for="(stat, idx) in statList"
      :key="idx"
      :title="getTranslationText(stat.text)"
      :subtitle="stat.value"
      variant="horizontal"
      :basis="20"
    />
  </div>
</template>

<script setup lang="ts">
import type { WarehouseProduct } from '@sharedInterfaces/warehouse/WarehouseProductInterface'
import { computed, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWarehouseProductStatus } from '@composables/warehouse/useWarehouseProductStatus'
import WarehouseProductStatusEnum from '@sharedEnums/warehouse/WarehouseProductStatusEnum'

const props = defineProps({
  products: {
    type: Array as PropType<WarehouseProduct[]>,
    required: true
  }
})

// Variables
const { t } = useI18n()
const { countProductsByStatus } = useWarehouseProductStatus()

// Computed
const statList = computed(() => {
  return [
    { text: 'totalProductsCount', value: props.products.length },
    {
      text: 'belowSafeQuantityProductsCount',
      value: countProductsByStatus(props.products, WarehouseProductStatusEnum.BELOW_SAFE_QUANTITY)
    },
    {
      text: 'soldOutProductsCount',
      value: countProductsByStatus(props.products, WarehouseProductStatusEnum.OUT_OF_STOCK)
    },
    {
      text: 'inactiveProductsCount',
      value: countProductsByStatus(props.products, WarehouseProductStatusEnum.INACTIVE)
    },
    { text: 'reservedProductsCount', value: 0 }
  ]
})

// Methods
const getTranslationText = (key: string) => {
  return t(`company.management.warehouse.preview.header.${key}`)
}
</script>

<style scoped lang="scss">
.warehouse-preview-stats {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
