<template>
  <a-panel-section>
    <div class="product-header-section">
      <div class="product-header-section__content-titles">
        <a-title
          :title="$t('company.management.products.dashboard.totalProductsCount')"
          :subtitle="productsTotal"
          size="x-large"
          variant="horizontal"
          class="product-header-section__title"
        />

        <a-title
          :title="$t('company.management.products.dashboard.pendingVerificationProductsCount')"
          :subtitle="unverifiedProductsCount"
          variant="horizontal"
          class="product-header-section__title"
        />

        <a-title
          :title="$t('company.management.products.dashboard.verifiedProductsCount')"
          :subtitle="verifiedProductsCount"
          variant="horizontal"
          class="product-header-section__title"
        />

        <a-title
          :title="$t('company.management.products.dashboard.activeProductsCount')"
          :subtitle="activatedProductsCount"
          variant="horizontal"
          class="product-header-section__title"
        />

        <a-title
          :title="$t('company.management.products.dashboard.inactiveProductsCount')"
          :subtitle="deactivatedProductsCount"
          variant="horizontal"
          class="product-header-section__title"
        />
      </div>

      <div class="product-header-section__actions">
        <router-link :to="{ name: RouteNames.COMPANY_PRODUCT_EDITOR }">
          <a-button :text="$t('company.management.products.dashboard.addProduct')" size="x-large" />
        </router-link>

        <mass-assign-product-status
          :products="products"
          @fetch-products="$emit('fetch-products')"
        />
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes'
import type { PropType } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { computed } from 'vue'
import MassAssignProductStatus from '@/components/core/company/management/products/dashboard/dialog/MassAssignProductStatus.vue'

const props = defineProps({
  products: { type: Object as PropType<Product[]>, required: true },
  productsTotal: { type: [String, Number], required: true }
})

// Emits
defineEmits(['fetch-products'])

// Computed
const activatedProductsCount = computed(() => {
  return props.products.filter((product) => product.status === 1).length
})

const deactivatedProductsCount = computed(() => {
  return props.products.filter((product) => product.status === 0).length
})

const verifiedProductsCount = computed(() => {
  return props.products.filter((product) => product.verificationStatus === 1).length
})

const unverifiedProductsCount = computed(() => {
  return props.products.filter((product) => product.verificationStatus === 0).length
})
</script>

<style scoped lang="scss">
.product-header-section {
  display: flex;
  justify-content: space-between;

  &__title {
    white-space: nowrap;
  }

  &__content-titles {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
    align-items: flex-end;
  }
}
</style>
