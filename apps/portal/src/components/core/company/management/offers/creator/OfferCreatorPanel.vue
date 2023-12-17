<template>
  <a-panel class="offer-creator-panel">
    <offer-creator-form-section />

    <offer-creator-side-panel-section :stock-item="selectedStockItem" />
  </a-panel>
</template>

<script setup lang="ts">
import OfferCreatorFormSection from './OfferCreatorFormSection.vue'
import OfferCreatorSidePanelSection from './OfferCreatorSidePanelSection.vue'
import { ref } from 'vue'
import type { StockItem } from '@sharedInterfaces/stock/StockItemInterface'

// Variables
const selectedStockItem = ref<StockItem>({
  id: 1,
  warehouseName: 'Warehouse 1',
  warehouseQuantity: 100,
  datesActive: [],
  product: {
    id: 51,
    name: 'Product name',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    producer: 'The Coca-Cola Company',
    code: 'cola/big',
    status: 1,
    verificationStatus: 1,
    companyId: 6,
    productUnit: {
      id: 2,
      code: 'LITRE'
    },
    productCategory: {
      id: 2,
      name: 'Snacks'
    },
    productSubcategory: {
      id: 8,
      name: 'Popcorn',
      categoryId: 2
    },
    productTags: [
      {
        id: 26,
        name: 'White',
        slug: 'white',
        color: '#ff88c0'
      }
    ],
    translations: [
      {
        languageId: 1,
        name: 'Product name',
        description: 'Product description'
      },
      {
        languageId: 2,
        name: 'Nazwa produktu',
        description: 'Opis produktu'
      }
    ]
  }
})
</script>

<style lang="scss" scoped>
.offer-creator-panel {
  display: flex;
  flex: 1;
  flex-direction: row !important;
}
</style>
