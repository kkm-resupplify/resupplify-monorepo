<template>
  <a-card
    class="product-card"
    background-variant="secondary"
    keep-extended
    :header-image="data.image"
    :header-image-alt="data.name"
  >
    <template #title>
      <span class="product-card__title" v-text="data.name" />
    </template>

    <template #overlay-right>
      <product-card-ribbon :show-ribbon="showRibbon" />
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
import ProductCardStats from '@/components/core/product/card/sections/ProductCardStats.vue'
import ProductCardRibbon from '@/components/core/product/card/sections/ProductCardRibbon.vue'
import { useUserStore } from '@/stores/user/useUserStore'

const props = defineProps({
  data: {
    type: Object as PropType<FeaturedProduct>,
    required: true
  }
})

// Variables
const { t } = useI18n()
const { translateUnit } = useUnitTranslation()
const userStore = useUserStore()

// Computed
const showRibbon = computed(() => userStore.isAuthenticated)

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
</script>

<style scoped lang="scss">
.product-card {
  &__title {
    font-size: $global-title-medium-font-size;
    font-weight: $global-title-medium-font-weight;
  }

  &__content {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: $global-spacing-10;

    max-height: 90px;
    padding: 0 $global-spacing-20 $global-spacing-20 $global-spacing-20;

    border-radius: 0 0 $global-border-radius-20 $global-border-radius-20;
  }

  &__content-company {
    font-size: $global-font-size-30;
  }

  &__content-price {
    display: flex;

    &--value {
      font-size: $global-title-x-large-font-size;
      font-weight: $global-title-x-large-font-weight;
    }

    &--unit {
      align-self: flex-end;
      margin-left: $global-spacing-10;
      font-size: $global-text-sm-font-size;
      line-height: 1;
    }
  }
}
</style>
