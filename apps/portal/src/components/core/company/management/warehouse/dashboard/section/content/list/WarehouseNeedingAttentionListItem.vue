<template>
  <router-link :to="warehouseLink" class="warehouse-needing-attention-list-item">
    <a-list-item-wrapper :to="warehouseLink">
      <a-status-indicator :status="warehouse.status" />

      <div>{{ warehouse.name }}</div>
      <a-button
        :text="$t('company.management.navigation.warehouses.needingAttention.buttonText')"
        class="warehouse-needing-attention-list-item__button"
        color="gradient-warning"
        size="x-large"
      />
    </a-list-item-wrapper>
  </router-link>
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

<style scoped lang="scss">
.warehouse-needing-attention-list-item {
  text-decoration: none;

  &__button {
    margin-left: auto;
  }
}
</style>
