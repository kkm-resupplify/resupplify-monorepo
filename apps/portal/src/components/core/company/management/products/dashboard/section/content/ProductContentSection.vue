<template>
  <a-panel-section class="product-content-section">
    <a-title :title="$t('company.management.products.dashboard.filterProducts')" size="x-large" />

    <!-- <o-search-bar
            :placeholder="$t('company.management.navigation.products.dashboard.searchBarPlaceholder')"
            @search="$emit('search')"
          /> -->

    <o-form :submit-callback="handleQuerySubmit" :initial-values="initialFormValues">
      <template #body>
        <div class="product-content-section__selects">
          <m-select
            name="categoryId"
            :placeholder="$t('company.management.products.dashboard.category')"
            :options="productCategories"
            :validate="false"
            @input-change="handleProductCategoryChange"
          />

          <m-select
            ref="subcategoryRef"
            name="subcategoryId"
            :placeholder="$t('company.management.products.dashboard.subcategory')"
            :options="productSubcategories"
            :validate="false"
          />

          <m-select
            name="status"
            :validate="false"
            :placeholder="$t('company.management.products.dashboard.status')"
            :options="statuses"
          />

          <m-select
            name="verificationStatus"
            :validate="false"
            :placeholder="$t('company.management.products.dashboard.verificationStatus')"
            :options="verificationStatuses"
          />
        </div>
      </template>

      <template #footer>
        <a-button
          button-type="submit"
          :text="$t('global.showResults')"
          size="x-large"
          class="product-content-section__show-results"
        />
      </template>
    </o-form>

    <template v-if="isLoading">implement-list-loader</template>

    <template v-else>
      <product-list v-if="showList" :products="products" @product-changed="handleProductChanged" />

      <a-list-no-results
        v-else
        :text="$t(`company.management.products.list.${noResultsTranslationKey}`)"
      />

      <!-- <o-search-bar
        :placeholder="$t('company.management.navigation.products.dashboard.searchBarPlaceholder')"
        @search="$emit('search')"
      /> -->

      <div class="product-content-section__selects">
        <m-select
          name="category"
          :placeholder="$t('company.management.products.preview.dashboard.category')"
          :options="staticProductDescriptorsStore.getProductCategories"
          :validate="false"
          @input-change="handleProductCategoryChange"
        />

        <m-select
          ref="subcategoryRef"
          name="subcategory"
          :validate="false"
          :placeholder="$t('company.management.products.preview.dashboard.subcategory')"
          :options="staticProductDescriptorsStore.getProductSubcategories"
        />

        <m-select
          name="status"
          :validate="false"
          :placeholder="$t('company.management.products.preview.dashboard.status')"
          :options="statuses"
        />

        <m-select
          name="verificationStatus"
          :validate="false"
          :placeholder="$t('company.management.products.preview.dashboard.verificationStatus')"
          :options="verificationStatuses"
        />
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useI18n } from 'vue-i18n'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type {
  ProductCategorySelectItem,
  ProductSubcategorySelectItem
} from '@sharedInterfaces/product/ProductInterface'
import ProductList from './list/ProductList.vue'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  products: {
    type: Array as PropType<Product[]>
  },
  paginationData: {
    type: Object as PropType<Pagination>
  }
})

// Interfaces
interface QueryParams {
  categoryId?: number
  subcategoryId?: number
  status?: number
  verificationStatus?: number
}

// Emits
const emits = defineEmits(['product-changed', 'page-changed', 'filter'])
Changed
// Variables
const { t } = useI18n()
const staticProductDescriptorsSChangedtore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelect>()
const route = useRoute()
const router = useRouter()
const subcategoryInitialized = ref(false)

const statuses = ref([
  { id: 0, text: t('global.active') },
  { id: 1, text: t('global.inactive') }
])

const verificationStatuses = ref([
  { id: 0, text: t('global.unverified') },
  { id: 1, text: t('global.verified') }
])

// Computed
const showList = computed(() => {
  return props.products?.length
})

const noResultsTranslationKey = computed(() => {
  return props.products?.length ? 'noProductsMatchingFilter' : 'noProducts'
})

const initialFormValues = computed(() => {
  const categoryId = route.query.categoryId && Number(route.query.categoryId)
  const subcategoryId = route.query.subcategoryId && Number(route.query.subcategoryId)
  const status = route.query.status && Number(route.query.status)
  const verificationStatus =
    route.query.verificationStatus && Number(route.query.verificationStatus)

  return { categoryId, subcategoryId, status, verificationStatus }
})

// Methods
const handleProductCategoryChange = (id: number) => {
  subcategoryRef?.value?.clearSelect()
}

const setQueryParam = async (data: QueryParams | undefined) => {
  await router.replace({ query: { ...route.query, ...data } })
}

const handleProductChanged = () => {
  emits('product-changed')
}

const handlePageChanged = () => {
  emits('page-changed')
}

const handleQuerySubmit = async (data: QueryParams) => {
  await setQueryParam(data)

  emits('filter', data)
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProductCategories()
})

watch(
  () => route.query,
  (newQuery) => {
    const categoryId = newQuery.categoryId && Number(newQuery.categoryId)
    const subcategoryId = newQuery.subcategoryId && Number(newQuery.subcategoryId)

    if (categoryId && subcategoryId && !subcategoryInitialized.value) {
      handleProductCategoryChange(categoryId)
      subcategoryInitialized.value = true
    }
  },
  { immediate: true }
)
</script>
<style scoped lang="scss">
.product-content-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;

  &__selects {
    display: flex;
    gap: $global-spacing-50;
  }

  &__show-results {
    width: max-content;
    margin-left: auto;
  }
}
</style>
