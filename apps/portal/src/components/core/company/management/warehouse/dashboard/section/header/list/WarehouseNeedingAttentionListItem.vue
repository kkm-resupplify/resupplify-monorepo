<template>
  <router-link :to="warehouseLink" class="warehouse-needing-attention-list-item">
    <a-list-item-wrapper>
      <a-status-indicator :status="warehouseStatus(warehouse)" />

      <span v-text="warehouse.name" />

      <a-button
        :text="$t('company.management.warehouse.needingAttentionSection.buttonText')"
        class="warehouse-needing-attention-list-item__button"
        color="gradient-warning"
        size="x-large"
      />
    </a-list-item-wrapper>
  </router-link>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { RouteNames } from '@/routes/index'
import { useWarehouseStatus } from '@/composable/warehouse/useWarehouseStatus'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'

const props = defineProps({
  warehouse: { type: Object as PropType<Warehouse>, required: true }
})

// Variables
const { warehouseStatus } = useWarehouseStatus()

// Computed
const warehouseLink = computed(() => {
  return {
    name: RouteNames.COMPANY_WAREHOUSE_PREVIEW,
    params: {
      id: props.warehouse.id
    }
  }
})
</script>

<style scoped lang="scss">
.warehouse-needing-attention-list-item {
  text-decoration: none;

  &__button {
    margin-left: auto;
  }
}
</style>
