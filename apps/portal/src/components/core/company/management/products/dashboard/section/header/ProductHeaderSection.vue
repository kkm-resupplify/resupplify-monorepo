<template>
  <a-panel-section>
    <div class="product-header-section">
      <div class="product-header-section__titles">
        <a-title :title="userStore.getCompany?.name" size="x-large" />
        <div class="product-header-section__content-titles">
          <a-title
            :title="$t('company.management.products.preview.dashboard.totalProductsCount')"
            :subtitle="productsCount"
            size="x-large"
            variant="horizontal"
            class="product-header-section__title"
          />

          <a-title
            :title="
              $t('company.management.products.preview.dashboard.pendingVerificationProductsCount')
            "
            :subtitle="activatedProductsCount"
            variant="horizontal"
            class="product-header-section__title"
          />

          <a-title
            :title="$t('company.management.products.preview.dashboard.verifiedProductsCount')"
            :subtitle="deactivatedProductsCount"
            variant="horizontal"
            class="product-header-section__title"
          />

          <a-title
            :title="$t('company.management.products.preview.dashboard.activeProductsCount')"
            :subtitle="verifiedProductsCount"
            variant="horizontal"
            class="product-header-section__title"
          />

          <a-title
            :title="$t('company.management.products.preview.dashboard.inactiveProductsCount')"
            :subtitle="unverifiedProductsCount"
            variant="horizontal"
            class="product-header-section__title"
          />
        </div>
      </div>
      <router-link :to="{ name: RouteNames.COMPANY_PRODUCT_EDITOR }">
        <a-button
          :text="$t('company.management.products.preview.dashboard.addProduct')"
          size="x-large"
          class="product-header-section__button"
        />
      </router-link>
    </div>
  </a-panel-section>
</template>
<script setup lang="ts">
import { RouteNames } from '@/routes'
import { useUserStore } from '@/stores/user/useUserStore'
import type { PropType } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { computed } from 'vue'

const props = defineProps({
  products: Object as PropType<Product[]>,
  productsCount: String
})

// Computed
const activatedProductsCount = computed(() => {
  if (!props.products) {
    return 0
  }

  return props.products.filter((product) => product.status === 1).length
})

const deactivatedProductsCount = computed(() => {
  if (!props.products) {
    return 0
  }

  return props.products.filter((product) => product.status === 0).length
})

const verifiedProductsCount = computed(() => {
  if (!props.products) {
    return 0
  }

  return props.products.filter((product) => product.verificationStatus === 1).length
})

const unverifiedProductsCount = computed(() => {
  if (!props.products) {
    return 0
  }

  return props.products.filter((product) => product.verificationStatus === 0).length
})
// Variables
const userStore = useUserStore()
</script>
<style scoped lang="scss">
.product-header-section {
  display: flex;
  justify-content: space-between;
  padding: $global-spacing-40;

  &__title {
    white-space: nowrap;
  }

  &__content-titles {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
    margin-top: $global-spacing-50;
  }
}
</style>
