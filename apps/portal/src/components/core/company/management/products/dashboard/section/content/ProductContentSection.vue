<template>
  <a-panel-section class="product-content-section">
    <a-title :title="$t('company.management.products.dashboard.filterProducts')" size="x-large" />

    <o-form :submit-callback="handleQuerySubmit" :initial-values="initialFormValues">
      <template #body>
        <div class="product-content-section__form-body">
          <m-text-field
            name="name"
            :placeholder="$t('company.management.products.dashboard.searchBarPlaceholder')"
            :validate="false"
            class="product-content-section__name-search"
          />

          <div class="product-content-section__selects">
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
          </div>
        </div>
      </template>

      <template #footer>
        <mass-assign-product-status
          :number-of-products="numberOfProducts"
          @product-status-mass-assignment="handleProductStatusMassAssignment"
        />

        <a-button
          button-type="submit"
          :text="$t('global.showResults')"
          size="x-large"
          class="product-content-section__show-results"
        />
      </template>
    </o-form>

    <product-list v-if="showList" :products="products" @product-changed="handleProductChanged" />

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
import type { PropType } from 'vue'
import { useProductEditorStore } from '@/stores/product/useProductEditorStore'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import MassAssignProductStatus from '../../dialog/MassAssignProductStatus.vue'

const props = defineProps({
  products: {
    type: Array as PropType<Product[]>
  },
  paginationData: {
    type: Object as PropType<Pagination>
  }
})

// Interfaces
interface InitialQueryParams {
  name?: string
  categoryId?: number
  subcategoryId?: number
  status?: number
  verificationStatus?: number
}

// Emits
const emits = defineEmits([
  'product-changed',
  'page-changed',
  'filter',
  'product-status-mass-assignment'
])

// Variables
const { t } = useI18n()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelect>()
const selectedCategoryId = ref<number | null>()
const route = useRoute()
const router = useRouter()
const productEditorStore = useProductEditorStore()
const initialFormValues = ref<InitialQueryParams>()

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
  return props.products?.length
})

const noResultsTranslationKey = computed(() => {
  return props.products?.length ? 'noProductsMatchingFilter' : 'noProducts'
})

const numberOfProducts = computed(() => {
  return props.products ? props.products.length : 0
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

  emits('filter', data)
}

const handleProductStatusMassAssignment = (value: number) => {
  emits('product-status-mass-assignment', value)
}

// Hooks
onBeforeMount(async () => {
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

  &__form-body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-100;
  }

  &__selects {
    display: flex;
    gap: $global-spacing-50;
  }

  &__name-search {
    max-width: 500px;
  }

  &__show-results {
    width: max-content;
    margin-left: auto;
  }
}
</style>
