<template>
  <div class="company-warehouse-list">
    <company-warehouse-list-item
      v-for="i in 5"
      :key="i"
      :warehouse="{ id: i, name: `Warehouse ${i}`, status: i }"
    />
  </div>
</template>

<script setup lang="ts">
import CompanyWarehouseListItem from '@/components/core/company/management/warehouse/dashboard/section/content/CompanyWarehouseListItem.vue'
</script>

<style scoped lang="scss">
.company-warehouse-list {
  display: grid;
  grid-auto-flow: column;
  grid-gap: $global-spacing-100;
}
</style>
