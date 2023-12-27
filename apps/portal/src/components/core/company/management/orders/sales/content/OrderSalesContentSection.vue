<template>
  <a-panel-section>
    <div>order-filters</div>

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <template v-else>
      <order-list v-if="showList" :orders="orders" type="sold" />

      <a-list-no-results v-else :text="$t(`common.order.list.${noResultsTranslationKey}`)" />
    </template>
  </a-panel-section>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import type { Order } from '@sharedInterfaces/order/OrderInterface'
import { useRoute } from 'vue-router'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'
import OrderList from '@/components/core/company/management/orders/list/OrderList.vue'
import CompanyOrdersService from '@/services/company/CompanyOrdersService'

// Variables
const isLoading = ref(false)
const orders = ref<Order[]>([])
const route = useRoute()
const paginationData = ref<Pagination>()
const { checkFilterUsage } = useQueryFilter()

// Computed
const showList = computed(() => {
  return orders.value.length > 0
})

const filtersUsed = computed(() => {
  const keys = ['page', 'name', 'categoryId', 'subcategoryId', 'status']
  return checkFilterUsage(keys, route)
})

const noResultsTranslationKey = computed(() => {
  return orders.value.length === 0 && filtersUsed.value ? 'noOffersMatchingFilter' : 'noOffers'
})

// Methods
const handleFetchOrders = async () => {
  isLoading.value = true

  const { success, data, pagination } = await CompanyOrdersService.getSoldOrders()

  if (success) {
    orders.value = data
    paginationData.value = pagination
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(() => {
  handleFetchOrders()
})
</script>
