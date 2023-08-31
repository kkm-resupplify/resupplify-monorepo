<template>
  <a-card class="product-card" background-variant="secondary" keep-extended>
    <template #title>
      <span class="product-card-title">{{ data.productName }}</span>
    </template>

    <template #content>
      <div class="product-card-content">
        <div class="product-card-content__company">{{ data.company }}</div>
        <div class="product-card-content__price">
          <div class="product-card-content__price product-card-content__price--value">
            {{ data.price.total }} {{ data.price.currencyCode }}
          </div>
          <div class="product-card-content__price product-card-content__price--unit">
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
</script>

<style scoped lang="scss">
.product-card-title {
  font-size: $global-title-medium-font-size;
  font-weight: $global-title-medium-font-weight;
}

.product-card-content {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: $global-spacing-10;

  max-height: 90px;
  padding: 0 $global-spacing-20 $global-spacing-20 $global-spacing-20;

  border-radius: 0 0 $global-border-radius-10 $global-border-radius-10;

  &__company {
    font-size: 14px;
  }

  &__price {
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
