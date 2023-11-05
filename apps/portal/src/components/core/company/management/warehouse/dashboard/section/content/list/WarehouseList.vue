<template>
  <div class="warehouse-list">
    <o-search-bar
      class="warehouse-list__search-bar"
      :placeholder="$t('company.management.navigation.warehouses.search')"
    />

    <div class="warehouse-list__items">
      <warehouse-list-item
        v-for="i in 18"
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
  &__search-bar {
    margin-top: $global-spacing-60;
    max-width: 450px;
  }

  &__items {
    margin-top: $global-spacing-100;
    display: grid;
    grid-template-columns: repeat(auto-fit, 220px);
    grid-gap: $global-spacing-100;
    max-height: 420px;
    overflow-y: scroll;
    padding: $global-spacing-20;
  }
}
</style>
