<template>
  <div class="warehouse-list">
    <o-searchbar
      class="warehouse-list__searchbar"
      :placeholder="$t('company.management.navigation.warehouses.search')"
    />
    <div class="warehouse-list__items">
      <warehouse-list-item
        v-for="i in 5"
        :key="i"
        :warehouse="{ id: i, name: `Warehouse ${i}`, status: i }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import WarehouseListItem from '@/components/core/company/management/warehouse/dashboard/section/content/list/WarehouseListItem.vue'
</script>

<style scoped lang="scss">
.warehouse-list {
  &__searchbar {
    padding-block: $global-spacing-50;
    max-width: 450px;
  }

  &__items {
    display: grid;
    grid-auto-flow: column;
    grid-gap: $global-spacing-100;
  }
}
</style>
