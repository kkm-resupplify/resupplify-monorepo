<template>
  <a-expansion-panel>
    <template #activator>
      <a-list-item-wrapper class="product-verify-product-list-item">
        <a-status-indicator :status="product.verificationStatus" />

        <a-list-item-title-section :title="$t('product.data.name')" :value="product.name" />

        <a-list-item-title-section :title="$t('product.data.tin')" :value="product.code" />

        <a-list-item-title-section
          :title="$t('product.data.phoneNumber')"
          :value="product.productCategory.name"
        />

        <a-list-item-title-section
          :title="$t('product.data.contactPerson')"
          :value="product.productSubcategory.name"
        />

        <div class="product-verify-product-list-item__actions">
          <a-button
            :text="$t('global.reject')"
            color="gradient-danger"
            size="large"
            @click.stop="rejectProduct"
          />

          <a-button :text="$t('global.verify')" size="large" @click.stop="verifyProduct" />
        </div>
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="product-verify-product-list-item__content">
        <a-title
          v-for="(productDetail, idx) in productDetailsContent"
          :key="idx"
          :title="productDetail.title"
          :subtitle="productDetail.value"
          append-colon
        />
      </div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { type PropType, computed } from 'vue'
import ProductVerificationService from '@/services/product/ProductVerificationService'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

// Emits
const emits = defineEmits(['update-list'])

// Variables
const { t } = useI18n()

// Computed
const productDetailsContent = computed(() => {
  return [
    { title: t('product.data.description'), value: props.product.description },
    { title: t('product.data.productUnitId'), value: props.product.productUnitId }
  ]
})

const productId = computed(() => props.product.id)

// Methods
const verifyProduct = async () => {
  const { success } = await ProductVerificationService.verifyProduct({ productId: productId.value })

  if (success) emits('update-list')
}

const rejectProduct = async () => {
  const { success } = await ProductVerificationService.rejectProduct({ productId: productId.value })

  if (success) emits('update-list')
}
</script>

<style lang="scss" scoped>
.product-verify-product-list-item {
  background-color: var(--primary);

  &__actions {
    display: flex;
    flex: 1;
    gap: $global-spacing-70;
    justify-content: flex-end;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }
}
</style>
