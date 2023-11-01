<template>
  <company-management-panel>
    <m-tile-list :tiles="tiles" />
  </company-management-panel>
</template>

<script setup lang="ts">
import CompanyManagementPanel from '@/components/core/company/panel/CompanyManagementPanel.vue'
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

<style lang="scss" scoped>
.m-tile-list {
  display: grid;
  grid-auto-flow: column;
  grid-gap: $global-spacing-100;
}
</style>
