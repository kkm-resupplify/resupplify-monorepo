<template>
  <a-card class="product-card" background-variant="secondary" keep-extended>
    <template #title>
      <span class="product-card__title" v-text="data.productName" />
    </template>

    <template #overlay-right>
      <product-card-ribbon :show-ribbon="showRibbon" />
    </template>

    <template #overlay-top>
      <product-card-stats :stats="data.stats" />
    </template>

    <template #content>
      <div class="product-card__content">
        <div class="product-card__content-company" v-text="data.company" />

        <div class="product-card__content-price">
          <span class="product-card__content-price product-card__content-price--value">
            {{ data.price.total }} {{ data.price.currencyCode }}
          </span>

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
// Vue
import { ref } from 'vue'

// i18n
import { useI18n } from 'vue-i18n'

// Components
import ProductCardStats from '@/components/core/product/card/sections/ProductCardStats.vue'
import ProductCardRibbon from '@/components/core/product/card/sections/ProductCardRibbon.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// Inits
const { t } = useI18n()

const unitText = ref(t('product.unit.pricePerUnit', { unit: props.data.unit.name }))

// TODO: isUserLoggedIn
const isUserLoggedIn = true
const showRibbon = ref(isUserLoggedIn)
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
