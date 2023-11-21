<template>
  <m-stepper-step-content>
    <template #body>
      <o-form class="product-editor-add-information-step">
        <template #body>
          <div class="product-editor-add-information-step__body">
            <a-title
              :title="$t('company.management.products.editor.informationTitle')"
              rules="required"
              size="xx-large"
            />

            <m-text-field
              name="name"
              input-type="text"
              rules="required"
              :label="$t('company.management.products.editor.productNameLabel')"
              :placeholder="$t('company.management.products.editor.productNamePlaceholder')"
            />

            <m-select
              name="category"
              rules="required"
              :label="$t('company.management.products.editor.productCategoryLabel')"
              :placeholder="$t('company.management.products.editor.productCategoryPlaceholder')"
              :options="productCategories"
              @input-change="handleProductCategoryChange"
            />

            <m-select
              ref="subcategoryRef"
              name="subcategory"
              rules="required"
              :label="$t('company.management.products.editor.productSubcategoryLabel')"
              :placeholder="$t('company.management.products.editor.productSubcategoryPlaceholder')"
              :options="productSubcategories"
            />

            <m-select
              name="unit"
              rules="required"
              :label="$t('company.management.products.editor.productUnitLabel')"
              :placeholder="$t('company.management.products.editor.productUnitPlaceholder')"
              :options="productUnits"
            />

            <m-select
              name="tags"
              rules="required"
              :label="$t('company.management.products.editor.productTagsLabel')"
              :placeholder="$t('company.management.products.editor.productTagsPlaceholder')"
              :options="productTags"
            />

            <m-text-area
              name="description"
              rules="required|min:16|max:255"
              :label="$t('company.management.products.editor.productDescriptionLabel')"
              :placeholder="$t('company.management.products.editor.productDescriptionPlaceholder')"
            />
          </div>
        </template>

        <template #footer>
          <div class="product-editor-add-information-step__buttons">
            <a-button :text="$t('global.cancel')" size="x-large" color="gradient-danger" />

            <a-button :text="$t('global.next')" size="x-large" @click="handleNextStep" />
          </div>
        </template>
      </o-form>
    </template>
  </m-stepper-step-content>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'
import MSelect from '@sharedMolecules/select/MSelect.vue'

// Interfaces
interface ProductCategorySelectItem {
  id: number
  text: string
}

interface ProductSubcategorySelectItem {
  id: number
  text: string
  categoryId: number
}

interface ProductUnitSelectItem {
  id: number
  text: string
}

interface ProductTagsSelectItem {
  id: number
  text: string
}

// Emits
const emits = defineEmits(['next-step'])

// Variables
const productCategories = ref<ProductCategorySelectItem[]>()
const productSubcategories = ref<ProductSubcategorySelectItem[]>()
const productUnits = ref<ProductUnitSelectItem[]>()
const productTags = ref<ProductTagsSelectItem[]>()

const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
const subcategoryRef = ref<typeof MSelect>()

// Methods
const handleNextStep = () => {
  emits('next-step')
}

const handleFetchProductCategories = async () => {
  const categories = staticProductDescriptorsStore.getProductCategories.map((item) => ({
    id: item.id,
    text: item.name
  }))

  productCategories.value = categories
}

const handleFetchProductUnits = async () => {
  const units = staticProductDescriptorsStore.getProductUnits.map((item) => ({
    id: item.id,
    text: item.code
  }))

  productUnits.value = units
}

const handleFetchProductTags = async () => {
  const tags = staticProductDescriptorsStore.getProductTags.map((item) => ({
    id: item.id,
    text: item.name
  }))

  productTags.value = tags
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

// Hooks
onBeforeMount(async () => {
  await handleFetchProductCategories()
  await handleFetchProductUnits()
  await handleFetchProductTags()
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
