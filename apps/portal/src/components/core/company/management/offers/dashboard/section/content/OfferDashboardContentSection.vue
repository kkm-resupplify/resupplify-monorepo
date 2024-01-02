<template>
  <a-panel-section class="offer-dashboard-content-section" overflow>
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

    <a-loader v-if="isLoading" />

    <template v-else>
      <offer-dashboard-offer-list
        v-if="showList"
        :offers="offers"
        @offer-changed="handleFetchOffers"
      />

      <a-list-no-results
        v-else
        :text="$t(`company.management.offer.dashboard.list.${noResultsTranslationKey}`)"
      />
    </template>

    <o-pagination
      v-if="paginationData"
      :pagination="paginationData"
      @page-changed="handleFetchOffers"
    />
  </a-panel-section>
</template>

<script setup lang="ts">
import OfferDashboardOfferList from '@/components/core/company/management/offers/dashboard/section/content/list/OfferDashboardOfferList.vue'
import router from '@/routes'
import type { Offer, OfferFiltersParams } from '@sharedInterfaces/offer/OfferInterface'
import { useRoute } from 'vue-router'
import OForm from '@sharedOrganisms/form/OForm.vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import { computed, onBeforeMount, ref } from 'vue'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useI18n } from 'vue-i18n'
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'
import CompanyOffersService from '@/services/company/CompanyOffersService'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'

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
const paginationData = ref<Pagination>()
const offers = ref<Offer[]>([])

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
  { id: 1, text: t('global.active') },
  { id: 0, text: t('global.inactive') }
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

const handleQuerySubmit = async (filters: OfferFiltersParams) => {
  await setQueryParam(route, filters)

  await handleFetchOffers()
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

const handleFetchOffers = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId, subcategoryId, status }
  } = route

  const { data, success, pagination } = await CompanyOffersService.getCompanyOffers({
    page: page as string,
    name: name as string,
    categoryId: categoryId as string,
    subcategoryId: subcategoryId as string,
    status: status as string
  })

  if (success) {
    offers.value = data
    paginationData.value = pagination
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  setInitialFormValues()

  await handleFetchOffers()
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()
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
