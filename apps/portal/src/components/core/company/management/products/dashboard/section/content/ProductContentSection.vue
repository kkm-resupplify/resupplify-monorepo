<template>
  <a-panel-section class="product-content-section">
    <div class="product-content-section__header">
      <a-title :title="$t('company.management.products.dashboard.productList')" size="x-large" />

      <mass-assign-product-status :products="products" @fetch-products="handleFetchProducts" />
    </div>

    <o-form
      ref="form"
      class="product-content-section__filter-form"
      :submit-callback="handleQuerySubmit"
      :initial-values="initialFormValues"
    >
      <template #body>
        <div class="product-content-section__filters">
          <div class="product-content-section__filters-row">
            <m-text-field
              class="product-content-section__name-search"
              name="name"
              :placeholder="$t('company.management.products.dashboard.searchBarPlaceholder')"
              :validate="false"
              append-icon-on="close"
              @append-icon-click="handleClearSearch"
            />

            <m-select
              name="categoryId"
              :placeholder="$t('company.management.products.dashboard.category')"
              :options="staticProductDescriptorsStore.getProductCategories"
              :validate="false"
              width="20%"
              @input-change="handleProductCategoryChange"
            />

            <m-select
              ref="subcategoryRef"
              name="subcategoryId"
              :placeholder="$t('company.management.products.dashboard.subcategory')"
              :options="productCategorySubcategories"
              :validate="false"
              width="20%"
            />

            <m-select
              name="status"
              :placeholder="$t('company.management.products.dashboard.status')"
              :options="statuses"
              :validate="false"
              width="20%"
            />

            <m-select
              name="verificationStatus"
              :placeholder="$t('company.management.products.dashboard.verificationStatus')"
              :options="verificationStatuses"
              :validate="false"
              width="20%"
            />
          </div>

          <div class="product-content-section__filters-row">
            <a-button button-type="submit" :text="$t('global.search')" size="large" />

            <a-button :text="$t('global.reset')" size="x-large" @click="handleResetFilters" />
          </div>
        </div>
      </template>
    </o-form>

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <template v-else>
      <product-list v-if="showList" :products="products" @product-changed="handleFetchProducts" />

      <a-list-no-results
        v-else
        :text="$t(`company.management.products.list.${noResultsTranslationKey}`)"
      />
    </template>

    <o-pagination :pagination="paginationData" @page-changed="handleFetchProducts" />
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
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import CompanyProductsService from '@/services/product/CompanyProductsService'
import OForm from '@sharedOrganisms/form/OForm.vue'
import MassAssignProductStatus from '@/components/core/company/management/products/dashboard/dialog/MassAssignProductStatus.vue'

// Interfaces
interface InitialQueryParams {
  page?: string
  name?: string
  categoryId?: number
  subcategoryId?: number
  status?: number
  verificationStatus?: number
}

// Variables
const products = ref<Product[]>([])
const isLoading = ref(false)
const { t } = useI18n()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelect>()
const selectedCategoryId = ref<number | null>()
const route = useRoute()
const router = useRouter()
const initialFormValues = ref<InitialQueryParams>()
const paginationData = ref<Pagination>()
const form = ref<typeof OForm>()

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
    : staticProductDescriptorsStore.getProductSubcategories
})

const showList = computed(() => {
  return products.value.length
})

const filtersUsed = computed(() => {
  const {
    query: { page, name, categoryId, subcategoryId, status, verificationStatus }
  } = route

  return !!(page !== '1' || (name ?? categoryId ?? subcategoryId ?? status ?? verificationStatus))
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

const handleClearSearch = async () => {
  await router.replace({ query: { ...route.query, name: '' } })
  form.value?.resetField('name', null)
}

const handleResetFilters = async () => {
  form.value?.handleReset()
  await handleQuerySubmit({
    page: '1',
    name: undefined,
    categoryId: undefined,
    subcategoryId: undefined,
    status: undefined,
    verificationStatus: undefined
  })
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

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__filters {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }

  &__filters-row {
    display: flex;
    gap: $global-spacing-30;
  }

  &__name-search {
    max-width: 500px;
  }
}
</style>
