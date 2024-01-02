<template>
  <a-panel-section class="product-tags-content-section">
    <div class="product-tags-content-section__header">
      <a-title size="large" :title="$t('company.management.products.tags.currentTags')" />

      <add-product-tag-dialog @fetch-product-tags="handleFetchProductTags" />
    </div>

    <a-line />

    <m-skeleton v-if="isLoading" :repetitions="10" skeleton-height="78px" />

    <product-tag-list
      v-else-if="productTags.length"
      :product-tags="productTags"
      @fetch-product-tags="handleFetchProductTags"
    />

    <a-list-no-results v-else :text="$t('company.management.products.tags.noResults')" />
  </a-panel-section>
</template>
<script setup lang="ts">
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import ProductTagList from '@/components/core/company/management/products/tags/list/ProductTagList.vue'
import { ref, onBeforeMount } from 'vue'
import CompanyProductDescriptorsService from '@/services/product/CompanyProductDescriptorsService'
import AddProductTagDialog from '@/components/core/company/management/products/tags/dialog/AddProductTagDialog.vue'

// Variables
const isLoading = ref(false)
const productTags = ref<ProductTag[]>([])

// Methods
const handleFetchProductTags = async () => {
  isLoading.value = true

  const { success, data } = await CompanyProductDescriptorsService.getProductTags()

  if (success) productTags.value = data

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProductTags()
})
</script>

<style lang="scss" scoped>
.product-tags-content-section {
  overflow-y: auto;
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
