<template>
  <div class="company-management-warehouse-preview-header-section">
    <a-title size="x-large" :title="warehouse.title" />

    <div class="company-management-warehouse-preview-header-section__content">
      <company-management-warehouse-preview-stats />

      <a-button
        size="xx-large"
        :text="$t('company.management.warehouse.preview.header.addProduct')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CompanyManagementWarehousePreviewStats from '@/components/core/company/management/warehouse/preview/CompanyManagementWarehousePreviewStats.vue'

const warehouse = reactive({
  title: 'Bread Warehouse'
})
</script>

<style scoped lang="scss">
.company-management-warehouse-preview-header-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;

  &__content {
    display: flex;
    align-items: flex-start;
  }
}
</style>
