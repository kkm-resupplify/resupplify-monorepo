<template>
  <m-stepper-step-content>
    <template #body>
      <o-form
        class="product-editor-add-information-step"
        :initial-values="productEditorStore.productEditorFirstStepData"
        :submit-callback="handleNextStep"
      >
        <template #body>
          <div class="product-editor-add-information-step__body">
            <m-text-field
              name="code"
              input-type="text"
              :label="$t('company.management.products.editor.productCodeLabel')"
              :placeholder="$t('company.management.products.editor.productCodePlaceholder')"
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
              :placeholder="$t('company.management.products.editor.productSubcategoryPlaceholder')"
              :options="productCategorySubcategories"
              :disabled="disableProductSubcategorySelect"
            />

            <!-- <m-select
              name="unit"
              rules="required"
              :label="$t('company.management.products.editor.productUnitLabel')"
              :placeholder="$t('company.management.products.editor.productUnitPlaceholder')"
              :options="staticProductDescriptorsStore.getProductUnits"
            /> -->
          </div>
        </template>

        <template #footer>
          <div class="product-editor-add-information-step__buttons">
            <a-button :text="$t('global.cancel')" size="x-large" color="gradient-danger" />

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

// Emits
const emits = defineEmits(['next-step'])

// Variables
const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelect>()
const productEditorStore = useProductEditorStore()
const selectedCategoryId = ref<number | null>()

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

// Methods
const handleNextStep = (values: ProductEditorFirstStepData) => {
  productEditorStore.setProductEditorFirstStepData(values)
  emits('next-step')
}

const handleProductCategoryChange = (id: number) => {
  subcategoryRef?.value?.clearSelect()
  selectedCategoryId.value = id
}

// Hooks
onBeforeMount(() => {
  selectedCategoryId.value = productEditorStore.getProductCategoryId
})
</script>
<style scoped lang="scss">
.product-editor-add-information-step {
  max-height: 650px;

  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-100;
    justify-content: center;
    width: 100%;
  }
}
</style>
