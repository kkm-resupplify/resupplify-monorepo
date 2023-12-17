<template>
  <div class="offers-filters">
    <m-text-field
      class="offer-filters__name-search"
      name="name"
      :placeholder="$t('offers.filters.namePlaceholder')"
      :validate="false"
      append-icon-on="close"
    />

    <m-select
      name="categoryId"
      :placeholder="$t('offers.filters.categoryPlaceholder')"
      :options="staticProductDescriptorsStore.getProductCategories"
      :validate="false"
      @input-change="handleProductCategoryChange"
    />

    <m-select
      ref="subcategoryRef"
      name="subcategoryId"
      :placeholder="$t('offers.filters.subcategoryPlaceholder')"
      :options="productCategorySubcategories"
      :validate="false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import CompanyProductsService from '@/services/product/CompanyProductsService'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import { onBeforeMount } from 'vue'

// Emits
const emits = defineEmits(['update-stats'])

// Variables
const products = ref<Product[]>([])
const subcategoryRef = ref<typeof MSelect>()
const selectedCategoryId = ref<number | null>()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const route = useRoute()
const isLoading = ref(false)
const paginationData = ref<Pagination>()

// Computed
const productCategorySubcategories = computed(() => {
  return selectedCategoryId.value
    ? staticProductDescriptorsStore.getProductSubcategories.filter(
        (subcategory) => subcategory.categoryId === selectedCategoryId.value
      )
    : staticProductDescriptorsStore.getProductSubcategories
})

// Methods
const handleProductCategoryChange = (id: number) => {
  subcategoryRef?.value?.clearSelect()
  selectedCategoryId.value = id
}

const handleFetchProducts = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId, subcategoryId, status, verificationStatus }
  } = route

  const { data, success, pagination } = await CompanyProductsService.getProducts({
    page: page as string,
    name: name as string,
    categoryId: categoryId as string,
    subcategoryId: subcategoryId as string,
    status: status as string,
    verificationStatus: verificationStatus as string
  })

  if (success) {
    products.value = data
    paginationData.value = pagination
    emits('update-stats')
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()
})
</script>

<style scoped lang="scss">
.offers-filters {
  display: flex;
}
</style>
