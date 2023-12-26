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
          :label="$t('common.offer.filters.nameLabel')"
          :placeholder="$t('common.offer.filters.namePlaceholder')"
          :validate="false"
          append-icon-on="close"
          @append-icon-click="handleClearSearch"
        />

        <m-select
          name="categoryId"
          :label="$t('common.offer.filters.categoryLabel')"
          :placeholder="$t('common.offer.filters.categoryPlaceholder')"
          :options="staticProductDescriptorsStore.getProductCategories"
          :validate="false"
          @input-change="handleProductCategoryChange"
        />

        <m-select
          ref="subcategoryRef"
          name="subcategoryId"
          :label="$t('common.offer.filters.subcategoryLabel')"
          :placeholder="$t('common.offer.filters.subcategoryPlaceholder')"
          :options="productCategorySubcategories"
          :validate="false"
        />

        <m-select
          name="endedAt"
          :label="$t('common.offer.filters.endDateLabel')"
          :placeholder="$t('common.offer.filters.endDatePlaceholder')"
          :options="endDateFiltersOptions"
          :validate="false"
        />

        <m-select
          name="price"
          :label="$t('common.offer.filters.priceLabel')"
          :placeholder="$t('common.offer.filters.pricePlaceholder')"
          :options="priceFiltersOptions"
          :validate="false"
        />
      </div>
    </template>

    <template #footer>
      <div class="offer-filters__buttons">
        <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

        <a-button :text="$t('global.reset')" size="x-large" @click="handleResetFilters" />
      </div>
    </template>
  </o-form>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'
import { useRoute } from 'vue-router'
import router from '@/routes'
import type OForm from '@sharedOrganisms/form/OForm.vue'
import { useI18n } from 'vue-i18n'
import type { OfferFiltersParams } from '@sharedInterfaces/offer/OfferInterface'
import OfferPriceOrderEnum from '@sharedEnums/offer/OfferPriceOrderEnum'
import OfferEndDateOrderEnum from '@sharedEnums/offer/OfferEndDateOrderEnum'

// Emits
const emits = defineEmits(['filter'])

// Variables
const subcategoryRef = ref<typeof MSelect>()
const selectedCategoryId = ref<number | null>()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const initialFilterParams = ref<OfferFiltersParams>()
const route = useRoute()
const { setQueryParam } = useQueryFilter()
const form = ref<typeof OForm>()
const { t } = useI18n()

// Computed
const priceFiltersOptions = computed(() =>
  OfferPriceOrderEnum.getAllFields().map((typeName) => ({
    id: `${OfferPriceOrderEnum[typeName as keyof OfferPriceOrderEnum]}`,
    text: t(`global.${typeName.toLowerCase()}`)
  }))
)

const endDateFiltersOptions = computed(() =>
  OfferEndDateOrderEnum.getAllFields().map((typeName) => ({
    id: `${OfferEndDateOrderEnum[typeName as keyof OfferEndDateOrderEnum]}`,
    text: t(`global.${typeName.toLowerCase()}`)
  }))
)

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

const handleClearSearch = async () => {
  await router.replace({ query: { ...route.query, name: '' } })
  form.value?.resetField('name', null)
}

const setInitialFormValues = () => {
  initialFilterParams.value = {
    name: route.query.name ? route.query.name.toString() : undefined,
    categoryId: route.query.categoryId ? +route.query.categoryId : undefined,
    subcategoryId: route.query.subcategoryId ? +route.query.subcategoryId : undefined,
    status: route.query.status ? +route.query.status : undefined,
    dateEnd: route.query.dateEnd ? route.query.dateEnd.toString() : undefined,
    price: route.query.price ? route.query.price.toString() : undefined
  }
}

const handleResetFilters = async () => {
  form.value?.handleReset()
  initialFilterParams.value = {
    name: undefined,
    categoryId: undefined,
    subcategoryId: undefined,
    status: undefined,
    dateEnd: undefined,
    price: undefined
  }

  await handleQuerySubmit({
    page: '1',
    name: undefined,
    categoryId: undefined,
    subcategoryId: undefined,
    status: undefined,
    dateEnd: undefined,
    price: undefined
  })
}

const handleQuerySubmit = async (filters: OfferFiltersParams) => {
  const {
    query: { page }
  } = route
  await setQueryParam(route, filters)

  if (page) emits('filter', { page, ...filters })
  else emits('filter', { page: '1', ...filters })
}

// Hooks
onBeforeMount(async () => {
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()

  setInitialFormValues()
})
</script>

<style scoped lang="scss">
.offer-filters {
  &__inputs {
    display: flex;
    gap: $global-spacing-30;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-30;
  }
}
</style>
