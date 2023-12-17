<template>
  <a-panel-section class="offer-creator-side-panel-section">
    <div class="offer-creator-side-panel-section__header">
      <a-title :title="$t('company.management.offer.creator.sidePanel.title')" size="x-large" />
    </div>

    <div class="offer-creator-side-panel-section__content">
      <a-title
        v-if="!stockItem"
        :title="$t('company.management.offer.creator.sidePanel.description')"
      />

      <div class="offer-creator-side-panel-section__details">
        <div class="offer-creator-side-panel-section__details-row">
          <div class="offer-creator-side-panel-section__details-column">
            <a-title
              v-for="(section, idx) in stockItemDetailsLeftSections"
              :key="idx"
              :title="section.title"
              variant="horizontal"
              append-colon
              :subtitle="section.subtitle"
              :basis="40"
            />

            <div v-if="showProductTags" class="offer-creator-side-panel-section__details-tags">
              <a-title
                :title="$t('company.management.offer.dashboard.list.item.productTags')"
                append-colon
              />

              <product-tag-list :product-tags="stockItem?.product?.productTags" />
            </div>
          </div>

          <div class="offer-creator-side-panel-section__details-column">
            <a-title
              v-for="(section, idx) in stockItemDetailsRightSections"
              :key="idx"
              :title="section.title"
              variant="horizontal"
              append-colon
              :subtitle="section.subtitle"
              :basis="40"
            />

            <a-title
              :title="$t(`company.management.offer.creator.sidePanel.productDescription`)"
              :subtitle="props.stockItem?.product?.description"
              append-colon
              class="offer-creator-side-panel-section__details-description"
            />
          </div>
        </div>
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import ProductTagList from '@/components/common/product/ProductTagList.vue'
import type { StockItem } from '@sharedInterfaces/stock/StockItemInterface'
import { type PropType, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  stockItem: Object as PropType<StockItem>
})

// Variables
const { t } = useI18n()

// Computed
const stockItemDetailsLeftSections = computed(() => [
  { title: getTranslationValue('productName'), subtitle: props.stockItem?.product.name },
  { title: getTranslationValue('warehouseName'), subtitle: props.stockItem?.warehouseName },
  { title: getTranslationValue('warehouseQuantity'), subtitle: props.stockItem?.warehouseQuantity },
  {
    title: getTranslationValue('productCategory'),
    subtitle: props.stockItem?.product?.productCategory?.name
  },
  {
    title: getTranslationValue('productSubcategory'),
    subtitle: props.stockItem?.product?.productSubcategory?.name
  }
])

const stockItemDetailsRightSections = computed(() => [
  { title: getTranslationValue('productCode'), subtitle: props.stockItem?.product?.code },
  { title: getTranslationValue('productProducer'), subtitle: props.stockItem?.product?.producer },
  {
    title: getTranslationValue('productStatus'),
    subtitle: getProductStatusTranslation(props.stockItem?.product?.status ?? 0)
  },
  {
    title: getTranslationValue('productVerificationStatus'),
    subtitle: getProductVerificationStatusTranslation(
      props.stockItem?.product?.verificationStatus ?? 0
    )
  },
  {
    title: getTranslationValue('productUnit'),
    subtitle: props.stockItem?.product?.productUnit.code
  }
])

const showProductTags = computed(() => {
  return props.stockItem?.product?.productTags
    ? props.stockItem?.product?.productTags?.length > 0
    : false
})

// Methods
const getTranslationValue = (key: string) => t(`company.management.offer.creator.sidePanel.${key}`)

const getProductStatusTranslation = (status: number) => {
  switch (status) {
    case 0:
      return t('global.inactive')
    case 1:
      return t('global.active')
    default:
      return t('global.inactive')
  }
}

const getProductVerificationStatusTranslation = (status: number) => {
  switch (status) {
    case 0:
      return t('global.unverified')
    case 1:
      return t('global.verified')
    case 2:
      return t('global.rejected')
    default:
      return t('global.unverified')
  }
}
</script>

<style lang="scss" scoped>
.offer-creator-side-panel-section {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__content {
    display: flex;
    flex: 1;
  }

  &__details {
    display: flex;
    flex: 1;
  }

  &__details-column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__details-tags {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__details-row {
    display: flex;
  }

  &__details-description {
    gap: $global-spacing-10 !important;

    :deep(.a-title__subtitle) {
      font-size: 14px !important;
    }
  }
}
</style>
