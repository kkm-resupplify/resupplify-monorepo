<template>
  <div class="warehouse-product-list">
    <warehouse-product-list-item
      v-for="(warehouseProduct, idx) in warehouseProducts"
      :key="idx"
      :product="warehouseProduct"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import WarehouseProductListItem from '@/components/core/company/management/warehouse/preview/list/WarehouseProductListItem.vue'
import type { PropType } from 'vue'
import type { WarehouseProduct } from '@interfaces/warehouse/WarehouseProductInterface'

defineProps({
  products: {
    type: Array as PropType<WarehouseProduct[]>,
    required: true
  }
})

// Variables
// TODO: remove this

const generateProducts = () => {
  const productStatusList = [0, 1]
  const productVerificationStatusList = [0, 1]
  const warehouseProductStatusList = [0, 1]
  const quantityList = [0, 1, 2, 3]
  const safeQuantityList = [1, 2]

  const products: WarehouseProduct[] = []

  productStatusList.forEach((status, idx) => {
    productVerificationStatusList.forEach((verificationStatus, idx) => {
      warehouseProductStatusList.forEach((warehouseProductStatus, idx) => {
        quantityList.forEach((quantity, idx) => {
          safeQuantityList.forEach((safeQuantity, idx) => {
            products.push({
              id: idx,
              product: {
                name: `Product ${idx}`,
                status: status,
                verificationStatus: verificationStatus,
                code: `XDD-PEDRO-CANCELLED-IT-${idx}`
              },
              status: warehouseProductStatus,
              quantity: quantity,
              safeQuantity: safeQuantity
            })
          })
        })
      })
    })
  })

  return products
}

const warehouseProducts = reactive({ ...generateProducts() })
</script>

<style scoped lang="scss">
.warehouse-product-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-30;
}
</style>
