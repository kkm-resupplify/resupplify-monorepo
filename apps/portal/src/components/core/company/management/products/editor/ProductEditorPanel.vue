<template>
  <a-panel class="product-editor-panel">
    <a-panel-section class="product-editor-panel__main-section" overflow>
      <product-editor-stepper @cancel="handleCancelProductAddition" />
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import ProductEditorStepper from '@/components/core/company/management/products/editor/ProductEditorStepper.vue'
import { useProductEditorStore } from '@/stores/product/useProductEditorStore'
import { useRouter } from 'vue-router'

// Variables
const productEditorStore = useProductEditorStore()
const router = useRouter()

// Methods
const handleCancelProductAddition = () => {
  productEditorStore.$reset()
  router.back()
}
</script>

<style lang="scss" scoped>
.product-editor-panel {
  &__main-section {
    width: 100%;
  }

  :deep(.a-panel-section) {
    height: 100%;
  }
}
</style>
