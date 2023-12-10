<template>
  <a-panel>
    <a-panel-section>
      <m-tile-list :tiles="tiles" />
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes/index'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Variables
const { t } = useI18n()

// Computed
const tiles = computed(() => [
  {
    title: t('company.management.navigation.payments.tiles.dashboard'),
    icon: 'universal_currency_alt',
    to: { name: RouteNames.COMPANY_PAYMENTS_DASHBOARD }
  },
  {
    title: t('company.management.navigation.payments.tiles.manage'),
    icon: 'account_balance_wallet',
    to: { name: RouteNames.COMPANY_PAYMENTS_MANAGE_BALANCE }
  }
])
</script>
