<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else class="warehouse-dashboard-panel">
    <warehouse-header-section />

    <warehouse-content-section :warehouses="warehouses" />
  </a-panel>
</template>

<script setup lang="ts">
import WarehouseHeaderSection from '@/components/core/company/management/warehouse/dashboard/section/header/WarehouseHeaderSection.vue'
import WarehouseContentSection from '@/components/core/company/management/warehouse/dashboard/section/content/WarehouseContentSection.vue'
import WarehouseService from '@/services/warehouse/WarehouseService'
import { onBeforeMount, reactive, ref } from 'vue'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'
import type { WarehouseProduct } from '@/interface/warehouse/WarehouseProductInterface'

// Variables
const warehouses = reactive<Warehouse[]>([])
const isLoading = ref(false)

// Methods
const handleFetchWarehouses = async () => {
  isLoading.value = true

  const { data, success } = await WarehouseService.getWarehouses()

  if (success) warehouses.push(...(data as Warehouse[]))
  warehouses.forEach((warehouse) => (warehouse.products = generateProducts()))
  console.log(warehouses)
  isLoading.value = false
}

// Variables
// TODO: remove this

const generateProducts = () => {
  const productStatusList = [0, 1]
  const productVerificationStatusList = [0, 1]
  const warehouseProductStatusList = [0, 1]
  const quantityList = [0, 1, 2, 3]
  const safeQuantityList = [1, 2]

  const products: WarehouseProduct[] = []

  productStatusList.forEach((status) => {
    productVerificationStatusList.forEach((verificationStatus) => {
      warehouseProductStatusList.forEach((warehouseProductStatus) => {
        quantityList.forEach((quantity) => {
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
// Hooks
onBeforeMount(async () => {
  await handleFetchWarehouses()
})
</script>

<style lang="scss" scoped>
.warehouse-dashboard-panel {
  width: 100%;
  height: 100%;
}
</style>
