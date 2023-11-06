<template>
  <div class="warehouse-list">
    <o-search-bar
      class="warehouse-list__search-bar"
      :placeholder="$t('company.management.navigation.warehouses.search')"
    />

    <div class="warehouse-list__items">
      <warehouse-list-item
        v-for="(warehouse, idx) in warehouses"
        :key="idx"
        :warehouse="warehouse"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import WarehouseListItem from '@/components/core/company/management/warehouse/dashboard/section/content/list/WarehouseListItem.vue'
import type { PropType } from 'vue'
import type { Warehouse } from '@/interfaces/warehouse/WarehouseInterface'

defineProps({
  warehouses: {
    type: Array as PropType<Warehouse[]>
  }
})
</script>

<style scoped lang="scss">
.warehouse-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-70;

  &__search-bar {
    max-width: 450px;
  }

  &__items {
    overflow-y: scroll;
    display: grid;
    grid-gap: $global-spacing-100;
    grid-template-columns: repeat(auto-fit, 220px);

    max-height: 420px;
    padding: $global-spacing-20;
  }
}
</style>
