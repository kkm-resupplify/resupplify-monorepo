<template>
    <p>WarehouseNeedingAttention</p>
  <warehouse-needing-attention-list-item
    v-for="el in warehouseProductsNeedingAttention"
    :key="el.id"
    :warehouse="el"
  />
</template>

<script setup lang="ts">
import WarehouseNeedingAttentionListItem from './WarehouseNeedingAttentionListItem.vue'
import { reactive, computed } from 'vue'

const warehouseProducts = reactive([
  { id: 1, name: `Warehouse ${1}`, status: 1 },
  { id: 2, name: `Warehouse ${2}`, status: 2 },
  { id: 3, name: `Warehouse ${3}`, status: 3 },
  { id: 4, name: `Warehouse ${4}`, status: 4 },
  { id: 5, name: `Warehouse ${5}`, status: 5 }
])

const warehouseProductsNeedingAttention = computed(() => {
  return warehouseProducts.filter((el) => el.status === 2 || el.status === 3)
})
</script>

<style scoped lang="scss"></style>
