<template>
  <a-list-item-wrapper class="warehouse-product-list-item">
    <a-status-indicator :status="warehouseIndicatorStatus" />

    <a-list-item-title-section
      :title="t('company.management.warehouse.preview.content.productName')"
      :value="product.product.name"
      :basis="20"
    />

    <div class="warehouse-product-list-item__descriptors">
      <a-list-item-title-section
        v-for="(productStat, idx) in productStatList"
        :key="idx"
        :title="productStat.title"
        :value="productStat.value"
        :basis="25"
      />
    </div>

    <edit-warehouse-product-dialog
      :product-name="product.product.name"
      :safe-quantity="product.safeQuantity"
      :quantity="product.quantity"
    />
    <span>warehouseProduct.status = {{ product.status }}</span>
    <span>product.status = {{ product.product.status }}</span>
    <span>product.verificationStatus = {{ product.product.verificationStatus }}</span>
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import EditWarehouseProductDialog from '@/components/core/company/management/warehouse/preview/dialog/EditWarehouseProductDialog.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { WarehouseProduct } from '@interfaces/warehouse/WarehouseProductInterface'
import type { PropType } from 'vue'
import { useWarehouseProductStatus } from '@composables/warehouse/useWarehouseProductStatus'

const props = defineProps({
  product: {
    type: Object as PropType<WarehouseProduct>,
    required: true
  }
})

// Variables
const { t } = useI18n()
const { warehouseProductStatus } = useWarehouseProductStatus()

// Computed

const warehouseIndicatorStatus = computed(() => {
  const t = warehouseProductStatus(props.product)
  console.log(t)
  return t
})

const productStatList = computed(() => {
  return [
    {
      title: t('company.management.warehouse.preview.content.productCode'),
      value: props.product.product.code
    },
    {
      title: t('company.management.warehouse.preview.content.currentSupply'),
      value: props.product.quantity
    },
    {
      title: t('company.management.warehouse.preview.content.safeQuantity'),
      value: props.product.safeQuantity
    }
  ]
})
</script>

<style scoped lang="scss">
.warehouse-product-list-item {
  background-color: var(--primary);

  &:hover {
    background: var(--hover-primary);
  }

  &__descriptors {
    display: flex;
    flex: 1;
    gap: $global-spacing-40;
  }
}
</style>
