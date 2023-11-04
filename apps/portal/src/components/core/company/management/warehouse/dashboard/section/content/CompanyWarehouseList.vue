<template>
  <div>
    <o-searchbar :placeholder="$t('company.management.navigation.warehouses.search')" />
    <company-warehouse-list-item />
  </div>
</template>

<script setup lang="ts">
import CompanyWarehouseListItem from '@/components/core/company/management/warehouse/dashboard/section/content/CompanyWarehouseListItem.vue'
</script>

<style scoped lang="scss"></style>
