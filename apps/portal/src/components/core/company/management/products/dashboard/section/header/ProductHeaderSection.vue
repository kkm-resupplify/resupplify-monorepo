<template>
  <a-panel-section>
    <div class="product-header-section">
      <a-title :title="$t('company.management.products.dashboard.title')" size="x-large" />

      <div class="product-header-section__main">
        <a-skeleton v-if="isLoading" height="78px" />

        <a-list-item-wrapper v-else>
          <a-list-item-title-section
            v-for="statSection in statSections"
            :key="statSection.title"
            :title="$t(statSection.title)"
            :value="statSection.value"
          />
        </a-list-item-wrapper>

        <div class="product-header-section__actions">
          <a-button
            :text="$t('company.management.products.dashboard.addProduct')"
            size="x-large"
            :to="{ name: RouteNames.COMPANY_PRODUCT_EDITOR }"
            full-width
          />

          <a-button
            :to="{ name: RouteNames.COMPANY_OFFERS_CREATOR }"
            :text="$t('company.management.offer.creator.createOffer')"
            size="x-large"
            full-width
          />
        </div>
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes'
import { type PropType } from 'vue'

interface StatSection {
  title: string
  value: number
}

defineProps({
  statSections: {
    type: Array as PropType<StatSection[]>,
    required: true
  },
  isLoading: Boolean
})
</script>

<style scoped lang="scss">
.product-header-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  &__title {
    white-space: nowrap;
  }

  &__main {
    display: flex;
    gap: $global-spacing-50;
    align-items: center;
    justify-content: space-around;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
    align-items: flex-end;
    justify-content: space-around;
  }
}
</style>
