<template>
  <a-panel-section class="warehouse-preview-content-section">
    <a-title title="Warehouse products" size="large" />

    <warehouse-product-list v-if="products.length" :products="products" />

    <a-list-no-results
      v-else
      :text="$t('company.management.navigation.warehouses.list.noProducts')"
    />
  </a-panel-section>
</template>

<script setup lang="ts">
import WarehouseProductList from '@/components/core/company/management/warehouse/preview/list/WarehouseProductList.vue'
import type { Product } from '@interfaces/product/ProductInterface'
import type { PropType } from 'vue'

defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.warehouse-preview-content-section {
  overflow: hidden;
}
</style>
