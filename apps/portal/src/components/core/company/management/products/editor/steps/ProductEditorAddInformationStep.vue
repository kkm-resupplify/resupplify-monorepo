<template>
  <m-stepper-step-content>
    <template #body>
      <div v-if="isLoading" class="product-editor-add-information-step__body">
        implement-loader-here
      </div>

      <o-form
        v-else
        class="product-editor-add-information-step"
        :initial-values="productEditorStore.productEditorFirstStepData"
        :submit-callback="handleNextStep"
      >
        <template #body>
          <div class="product-editor-add-information-step__body">
            <div class="product-editor-add-information-step__body-column">
              <m-text-field
                name="code"
                input-type="text"
                :label="$t('company.management.products.editor.productCodeLabel')"
                :placeholder="$t('company.management.products.editor.productCodePlaceholder')"
                rules="required"
              />

              <m-text-field
                name="producer"
                input-type="text"
                :label="$t('company.management.products.editor.productProducerLabel')"
                :placeholder="$t('company.management.products.editor.productProducerPlaceholder')"
                rules="required"
              />

              <m-select
                name="productCategoryId"
                rules="required"
                :label="$t('company.management.products.editor.productCategoryLabel')"
                :placeholder="$t('company.management.products.editor.productCategoryPlaceholder')"
                :options="staticProductDescriptorsStore.getProductCategories"
                @input-change="handleProductCategoryChange"
              />

              <m-select
                ref="subcategoryRef"
                name="productSubcategoryId"
                rules="required"
                :label="$t('company.management.products.editor.productSubcategoryLabel')"
                :placeholder="
                  $t('company.management.products.editor.productSubcategoryPlaceholder')
                "
                :options="productCategorySubcategories"
                :disabled="disableProductSubcategorySelect"
              />

              <a-image-input
                name="image"
                :label="$t('company.register.form.details.companyLogoLabel')"
                :placeholder="$t('company.register.form.details.companyLogoPlaceholder')"
                rules="required"
              />
            </div>

            <div class="product-editor-add-information-step__body-column">
              <m-select
                name="productUnitId"
                rules="required"
                :label="$t('company.management.products.editor.productUnitLabel')"
                :placeholder="$t('company.management.products.editor.productUnitPlaceholder')"
                :options="productUnitSelectOptions"
              />

              <m-select
                name="status"
                :label="$t('company.management.products.editor.productStatusLabel')"
                :placeholder="$t('company.management.products.editor.productStatusPlaceholder')"
                :options="productStatusSelectOptions"
                rules="required"
              />

              <m-select
                name="productTag"
                :label="$t('company.management.products.editor.productTagsLabel')"
                :placeholder="$t('company.management.products.editor.productTagsPlaceholder')"
                :options="producTagSelectOptions"
                :validate="false"
                @input-change="handleSelectProductTag"
              />

              <product-tag-list
                :product-tags="selectedProductTags"
                show-remove
                @remove="handleRemoveProductTag"
              />
            </div>
          </div>
        </template>

        <template #footer>
          <div class="product-editor-add-information-step__buttons">
            <a-button
              :text="$t('global.cancel')"
              size="x-large"
              color="gradient-danger"
              @click="$emit('previous-step')"
            />

            <a-button :text="$t('global.next')" size="x-large" type="submit" />
          </div>
        </template>
      </o-form>
    </template>
  </m-stepper-step-content>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import { useProductEditorStore } from '@stores/product/useProductEditorStore'
import type { ProductEditorFirstStepData } from '@sharedInterfaces/product/ProductEditorInterface'
import ProductTagList from '@/components/common/product/ProductTagList.vue'
import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import CompanyProductDescriptorsService from '@/services/product/CompanyProductDescriptorsService'
import ProductStatusEnum from '@sharedEnums/product/ProductStatusEnum'
import { useI18n } from 'vue-i18n'

// Emits
const emits = defineEmits(['next-step', 'previous-step'])

// Variables
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelect>()
const productEditorStore = useProductEditorStore()
const selectedCategoryId = ref<number | null>()
const productTags = ref<ProductTag[]>([])
const selectedProductTagIds = ref<number[]>([])
const isLoading = ref(false)
const { t } = useI18n()

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

const productUnitSelectOptions = computed(() => {
  return staticProductDescriptorsStore.getProductUnits.map((unit) => ({
    id: unit.id,
    text: unit.code
  }))
})

const producTagSelectOptions = computed(() => {
  return productTags.value
    .map((productTag) => ({ id: productTag.id, text: productTag.name }))
    .filter(
      (productTag) =>
        !selectedProductTags.value.some(
          (selectedProductTag) => productTag.id === selectedProductTag.id
        )
    )
})

const productStatusSelectOptions = computed(() => {
  return [
    { id: ProductStatusEnum.ACTIVE, text: t('global.active') },
    { id: ProductStatusEnum.INACTIVE, text: t('global.inactive') }
  ]
})

const selectedProductTags = computed(() => {
  return productTags.value.filter((productTag) =>
    selectedProductTagIds.value.includes(productTag.id)
  )
})

// Methods
const handleNextStep = (values: ProductEditorFirstStepData) => {
  values.productTagIds = selectedProductTagIds.value
  productEditorStore.setProductEditorFirstStepData(values)

  emits('next-step')
}

const handleProductCategoryChange = (id: number) => {
  subcategoryRef?.value?.clearSelect()
  selectedCategoryId.value = id
}

const setSelectedCategoryId = () => {
  selectedCategoryId.value = productEditorStore.getProductCategoryId
}

const handleFetchProductTags = async () => {
  isLoading.value = true
  const { success, data } = await CompanyProductDescriptorsService.getProductTags()

  if (success) productTags.value = data

  isLoading.value = false
}

const handleSelectProductTag = (id: number) => {
  const selectedProductTag = productTags.value.find((productTag) => productTag.id === id)
  if (selectedProductTag) selectedProductTagIds.value.push(id)
}

const setSelectedProductTags = () => {
  selectedProductTagIds.value = productEditorStore.getProductTagIds
}

const handleRemoveProductTag = (id: number) => {
  selectedProductTagIds.value = selectedProductTagIds.value.filter(
    (selectedProductTagId) => selectedProductTagId !== id
  )
}

// Hooks
onBeforeMount(async () => {
  await handleFetchProductTags()
  setSelectedCategoryId()
  setSelectedProductTags()
})
</script>

<style scoped lang="scss">
.product-editor-add-information-step {
  &__body {
    display: flex;
    gap: $global-spacing-90;
  }

  &__body-column {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    justify-content: center;

    width: 100%;
  }
}
</style>
