<template>
  <a-panel-section class="warehouse-preview-content-section">
    <o-search-bar
      :placeholder="$t('company.management.warehouse.preview.content.search')"
      :disabled="!hasProducts"
      @search="handleFetchWarehouseProducts"
    />

    <a-line />

    <template v-if="isLoading">implement-list-loader</template>

    <template v-else>
      <warehouse-product-list
        v-if="showList"
        :warehouse-products="warehouseProducts"
        :pagination="paginationData"
        @product-changed="$emit('product-changed')"
      />

      <a-list-no-results
        v-else
        :text="$t(`company.management.warehouse.preview.list.${noResultsTranslationKey}`)"
      />

      <o-pagination :pagination="paginationData" @page-changed="handleFetchWarehouseProducts" />
    </template>
  </a-panel-section>
</template>

<script setup lang="ts">
import WarehouseProductList from '@/components/core/company/management/warehouse/preview/list/WarehouseProductList.vue'

import type { WarehouseProduct } from '@sharedInterfaces/warehouse/WarehouseProductInterface'
import WarehouseService from '@/services/warehouse/WarehouseService'
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
const props = defineProps({
  hasProducts: Boolean
})

// Emits
defineEmits(['product-changed'])

// Variables
const isLoading = ref(false)
const warehouseProducts = ref<WarehouseProduct[]>([])
const route = useRoute()
const paginationData = ref<Pagination>()

// Computed
const warehouseId = computed(() => route.params.id)

const showList = computed(() => {
  return warehouseProducts.value.length > 0
})

const noResultsTranslationKey = computed(() => {
  return props.hasProducts ? 'noProductsMatchingFilter' : 'noProducts'
})

// Methods
const handleFetchWarehouseProducts = async () => {
  isLoading.value = true

  const {
    query: { search, page }
  } = route

  const { data, success, pagination } = await WarehouseService.getWarehouseProducts(
    +warehouseId.value,
    {
      name: search as string,
      page: page as string
    }
  )

  if (success) {
    warehouseProducts.value = data
    paginationData.value = pagination
  }

  isLoading.value = false
}

// Hooks
onMounted(async () => {
  await handleFetchWarehouseProducts()
})
</script>

<style scoped lang="scss">
.warehouse-preview-content-section {
  overflow: hidden;
}
</style>
