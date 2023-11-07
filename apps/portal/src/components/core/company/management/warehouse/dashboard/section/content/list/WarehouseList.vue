<template>
  <div class="warehouse-list">
    <o-search-bar
      class="warehouse-list__search-bar"
      :placeholder="$t('company.management.warehouse.preview.content.search')"
    />

    <a-line :height="2" color="secondary-2" />

    <div v-if="warehouses?.length" class="warehouse-list__items">
      <warehouse-list-item
        v-for="(warehouse, idx) in warehouses"
        :key="idx"
        :warehouse="warehouse"
      />
    </div>

    <a-list-no-results
      v-else
      :text="$t('company.management.navigation.warehouses.list.noWarehouses')"
    />
  </div>
</template>

<script setup lang="ts">
import WarehouseListItem from '@/components/core/company/management/warehouse/dashboard/section/content/list/WarehouseListItem.vue'
import type { PropType } from 'vue'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'

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
  gap: $global-spacing-40;

  &__search-bar {
    max-width: 450px;
  }

  &__items {
    overflow-y: auto;
    display: grid;
    grid-auto-flow: column;
    grid-gap: $global-spacing-100;

    padding: $global-spacing-20;
  }
}
</style>
