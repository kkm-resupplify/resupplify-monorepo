<template>
  <a-panel-section class="product-tags-content-section">
    <div v-if="isLoading">implement-loader-here</div>

    <product-tag-list v-else-if="productTags.length" :product-tags="productTags" />

    <a-list-no-results v-else :text="$t('company.management.products.tags.noResults')" />
  </a-panel-section>
</template>
<script setup lang="ts">
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import ProductTagList from '@/components/core/company/management/products/tags/list/ProductTagList.vue'
import { ref, onBeforeMount } from 'vue'
import CompanyProductDescriptorsService from '@/services/product/CompanyProductDescriptorsService'

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
