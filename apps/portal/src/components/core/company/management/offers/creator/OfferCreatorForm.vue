<template>
  <o-form class="offer-creator-form">
    <template #body>
      <div class="offer-creator-form__body">
        <a-title :title="$t('company.management.offer.creator.addOffer')" size="x-large" />

        <m-select
          name="product"
          :options="selectProductOptions"
          :label="$t('company.management.offer.creator.selectProductLabel')"
          :placeholder="$t('company.management.offer.creator.selectProductPlaceholder')"
          rules="required"
        />

        <m-text-field
          name="quantity"
          input-type="number"
          :label="$t('company.management.offer.creator.selectQuantityLabel')"
          :placeholder="$t('company.management.offer.creator.selectQuantityPlaceholder')"
          rules="required"
        />

        <m-text-field
          name="netPrice"
          input-type="number"
          :label="$t('company.management.offer.creator.selectNetPriceLabel')"
          :placeholder="$t('company.management.offer.creator.selectNetPricePlaceholder')"
          rules="required"
        />
      </div>
    </template>

    <template #footer>
      <a-button
        class="offer-creator-form__button"
        button-type="submit"
        :text="$t('global.add')"
        size="x-large"
      />
    </template>
  </o-form>
</template>

<script setup lang="ts">
import CompanyProductsService from '@/services/product/CompanyProductsService'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { computed } from 'vue'
import { ref, onBeforeMount } from 'vue'

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
onBeforeMount(() => {
  handleFetchProducts()
})
</script>

<style scoped lang="scss">
.offer-creator-form {
  padding: $global-spacing-20;

  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  &__button {
    width: 100%;
    margin-top: $global-spacing-30;
  }
}
</style>
