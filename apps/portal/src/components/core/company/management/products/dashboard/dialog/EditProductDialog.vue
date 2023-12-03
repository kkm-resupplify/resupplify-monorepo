<template>
  <m-dialog
    ref="dialogRef"
    :title="product.name"
    @open="setProductEditorData"
    @close="productEditorStore.$reset()"
  >
    <template #activator>
      <a-icon icon="more_vert" size="xx-large" hoverable />
    </template>

    <product-editor-stepper />
  </m-dialog>
</template>

<script setup lang="ts">
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { ref, type PropType, computed, watch } from 'vue'
import { useProductStatus } from '@composables/product/useProductStatus'
import ProductEditorStepper from '@/components/core/company/management/products/editor/ProductEditorStepper.vue'
import { useProductEditorStore } from '@stores/product/useProductEditorStore'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

// Emits
const emits = defineEmits(['product-changed'])

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)
const productEditorStore = useProductEditorStore()

// Computed
const productEditorFirstStepData = computed(() => {
  const { product } = props

  return {
    id: product.id,
    producer: product.producer,
    code: product.code,
    productUnitId: product.productUnit.id,
    productCategoryId: product.productCategory.id,
    productSubcategoryId: product.productSubcategory.id,
    productTagIds: product.productTags.flatMap((tag) => tag.id)
  }
})

// Methods
const setProductEditorData = () => {
  productEditorStore.setProductEditorFirstStepData(productEditorFirstStepData.value)
  productEditorStore.setProductTranslations(props.product.translations)
}

const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

// Watch
watch(
  () => productEditorStore.editSuccess,
  (value: boolean) => {
    if (value) {
      closeDialog()
      emits('product-changed')
    }
  }
)
</script>
