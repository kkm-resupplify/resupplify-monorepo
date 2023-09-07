<template>
  <a-card class="product-card" background-variant="secondary" keep-extended>
    <template #title>
      <span class="product-card__title" v-text="data.productName" />
    </template>

    <template #overlay-right>
      <div class="product-card__ribbon" v-if="showRibbon">elo</div>
    </template>

    <template #content>
      <div class="product-card__content">
        <div class="product-card__content-company" v-text="data.company" />

        <div class="product-card__content-price">
          <div class="product-card__content-price product-card__content-price--value">
            {{ data.price.total }} {{ data.price.currencyCode }}
          </div>

          <div class="product-card__content-price product-card__content-price--unit">
            {{ unitText }}
          </div>
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

// Composables
import { useShortNumberFormatComposable } from '@sharedComposables/numeric/useShortNumberFormatComposable'

// Components
import ACard from '@sharedAtoms/card/ACard.vue'
import AIcon from '@sharedAtoms/icon/AIcon.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const { t } = useI18n()

const numberFormatter = useShortNumberFormatComposable()

const unitText = ref(t('product.unit.pricePerUnit', { unit: props.data.unit.name }))

//TODO: isUserLoggedIn
const isUserLoggedIn = true
const showRibbon = ref(isUserLoggedIn)
</script>

<style scoped lang="scss">
.product-card {
  &__ribbon {
    display: flex;
    flex-direction: row;
  }

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
    font-size: 12px;
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
