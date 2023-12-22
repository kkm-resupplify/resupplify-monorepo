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
          @append-icon-click="handleClearSearch"
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
      <div class="offer-filters__buttons">
        <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

        <a-button :text="$t('global.reset')" size="x-large" @click="handleResetFilters" />
      </div>
    </template>
  </o-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import { computed } from 'vue'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import { onBeforeMount } from 'vue'
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'
import { useRoute } from 'vue-router'
import router from '@/routes'
import type OForm from '@sharedOrganisms/form/OForm.vue'

// Interfaces
interface OfferFilterValues {
  page?: string
  name?: string
  categoryId?: number
  subcategoryId?: number
}

// Emits
const emits = defineEmits(['filter'])

// Variables
const subcategoryRef = ref<typeof MSelect>()
const selectedCategoryId = ref<number | null>()
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const initialFilterParams = ref<OfferFilterValues>()
const route = useRoute()
const { setQueryParam } = useQueryFilter()
const form = ref<typeof OForm>()

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

const handleClearSearch = async () => {
  await router.replace({ query: { ...route.query, name: '' } })
  form.value?.resetField('name', null)
}

const setInitialFormValues = () => {
  initialFilterParams.value = {
    name: route.query.name ? route.query.name.toString() : undefined,
    categoryId: route.query.categoryId ? +route.query.categoryId : undefined,
    subcategoryId: route.query.subcategoryId ? +route.query.subcategoryId : undefined
  }
}

const handleResetFilters = async () => {
  form.value?.handleReset()
  initialFilterParams.value = {
    name: undefined,
    categoryId: undefined,
    subcategoryId: undefined
  }

  await handleQuerySubmit({
    page: '1',
    name: undefined,
    categoryId: undefined,
    subcategoryId: undefined
  })
}

const handleQuerySubmit = async (data: OfferFilterValues) => {
  await setQueryParam(route, data)

  emits('filter', data)
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
