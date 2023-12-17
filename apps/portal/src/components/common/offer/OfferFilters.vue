<template>
  <o-form ref="form" class="offer-filters" :submit-callback="handleQuerySubmit">
    <template #body>
      <div class="offer-filters__inputs">
        <m-text-field
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
    <template #footer>
      <a-button button-type="submit" text="search" size="x-large" />
    </template>
  </o-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import { computed } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import CompanyProductsService from '@/services/product/CompanyProductsService'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import { onBeforeMount } from 'vue'

// Interfaces
interface filterData {
  name: string
  categoryId: number
  subcategoryId: number
}

// Emits
const emits = defineEmits(['filter'])

// Variables
const products = ref<Product[]>([])
const subcategoryRef = ref<typeof MSelect>()
const selectedCategoryId = ref<number | null>()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const isLoading = ref(false)

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

  const { data, success } = await CompanyProductsService.getProducts()

  if (success) {
    products.value = data
  }

  isLoading.value = false
}

const handleQuerySubmit = async (data: filterData) => {
  console.log(data)
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()
})
</script>

<style scoped lang="scss">
.offer-filters {
  &__inputs {
    display: flex;
  }
}
</style>
