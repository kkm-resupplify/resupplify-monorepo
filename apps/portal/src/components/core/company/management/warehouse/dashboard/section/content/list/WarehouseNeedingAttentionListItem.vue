<template>
  <m-tile :to="warehouseLink">
    <div class="warehouse-list-item__header">
      <a-status-indicator :status="warehouse.status" />
    </div>

    <div class="warehouse-list-item__content">{{ warehouse.name }}</div>
  </m-tile>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouteNames } from '@/routes/index'

const props = defineProps({
  warehouse: { type: Object, required: true }
})

const warehouseLink = computed(() => {
  return {
    name: RouteNames.COMPANY_WAREHOUSE_PREVIEW,
    params: {
      id: props.warehouse.id
    }
  }
})
</script>

<style scoped lang="scss"></style>
