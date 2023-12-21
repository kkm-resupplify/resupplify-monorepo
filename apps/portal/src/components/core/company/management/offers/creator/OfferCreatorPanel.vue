<template>
  <a-panel class="offer-creator-panel">
    <offer-creator-form-section @stock-item-change="handleStockItemChange" />

    <offer-creator-side-panel-section :stock-item="selectedStockItem" />
  </a-panel>
</template>

<script setup lang="ts">
import OfferCreatorFormSection from './OfferCreatorFormSection.vue'
import OfferCreatorSidePanelSection from './OfferCreatorSidePanelSection.vue'
import { ref } from 'vue'
import type { StockItem } from '@sharedInterfaces/stock/StockItemInterface'

// Variables
const selectedStockItem = ref<StockItem>()

// Methods
const handleStockItemChange = (stockItem: StockItem) => {
  selectedStockItem.value = stockItem
}
</script>

<style lang="scss" scoped>
.offer-creator-panel {
  display: flex;
  flex: 1;
  flex-direction: row !important;
}
</style>
