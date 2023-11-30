<template>
  <a-panel-section class="product-content-section">
    <a-title
      :title="$t('company.management.products.preview.dashboard.filterProducts')"
      size="x-large"
    />

    <!-- <o-search-bar
            :placeholder="$t('company.management.navigation.products.dashboard.searchBarPlaceholder')"
            @search="$emit('search')"
          /> -->

    <div class="product-content-section__selects">
      <m-select
        name="category"
        :placeholder="$t('company.management.products.preview.dashboard.category')"
        :options="productCategories"
        :validate="false"
        @input-change="handleProductCategoryChange"
      />

      <m-select
        ref="subcategoryRef"
        name="subcategory"
        :validate="false"
        :placeholder="$t('company.management.products.preview.dashboard.subcategory')"
        :options="productSubcategories"
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

    <template v-if="isLoading">implement-list-loader</template>

    <template v-else>
      <product-list v-if="showList" :products="products" @product-changed="handleProductChanged" />

      <a-list-no-results
        v-else
        :text="$t(`company.management.products.preview.list.${noResultsTranslationKey}`)"
      />

      <o-pagination :pagination="paginationData" @page-changed="handlePageChanged" />
    </template>
  </a-panel-section>
</template>
<script setup lang="ts">
import { ref, type PropType, computed } from 'vue'
import { useStaticProductDescriptorsStore } from '@/stores/product/useStaticProductDescriptorsStore'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type {
  ProductCategorySelectItem,
  ProductSubcategorySelectItem
} from '@sharedInterfaces/product/ProductInterface'
import ProductList from './list/ProductList.vue'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'

const props = defineProps({
  products: {
    type: Array as PropType<Product[]>
  },
  paginationData: {
    type: Object as PropType<Pagination>
  }
})

// Emits
const emits = defineEmits(['product-changed', 'page-changed'])

const handleProductChanged = () => {
  emits('product-changed')
}

const handlePageChanged = () => {
  emits('page-changed')
}

// Variables
const { t } = useI18n()
const productCategories = ref<ProductCategorySelectItem[]>()
const productSubcategories = ref<ProductSubcategorySelectItem[]>()
const isLoading = ref(false)

const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelect>()

const statuses = ref([
  { id: 1, text: t('global.active') },
  { id: 2, text: t('global.inactive') }
])

const verificationStatuses = ref([
  { id: 1, text: t('global.verified') },
  { id: 2, text: t('global.unverified') }
])

// Computed
const showList = computed(() => {
  return props.products?.length
})

const noResultsTranslationKey = computed(() => {
  return props.products?.length ? 'noProductsMatchingFilter' : 'noProducts'
})

// Methods
const handleFetchProductCategories = async () => {
  const categories = staticProductDescriptorsStore.getProductCategories.map((item) => ({
    id: item.id,
    text: item.name
  }))

  productCategories.value = categories
}

const handleProductCategoryChange = (id: number) => {
  subcategoryRef?.value?.clearSelect()

  const subcategories = staticProductDescriptorsStore.getCategoryAndSubcategories(id)

  productSubcategories.value = subcategories.subcategories.map((item) => ({
    id: item.id,
    text: item.name,
    categoryId: item.categoryId
  }))
}

// Emits
// defineEmits(['search'])

// Hooks
onBeforeMount(async () => {
  await handleFetchProductCategories()
})
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
}
</style>
