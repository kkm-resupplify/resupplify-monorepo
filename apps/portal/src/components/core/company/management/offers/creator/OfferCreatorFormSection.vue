<template>
  <a-panel-section class="offer-creator-form-section-section">
    <o-form class="offer-creator-form-section__form">
      <template #body>
        <div class="offer-creator-form-section__form-body">
          <a-title :title="$t('company.management.offer.creator.createOffer')" size="x-large" />

          <m-select
            name="product"
            :options="selectProductOptions"
            :label="$t('company.management.offer.creator.selectStockItemLabel')"
            :placeholder="$t('company.management.offer.creator.selectStockItemPlaceholder')"
            rules="required"
            @input-change="handleStockItemChange"
          />

          <m-text-field
            name="quantity"
            input-type="number"
            :label="$t('company.management.offer.creator.enterQuantityLabel')"
            :placeholder="$t('company.management.offer.creator.enterQuantityPlaceholder')"
            rules="required"
          />

          <m-text-field
            name="netPrice"
            input-type="number"
            :label="$t('company.management.offer.creator.enterNetPriceLabel')"
            :placeholder="$t('company.management.offer.creator.enterNetPricePlaceholder')"
            rules="required"
          />

          <m-text-field
            name="dateStart"
            input-type="date"
            :label="$t('company.management.offer.creator.enterStartDateLabel')"
            :placeholder="$t('company.management.offer.creator.enterStartDatePlaceholder')"
            rules="required"
          />

          <m-text-field
            name="endStart"
            input-type="date"
            :label="$t('company.management.offer.creator.enterEndDateLabel')"
            :placeholder="$t('company.management.offer.creator.enterEndDatePlaceholder')"
            rules="required"
          />
        </div>
      </template>

      <template #footer>
        <a-button
          class="offer-creator-form-section__form-button"
          button-type="submit"
          :text="$t('global.create')"
          size="x-large"
        />
      </template>
    </o-form>
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyOffersService from '@/services/company/CompanyOffersService'
import { ref, onBeforeMount, computed } from 'vue'
import type { StockItem } from '@sharedInterfaces/stock/StockItemInterface'

// Emits
const emits = defineEmits(['stock-item-change'])

// Variables
const stockItems = ref<StockItem[]>([])

// Computed
const selectProductOptions = computed(() => {
  return mapStockItemsToOptions(stockItems.value)
})

// Methods
const handleFetchStockItems = async () => {
  const { data, success } = await CompanyOffersService.getStockItems()

  if (success) {
    stockItems.value = data
  }
}

const mapStockItemsToOptions = (stockItems: StockItem[]) => {
  return stockItems.map((stockItem) => ({
    id: stockItem.id,
    text: stockItem.product.name
  }))
}

const getSelectedStockItem = (id: number) => {
  return stockItems.value.find((stockItem) => stockItem.id === id)
}

const handleStockItemChange = (v: number) => {
  emits('stock-item-change', getSelectedStockItem(v))
}

// Hooks
onBeforeMount(async () => {
  handleFetchStockItems()
})
</script>

<style scoped lang="scss">
.offer-creator-form-section {
  padding: $global-spacing-20;

  &__form-body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  &__form-button {
    width: 100%;
    margin-top: $global-spacing-30;
  }
}
</style>
