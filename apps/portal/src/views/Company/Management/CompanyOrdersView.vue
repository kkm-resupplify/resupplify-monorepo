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
    title: t('company.management.navigation.orders.tiles.sales'),
    icon: 'sell',
    to: { name: RouteNames.COMPANY_ORDERS_SALES }
  },
  {
    title: t('company.management.navigation.orders.tiles.purchases'),
    icon: 'shopping_bag',
    to: { name: RouteNames.COMPANY_ORDERS_PURCHASES }
  }
])
</script>
