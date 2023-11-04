<template>
  <div class="warehouse-list">
    <o-searchbar :placeholder="$t('company.management.navigation.warehouses.search')" />
    <warehouse-list-item
      v-for="i in 5"
      :key="i"
      :warehouse="{ id: i, name: `Warehouse ${i}`, status: i }"
    />
  </div>
</template>

<script setup lang="ts">
import WarehouseListItem from '@/components/core/company/management/warehouse/dashboard/section/content/list/WarehouseListItem.vue'
</script>

<style scoped lang="scss">
.warehouse-list {
  display: grid;
  grid-auto-flow: column;
  grid-gap: $global-spacing-100;
}
</style>
