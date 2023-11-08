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
    title: t('company.management.navigation.warehouses.tiles.companyWarehouses'),
    icon: 'warehouse',
    to: { name: RouteNames.COMPANY_WAREHOUSE_LIST }
  },
  {
    title: t('company.management.navigation.warehouses.tiles.newWarehouse'),
    icon: 'add_box',
    to: { name: RouteNames.COMPANY_WAREHOUSE_EDITOR }
  }
])
</script>
