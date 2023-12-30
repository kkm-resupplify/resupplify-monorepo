<template>
  <a-panel-section overflow class="order-purchases-content-section">
    <order-filters />

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <template v-else>
      <div class="order-purchases-content-section__list">
        <order-list v-if="showList" :orders="orders" type="purchased" />

        <a-list-no-results
          v-else
          :text="$t(`company.management.order.${noResultsTranslationKey}`)"
        />
      </div>
    </template>

    <o-pagination :pagination="paginationData" @page-changed="handleFetchOrders" />
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
import OrderFilters from '@/components/common/order/OrderFilters.vue'

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
  return orders.value.length === 0 && filtersUsed.value
    ? 'noOrdersMatchingFilter'
    : 'noOrdersBought'
})

// Methods
const handleFetchOrders = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId, subcategoryId, status }
  } = route

  const { success, data, pagination } = await CompanyOrdersService.getBoughtOrders({
    page: page as string,
    name: name as string,
    categoryId: categoryId as string,
    subcategoryId: subcategoryId as string,
    status: status as string
  })

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

<style scoped lang="scss">
.order-purchases-content-section {
  height: 100%;

  &__list {
    height: 100%;
  }
}
</style>
