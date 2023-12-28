<template>
  <o-form
    ref="form"
    class="order-filters"
    :submit-callback="handleQuerySubmit"
    :initial-values="initialFilterParams"
  >
    <template #body>
      <div class="order-filters__inputs">
        <m-text-field
          name="name"
          :label="$t('common.order.filters.nameLabel')"
          :placeholder="$t('common.order.filters.namePlaceholder')"
          :validate="false"
          append-icon-on="close"
          @append-icon-click="handleClearSearch"
        />

        <m-select
          name="categoryId"
          :label="$t('common.order.filters.categoryLabel')"
          :placeholder="$t('common.order.filters.categoryPlaceholder')"
          :options="staticProductDescriptorsStore.getProductCategories"
          :validate="false"
          class="xd"
          @input-change="handleProductCategoryChange"
        />

        <m-select
          ref="subcategoryRef"
          name="subcategoryId"
          :label="$t('common.order.filters.subcategoryLabel')"
          :placeholder="$t('common.order.filters.subcategoryPlaceholder')"
          :options="productCategorySubcategories"
          :validate="false"
        />

        <m-select
          name="status"
          :label="$t('common.order.filters.statusLabel')"
          :placeholder="$t('common.order.filters.statusPlaceholder')"
          :options="statusFiltersOptions"
          :validate="false"
        />
      </div>
    </template>

    <template #footer>
      <div class="order-filters__buttons">
        <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

        <a-button :text="$t('global.reset')" size="x-large" />
      </div>
    </template>
  </o-form>
</template>

<script setup lang="ts">
import router from '@/routes'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'
import OrderStatusEnum from '@sharedEnums/order/OrderStatusEnum'
import type { OrderFiltersParams } from '@sharedInterfaces/order/OrderInterface'
import type MSelectItem from '@sharedMolecules/select/items/MSelectItem.vue'
import type OFormVue from '@sharedOrganisms/form/OForm.vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import { onBeforeMount, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

// Emits
const emits = defineEmits(['filter'])

// Variables
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelectItem>()
const selectedCategoryId = ref<number | null>()
const route = useRoute()
const initialFilterParams = ref<OrderFiltersParams>()
const { setQueryParam } = useQueryFilter()
const { t } = useI18n()
const form = ref<typeof OFormVue>()

// Computed
const productCategorySubcategories = computed(() => {
  return selectedCategoryId.value
    ? staticProductDescriptorsStore.getProductSubcategories.filter(
        (subcategory) => subcategory.categoryId === selectedCategoryId.value
      )
    : staticProductDescriptorsStore.getProductSubcategories
})

const statusFiltersOptions = computed(() =>
  OrderStatusEnum.getAllFields().map((typeName) => ({
    id: `${OrderStatusEnum[typeName as keyof OrderStatusEnum]}`,
    text: t(`company.management.order.status.${OrderStatusEnum[typeName as keyof OrderStatusEnum]}`)
  }))
)

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
    status: route.query.status ? route.query.status.toString() : undefined
  }
}

const handleQuerySubmit = async (filters: OrderFiltersParams) => {
  await setQueryParam(route, filters)

  emits('filter')
}

// Hooks
onBeforeMount(async () => {
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()

  setInitialFormValues()
})
</script>

<style scoped lang="scss">
.order-filters {
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
