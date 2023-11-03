<template>
  <m-tile :to="warehouseLink"> CompanyWarehouseListItem </m-tile>
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
