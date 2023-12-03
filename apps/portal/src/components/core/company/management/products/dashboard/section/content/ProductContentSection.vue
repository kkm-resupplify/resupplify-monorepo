<template>
  <a-panel-section class="product-content-section">
    <a-title :title="$t('company.management.products.dashboard.filterProducts')" size="x-large" />

    <o-form
      class="product-content-section__filter-form"
      :submit-callback="handleQuerySubmit"
      :initial-values="initialFormValues"
    >
      <template #body>
        <div class="product-content-section__filters">
          <div class="product-content-section__filters-row">
            <m-text-field
              name="name"
              :placeholder="$t('company.management.products.dashboard.searchBarPlaceholder')"
              :validate="false"
              class="product-content-section__name-search"
            />

            <m-select
              name="categoryId"
              :placeholder="$t('company.management.products.dashboard.category')"
              :options="staticProductDescriptorsStore.getProductCategories"
              :validate="false"
              @input-change="handleProductCategoryChange"
            />

            <m-select
              ref="subcategoryRef"
              name="subcategoryId"
              :placeholder="$t('company.management.products.dashboard.subcategory')"
              :options="productCategorySubcategories"
              :validate="false"
              :disabled="disableProductSubcategorySelect"
            />
          </div>

          <div
            class="product-content-section__filters-row product-content-section__filters-row--short"
          >
            <m-select
              name="status"
              :placeholder="$t('company.management.products.dashboard.status')"
              :options="statuses"
              :validate="false"
            />

            <m-select
              name="verificationStatus"
              :placeholder="$t('company.management.products.dashboard.verificationStatus')"
              :options="verificationStatuses"
              :validate="false"
            />

            <a-button button-type="submit" :text="$t('global.search')" size="x-large" />
          </div>
        </div>
      </template>
    </o-form>

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <product-list
      v-else-if="showList"
      :products="products"
      @product-changed="handleProductChanged"
    />

    <a-list-no-results
      v-else
      :text="$t(`company.management.products.list.${noResultsTranslationKey}`)"
    />

    <o-pagination :pagination="paginationData" @page-changed="handlePageChanged" />
  </a-panel-section>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, computed } from 'vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useI18n } from 'vue-i18n'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import ProductList from './list/ProductList.vue'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import { useRoute, useRouter } from 'vue-router'
import { useProductEditorStore } from '@/stores/product/useProductEditorStore'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import CompanyProductsService from '@/services/product/CompanyProductsService'

// Interfaces
interface InitialQueryParams {
  name?: string
  categoryId?: number
  subcategoryId?: number
  status?: number
  verificationStatus?: number
}

// Emits
const emits = defineEmits(['product-changed', 'page-changed', 'filter'])

// Variables
const products = ref<Product[]>([])
const isLoading = ref(false)
const { t } = useI18n()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelect>()
const selectedCategoryId = ref<number | null>()
const route = useRoute()
const router = useRouter()
const productEditorStore = useProductEditorStore()
const initialFormValues = ref<InitialQueryParams>()
const paginationData = ref<Pagination>()

const statuses = ref([
  { id: 0, text: t('global.inactive') },
  { id: 1, text: t('global.active') }
])

const verificationStatuses = ref([
  { id: 0, text: t('global.unverified') },
  { id: 1, text: t('global.verified') }
])

// Computed
const productCategorySubcategories = computed(() => {
  return selectedCategoryId.value
    ? staticProductDescriptorsStore.getProductSubcategories.filter(
        (subcategory) => subcategory.categoryId === selectedCategoryId.value
      )
    : []
})

const disableProductSubcategorySelect = computed(() => {
  return (
    productCategorySubcategories.value.length === 0 &&
    productEditorStore.getProductSubcategoryId === null
  )
})

const showList = computed(() => {
  return products.value.length
})

const filtersUsed = computed(() => {
  const {
    query: { name, categoryId, subcategoryId, status, verificationStatus }
  } = route

  return !!(name || categoryId || subcategoryId || status || verificationStatus)
})

const noResultsTranslationKey = computed(() => {
  return products.value.length === 0 && filtersUsed.value
    ? 'noProductsMatchingFilter'
    : 'noProducts'
})

// Methods
const handleProductCategoryChange = (id: number) => {
  subcategoryRef?.value?.clearSelect()
  selectedCategoryId.value = id
}

const setInitialFormValues = () => {
  initialFormValues.value = {
    name: route.query.name ? route.query.name.toString() : undefined,
    categoryId: route.query.categoryId ? +route.query.categoryId : undefined,
    subcategoryId: route.query.subcategoryId ? +route.query.subcategoryId : undefined,
    status: route.query.status ? +route.query.status : undefined,
    verificationStatus: route.query.verificationStatus ? +route.query.verificationStatus : undefined
  }

  selectedCategoryId.value = route.query.categoryId ? +route.query.categoryId : null
}

const setQueryParam = async (data: InitialQueryParams | undefined) => {
  await router.replace({ query: { ...route.query, ...data } })
}

const handleProductChanged = () => {
  emits('product-changed')
}

const handlePageChanged = () => {
  emits('page-changed')
}

const handleQuerySubmit = async (data: InitialQueryParams) => {
  await setQueryParam(data)

  handleFetchProducts()
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
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()
  setInitialFormValues()

  await handleFetchProducts()
})
</script>

<style scoped lang="scss">
.product-content-section {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;

  height: 100%;

  :deep(.o-form__body) {
    flex: 0;
  }

  :deep(.o-form) {
    flex: 0;
  }

  &__filters {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }

  &__filters-row {
    display: flex;
    flex-direction: row;
    gap: $global-spacing-30;

    &--short {
      width: 50%;
    }
  }

  &__name-search {
    max-width: 500px;
  }
}
</style>
