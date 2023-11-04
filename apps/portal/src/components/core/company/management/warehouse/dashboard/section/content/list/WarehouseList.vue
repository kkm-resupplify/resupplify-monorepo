<template>
  <div class="warehouse-list">
    <o-searchbar
      class="warehouse-list__searchbar"
      :placeholder="$t('company.management.navigation.warehouses.search')"
    />
    <div class="warehouse-list__items">
      <warehouse-list-item
        v-for="i in 6"
        :key="i"
        :warehouse="{ id: i, name: `Warehouse ${i}`, status: i }"
        class="warehouse-list__item"
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
    padding-top: $global-spacing-50;
    padding-bottom: $global-spacing-100;
    max-width: 450px;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, 220px);
    grid-gap: $global-spacing-100;
  }

  &__item {
    width: 100%;
  }
}
</style>
