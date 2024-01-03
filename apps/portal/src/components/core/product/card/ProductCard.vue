<template>
  <a-card
    class="product-card"
    background-variant="secondary"
    keep-extended
    :header-image="data.image"
    :header-image-alt="data.name"
    @click="() => $router.push(offerLink)"
  >
    <template #title>
      <span class="product-card__title" v-text="data.name" />
    </template>

    <template #overlay-top>
      <product-card-stats :stats="productStats" />
    </template>

    <template #content>
      <div class="product-card__content">
        <div class="product-card__content-company" v-text="data.name" />

        <div v-if="data.productOffer" class="product-card__content-price">
          <a-currency :value="offerPrice" line-height="1" />

          <span
            class="product-card__content-price product-card__content-price--unit"
            v-text="unitText"
          />
        </div>
      </div>
    </template>
  </a-card>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUnitTranslation } from '@sharedComposables/unit/useUnitTranslation'
import type { FeaturedProduct } from '@sharedInterfaces/product/ProductInterface'
import { RouteNames } from '@/routes'
import ProductCardStats from '@/components/core/product/card/sections/ProductCardStats.vue'

const props = defineProps({
  data: {
    type: Object as PropType<FeaturedProduct>,
    required: true
  }
})

// Variables
const { t } = useI18n()
const { translateUnit } = useUnitTranslation()

// Computed
const unitText = computed(() => {
  return t('product.unit.pricePerUnit', {
    unit: translateUnit(props.data.productUnit.code).toLowerCase()
  })
})

const offerPrice = computed(() => {
  return props.data.productOffer.price
})

const productStats = computed(() => ({
  available: props.data.productOffer?.productQuantity ?? 0,
  soldQuantity: props.data.soldQuantity ?? 0
}))

const offerLink = computed(() => {
  return { name: RouteNames.OFFER_PREVIEW, params: { id: props.data.productOffer.id } }
})
</script>

<style scoped lang="scss">
.product-card {
  :hover {
    cursor: pointer;
  }

  & * {
    color: #ffffffde !important;
  }

  &__title {
    font-size: $global-title-medium-font-size;
    font-weight: $global-title-medium-font-weight;
    color: #ffffffde;
  }

  &__content {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: $global-spacing-10;

    max-height: 90px;
    padding: 0 $global-spacing-20 $global-spacing-20 $global-spacing-20;

    color: #ffffffde !important;

    border-radius: 0 0 $global-border-radius-20 $global-border-radius-20;
  }

  &__content-company {
    font-size: $global-font-size-30;
  }

  &__content-price {
    display: flex;

    :deep(.a-currency) {
      & * {
        color: #ffffffde !important;
      }
    }

    &--unit {
      margin-left: $global-spacing-10;
      line-height: 16px;
    }
  }
}
</style>
