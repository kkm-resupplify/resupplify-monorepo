<template>
  <o-form
    ref="form"
    class="offer-filters"
    :submit-callback="handleQuerySubmit"
    :initial-values="initialFilterParams"
  >
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
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'
import { useRoute } from 'vue-router'

// Interfaces
interface OfferFilterValues {
  name?: string
  categoryId?: number
  subcategoryId?: number
}

// Emits
const emits = defineEmits(['filter'])

// Variables
const products = ref<Product[]>([])
const subcategoryRef = ref<typeof MSelect>()
const selectedCategoryId = ref<number | null>()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const initialFilterParams = ref<OfferFilterValues>()
const route = useRoute()
const { setQueryParam } = useQueryFilter()
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

const setInitialFormValues = () => {
  initialFilterParams.value = {
    name: route.query.name ? route.query.name.toString() : undefined,
    categoryId: route.query.categoryId ? +route.query.categoryId : undefined,
    subcategoryId: route.query.subcategoryId ? +route.query.subcategoryId : undefined
  }
}

const handleQuerySubmit = async (data: OfferFilterValues) => {
  await setQueryParam(route, data)

  console.log(data)
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProducts()
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()

  setInitialFormValues()
})
</script>

<style scoped lang="scss">
.offer-filters {
  &__inputs {
    display: flex;
  }
}
</style>
