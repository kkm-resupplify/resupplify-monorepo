<template>
  <div class="warehouse-list">
    <o-search-bar
      class="warehouse-list__search-bar"
      :placeholder="$t('company.management.warehouse.preview.content.search')"
      @search="$emit('search')"
    />

    <a-line :height="2" color="secondary-2" />

    <m-tile-list v-if="warehouses?.length">
      <warehouse-list-item
        v-for="(warehouse, idx) in warehouses"
        :key="idx"
        :warehouse="warehouse"
      />
    </m-tile-list>

    <a-list-no-results
      v-else
      :text="$t('company.management.warehouse.preview.list.noWarehouses')"
    />
  </div>
</template>

<script setup lang="ts">
import WarehouseListItem from '@/components/core/company/management/warehouse/dashboard/section/content/list/WarehouseListItem.vue'
import type { PropType } from 'vue'
import type { Warehouse } from '@sharedInterfaces/warehouse/WarehouseInterface'

defineProps({
  warehouses: {
    type: Array as PropType<Warehouse[]>
  }
})

// Emits
defineEmits(['search'])
</script>

<style scoped lang="scss">
.warehouse-list {
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: $global-spacing-40;

  &__search-bar {
    max-width: 450px;
  }
}
</style>
