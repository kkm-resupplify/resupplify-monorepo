<template>
  <a-panel-section class="offer-preview-content-section">
    <a-title :title="$t('company.management.offer.preview.productDetails')" size="x-large" />

    <a-title :title="product.description" size="large" />

    <a-title
      :title="$t('company.management.offer.preview.productDetails')"
      :subtitle="translateUnit(product.productUnit.code)"
      append-colon
      size="large"
    />

    <a-line />

    <a-title :title="$t('company.management.offer.preview.sellerInformation')" size="x-large" />

    <div class="offer-preview-content-section__company">
      <a-image
        :width="120"
        :height="120"
        :src="company.details.logo"
        :alt="$t('common.offer.list.item.imageAlt')"
        variant="rounded"
      />

      <div class="offer-preview-content-section__company-information">
        <a-link
          :text="company.name"
          :to="{ name: RouteNames.COMPANY_PREVIEW, params: { slug: company.slug } }"
          size="large"
        />

        <a-title
          :title="$t('company.preview.email')"
          :subtitle="company.details.email"
          variant="horizontal"
          append-colon
        />

        <a-title
          :title="$t('company.preview.phone')"
          :subtitle="company.details.phoneNumber"
          variant="horizontal"
          append-colon
        />

        <a-title
          :title="$t('company.preview.address')"
          :subtitle="company.details.address"
          variant="horizontal"
          append-colon
        />
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes'
import { useUnitTranslation } from '@sharedComposables/unit/useUnitTranslation'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type { PropType } from 'vue'

// Composables
const { translateUnit } = useUnitTranslation()

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  },

  company: {
    type: Object as PropType<CompanyData>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.offer-preview-content-section {
  &__company {
    display: flex;
    gap: $global-spacing-50;
    margin-top: $global-spacing-50;
    white-space: nowrap;
  }

  &__company-information {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__company-link {
    text-decoration: none;
  }
}
</style>
