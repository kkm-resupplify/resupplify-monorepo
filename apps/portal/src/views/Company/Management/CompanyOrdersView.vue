<template>
  <a-panel>
    <a-panel-section>
      <m-tile-list :tiles="tiles" />
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouteNames } from '@/routes/index'

// Variables
const { t } = useI18n()

// Computed
const tiles = computed(() => [
  {
    title: t('company.management.navigation.offers.tiles.ourPurchases'),
    icon: 'shopping_cart',
    to: { name: RouteNames.COMPANY_ORDER_LIST }
  },
  {
    title: t('company.management.navigation.offers.tiles.customerOrders'),
    icon: 'order_approve',
    to: { name: RouteNames.COMPANY_CUSTOMER_ORDER_LIST }
  }
])
</script>
