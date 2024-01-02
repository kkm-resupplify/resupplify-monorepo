<template>
  <a-panel-section class="offer-preview-content-section">
    <a-title :title="$t('company.management.offer.preview.productDescription')" size="x-large" />

    <a-title :title="product.description" size="large" />

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

      <div class="offer-preview-content-section__company-data">
        <div class="offer-preview-content-section__company-data-left-section">
          <a-link
            :text="company.name"
            :link="{ name: RouteNames.COMPANY_PREVIEW, params: { slug: company.slug } }"
            size="x-large"
          />

          <a-title
            :title="$t('company.preview.email')"
            :subtitle="company.details.email"
            variant="horizontal"
            append-colon
            class="offer-preview-content-section__title"
            size="large"
          />

          <a-title
            :title="$t('company.preview.phone')"
            :subtitle="company.details.phoneNumber"
            variant="horizontal"
            append-colon
            class="offer-preview-content-section__title"
            size="large"
          />

          <a-title
            :title="$t('company.preview.address')"
            :subtitle="company.details.address"
            variant="horizontal"
            append-colon
            class="offer-preview-content-section__title"
            size="large"
          />
        </div>

        <div class="offer-preview-content-section__company-data-right-section">
          <a-title
            :title="$t('company.preview.contactPerson')"
            :subtitle="company.details.contactPerson"
            variant="horizontal"
            append-colon
            class="offer-preview-content-section__title"
            size="large"
          />

          <a-title
            :title="$t('company.preview.tin')"
            :subtitle="company.details.tin"
            variant="horizontal"
            append-colon
            class="offer-preview-content-section__title"
            size="large"
          />

          <a-title
            :title="$t('company.preview.externalWebsite')"
            :subtitle="company.details.externalWebsite"
            variant="horizontal"
            append-colon
            class="offer-preview-content-section__title"
            size="large"
          />
        </div>
      </div>
    </div>

    <div class="offer-preview-content-section__company-description">
      <a-title
        :title="$t('company.preview.shortDescription')"
        :subtitle="company.shortDescription"
        size="large"
      />

      <a-title
        :title="$t('company.preview.longDescription')"
        :subtitle="company.description"
        size="large"
      />
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type { PropType } from 'vue'

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
  &__title {
    width: max-content;
  }

  &__company {
    display: flex;
    gap: $global-spacing-50;
    margin-top: $global-spacing-50;
    white-space: nowrap;
  }

  &__company-data {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  }

  &__company-data-left-section,
  &__company-data-right-section {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__company-link {
    text-decoration: none;
  }

  &__company-description {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    margin-top: $global-spacing-100;
  }
}
</style>
