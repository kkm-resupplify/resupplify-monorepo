<template>
  <o-form class="order-filters">
    <template #body>
      <div class="order-filters__inputs">
        <m-text-field
          name="name"
          :label="$t('common.order.filters.nameLabel')"
          :placeholder="$t('common.order.filters.namePlaceholder')"
          :validate="false"
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
          name="endedAt"
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
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
import OrderStatusEnum from '@sharedEnums/order/OrderStatusEnum'
import type MSelectItem from '@sharedMolecules/select/items/MSelectItem.vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import { onBeforeMount } from 'vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Variables
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelectItem>()
const selectedCategoryId = ref<number | null>()
const { t } = useI18n()

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

// Hooks
onBeforeMount(async () => {
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()
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
