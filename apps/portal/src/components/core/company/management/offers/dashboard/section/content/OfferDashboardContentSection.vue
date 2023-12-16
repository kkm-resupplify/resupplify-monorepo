<template>
  <a-panel-section class="offer-dashboard-content-section">
    <o-form
      ref="form"
      class="product-content-section__filter-form"
      :submit-callback="handleQuerySubmit"
      :initial-values="initialFilterParams"
    >
      <template #body>
        <div class="offer-dashboard-content-section__filters">
          <div class="offer-dashboard-content-section__filters-row">
            <m-text-field
              class="offer-dashboard-content-section__name-search"
              name="name"
              :placeholder="$t('company.management.offer.dashboard.searchBarPlaceholder')"
              :validate="false"
              append-icon-on="close"
              @append-icon-click="handleClearSearch"
            />

            <m-select
              name="categoryId"
              :placeholder="$t('company.management.offer.dashboard.productCategoryPlaceholder')"
              :options="staticProductDescriptorsStore.getProductCategories"
              :validate="false"
              width="25%"
              @input-change="handleProductCategoryChange"
            />

            <m-select
              name="subcategoryId"
              :placeholder="$t('company.management.offer.dashboard.productSubcategoryPlaceholder')"
              :options="productCategorySubcategories"
              :validate="false"
              width="25%"
            />

            <m-select
              name="status"
              :placeholder="$t('company.management.offer.dashboard.offerStatusPlaceholder')"
              :validate="false"
              :options="statuses"
              width="25%"
            />
          </div>

          <div class="offer-dashboard-content-section__filters-row">
            <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

            <a-button :text="$t('global.reset')" size="x-large" @click="handleResetFilters" />
          </div>
        </div>
      </template>
    </o-form>

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <template v-else>
      <offer-dashboard-offer-list v-if="showList" :offers="offers" />

      <a-list-no-results
        v-else
        :text="$t(`company.management.offer.dashboard.list.${noResultsTranslationKey}`)"
      />
    </template>
  </a-panel-section>
</template>

<script setup lang="ts">
import OfferDashboardOfferList from '@/components/core/company/management/offers/dashboard/section/content/list/OfferDashboardOfferList.vue'
import router from '@/routes'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import OForm from '@sharedOrganisms/form/OForm.vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import { computed } from 'vue'
import { onBeforeMount } from 'vue'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useI18n } from 'vue-i18n'
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'

// Interfaces
interface OfferFiltersParams {
  page?: string
  name?: string
  categoryId?: number
  subcategoryId?: number
  status?: number
}

// Variables
const route = useRoute()
const form = ref<typeof OForm>()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const selectedCategoryId = ref<number | null>()
const isLoading = ref(false)
const { setQueryParam } = useQueryFilter()
const initialFilterParams = ref<OfferFiltersParams>()
const subcategoryRef = ref<typeof MSelect>()
const { t } = useI18n()

const offers = ref<Offer[]>([
  {
    id: 1,
    status: 0,
    product: {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      producer: 'Producer 1',
      code: 'Code 1',
      status: 1,
      verificationStatus: 1,
      companyId: 1,
      productUnit: {
        id: 1,
        code: 'Unit Code 1'
      },
      productSubcategory: {
        id: 1,
        name: 'Subcategory 1',
        categoryId: 1
      },
      productCategory: {
        id: 1,
        name: 'Category 1'
      },
      productTags: [
        {
          id: 1,
          slug: 'Slug 1',
          name: 'Tag 1',
          color: 'Color 1'
        },
        {
          id: 2,
          slug: 'Slug 2',
          name: 'Tag 2',
          color: 'Color 2'
        }
      ],
      translations: [
        {
          languageId: 1,
          name: 'Name in Language 1',
          description: 'Description in Language 1'
        },
        {
          languageId: 2,
          name: 'Name in Language 2',
          description: 'Description in Language 2'
        }
      ],
      quantity: 10,
      netPrice: 100,
      supply: 5
    }
  },
  {
    id: 2,
    status: 0,
    product: {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      producer: 'Producer 2',
      code: 'Code 2',
      status: 2,
      verificationStatus: 2,
      companyId: 2,
      productUnit: {
        id: 2,
        code: 'Unit Code 2'
      },
      productSubcategory: {
        id: 2,
        name: 'Subcategory 2',
        categoryId: 2
      },
      productCategory: {
        id: 2,
        name: 'Category 2'
      },
      productTags: [
        {
          id: 3,
          slug: 'Slug 3',
          name: 'Tag 3',
          color: 'Color 3'
        },
        {
          id: 4,
          slug: 'Slug 4',
          name: 'Tag 4',
          color: 'Color 4'
        }
      ],
      translations: [
        {
          languageId: 3,
          name: 'Name in Language 3',
          description: 'Description in Language 3'
        },
        {
          languageId: 4,
          name: 'Name in Language 4',
          description: 'Description in Language 4'
        }
      ],
      quantity: 20,
      netPrice: 200,
      supply: 10
    }
  },
  {
    id: 3,
    status: 1,
    product: {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      producer: 'Producer 3',
      code: 'Code 3',
      status: 1,
      verificationStatus: 1,
      companyId: 3,
      productUnit: {
        id: 3,
        code: 'Unit Code 3'
      },
      productSubcategory: {
        id: 3,
        name: 'Subcategory 3',
        categoryId: 3
      },
      productCategory: {
        id: 3,
        name: 'Category 3'
      },
      productTags: [
        {
          id: 5,
          slug: 'Slug 5',
          name: 'Tag 5',
          color: 'Color 5'
        },
        {
          id: 6,
          slug: 'Slug 6',
          name: 'Tag 6',
          color: 'Color 6'
        }
      ],
      translations: [
        {
          languageId: 5,
          name: 'Name in Language 5',
          description: 'Description in Language 5'
        },
        {
          languageId: 6,
          name: 'Name in Language 6',
          description: 'Description in Language 6'
        }
      ],
      quantity: 30,
      netPrice: 300,
      supply: 15
    }
  }
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
  return offers.value.length > 0
})

const statuses = computed(() => [
  { id: 0, text: t('global.inactive') },
  { id: 1, text: t('global.active') }
])

const filtersUsed = computed(() => {
  const {
    query: { page, name, categoryId, subcategoryId, status }
  } = route

  return !!(page !== '1' || (name ?? categoryId ?? subcategoryId ?? status))
})

const noResultsTranslationKey = computed(() => {
  return offers.value.length === 0 && filtersUsed.value ? 'noOffersMatchingFilter' : 'noOffers'
})

// Methods
const handleClearSearch = async () => {
  await router.replace({ query: { ...route.query, name: '' } })
  form.value?.resetField('name', null)
}

const handleProductCategoryChange = (id: number) => {
  subcategoryRef?.value?.clearSelect()
  selectedCategoryId.value = id
}

const setInitialFormValues = () => {
  initialFilterParams.value = {
    name: route.query.name ? route.query.name.toString() : undefined,
    categoryId: route.query.categoryId ? Number(route.query.categoryId) : undefined,
    subcategoryId: route.query.subcategoryId ? Number(route.query.subcategoryId) : undefined,
    status: route.query.status ? Number(route.query.status) : undefined
  }
}

const handleQuerySubmit = async (data: OfferFiltersParams) => {
  await setQueryParam(route, data)
}

const handleResetFilters = async () => {
  form.value?.handleReset()
  initialFilterParams.value = {
    name: undefined,
    categoryId: undefined,
    subcategoryId: undefined,
    status: undefined
  }

  await handleQuerySubmit({
    page: '1',
    name: undefined,
    categoryId: undefined,
    subcategoryId: undefined,
    status: undefined
  })
}

// Hooks
onBeforeMount(async () => {
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()

  setInitialFormValues()
})
</script>

<style lang="scss" scoped>
.offer-dashboard-content-section {
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
