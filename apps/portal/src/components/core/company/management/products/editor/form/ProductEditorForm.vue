<template>
  <m-stepper
    :steps="steps"
    :title="$t('company.management.products.editor.title')"
    @cancel="handleCancelRegister"
  />
</template>
<script setup lang="ts">
import ProductEditorAddInformationStep from '@/components/core/company/management/products/editor/form/steps/ProductEditorAddInformationStep.vue'
import ProductEditorAddTranslationStep from '@/components/core/company/management/products/editor/form/steps/ProductEditorAddTranslationStep.vue'
import { useI18n } from 'vue-i18n'
import { computed, onBeforeMount } from 'vue'
import StaticProductDescriptorsService from '@/services/product/StaticProductDescriptorsService'
// Emits
const emits = defineEmits(['cancel'])

// DTO
class AddProductStepDto {
  title: string
  subtitle: string
  icon: string

  constructor(step: string, icon: string) {
    this.title = this.getTranslation(step, 'title')
    this.subtitle = this.getTranslation(step, 'content')
    this.icon = icon
  }

  getTranslation(step: string, key: string) {
    return t(`company.management.products.editor.steps.${step}.${key}`)
  }
}

// Variables
const { t } = useI18n()

// Computed
const steps = computed(() => [
  {
    stepInfo: new AddProductStepDto('information', 'inventory_2'),
    component: ProductEditorAddInformationStep
  },
  {
    stepInfo: new AddProductStepDto('translation', 'translate'),
    component: ProductEditorAddTranslationStep
  }
])

// Methods
const handleCancelRegister = () => {
  emits('cancel')
}

// Hooks

onBeforeMount(async () => {
  await StaticProductDescriptorsService.getCategories()
  await StaticProductDescriptorsService.getSubcategories()
  await StaticProductDescriptorsService.getProductUnits()
})
</script>
