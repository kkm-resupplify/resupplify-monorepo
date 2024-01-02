<template>
  <a-panel-section class="product-verify-content-section">
    <a-title :title="$t('product.verify.productVerification')" size="large" />

    <div class="product-verify-content-section__header">
      <span v-text="$t('product.verify.productsAwaitingVerification')" />

      <div class="product-verify-content-section__mass-actions">
        <a-button
          size="large"
          color="gradient-danger"
          :text="$t('global.rejectAll')"
          :disabled="disableButtons"
          @click="$emit('reject-all')"
        />

        <a-button
          size="large"
          :text="$t('global.verifyAll')"
          :disabled="disableButtons"
          @click="$emit('verify-all')"
        />
      </div>
    </div>

    <a-line />

    <a-loader v-if="isLoading" />

    <product-verify-product-list
      v-else
      :products="products"
      @fetch-products="$emit('fetch-products')"
    />
  </a-panel-section>
</template>

<script setup lang="ts">
import ProductVerifyProductList from '@/components/core/panel/product/verify/content/list/ProductVerifyProductList.vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { type PropType, computed } from 'vue'

const props = defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  },
  isLoading: { type: Boolean, required: true }
})

// Emits
defineEmits(['fetch-products', 'verify-all', 'reject-all'])

// Computed
const disableButtons = computed(() => {
  return props.isLoading || props.products.length === 0
})
</script>

<style lang="scss" scoped>
.product-verify-content-section {
  overflow-y: auto;
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__mass-actions {
    display: flex;
    gap: $global-spacing-40;
    align-items: center;
  }
}
</style>
