<template>
  <a-title :title="$t('company.management.navigation.warehouses.needingAttention.title')" />
  <div class="warehouse-needing-attention-list">
    <warehouse-needing-attention-list-item
      v-for="el in warehouseProductsNeedingAttention"
      :key="el.id"
      :warehouse="el"
    />
  </div>
</template>

<script setup lang="ts">
import WarehouseNeedingAttentionListItem from './WarehouseNeedingAttentionListItem.vue'
import { reactive, computed } from 'vue'

const warehouseProducts = reactive([
  { id: 1, name: `Warehouse ${1}`, status: 1 },
  { id: 2, name: `Warehouse ${2}`, status: 2 },
  { id: 3, name: `Warehouse ${3}`, status: 3 },
  { id: 4, name: `Warehouse ${2}`, status: 2 },
  { id: 5, name: `Warehouse ${3}`, status: 3 },
  { id: 6, name: `Warehouse ${2}`, status: 2 },
  { id: 7, name: `Warehouse ${3}`, status: 3 },
  { id: 8, name: `Warehouse ${4}`, status: 4 },
  { id: 9, name: `Warehouse ${5}`, status: 5 }
])

const warehouseProductsNeedingAttention = computed(() => {
  return warehouseProducts.filter((el) => el.status === 2 || el.status === 3)
})
</script>

<style scoped lang="scss">
.warehouse-needing-attention-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  width: 50%;
  max-height: 280px;
  padding: $global-spacing-30;
}
</style>
