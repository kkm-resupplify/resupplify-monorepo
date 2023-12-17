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
            name="dateStart"
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
import CompanyProductsService from '@/services/product/CompanyProductsService'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { ref, onBeforeMount, computed } from 'vue'

// Variables
const products = ref<Product[]>([])

// Computed
const selectProductOptions = computed(() => {
  return mapProductsToOptions(products.value)
})

// Methods
const handleFetchProducts = async () => {
  const { data, success } = await CompanyProductsService.getProducts()

  if (success) {
    products.value = data
  }
}

const mapProductsToOptions = (products: Product[]) => {
  return products.map((product) => ({
    id: product.id,
    text: product.name
  }))
}

// Hooks
onBeforeMount(async () => {
  handleFetchProducts()
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
