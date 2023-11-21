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
import { computed } from 'vue'

// Emits
const emits = defineEmits(['cancel'])

// DTO
class AddProductStepDto {
  title: string
  subtitle: string

  constructor(step: string) {
    this.title = this.getTranslation(step, 'title')
    this.subtitle = this.getTranslation(step, 'content')
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
    stepInfo: new AddProductStepDto('information'),
    component: ProductEditorAddInformationStep
  },
  {
    stepInfo: new AddProductStepDto('translation'),
    component: ProductEditorAddTranslationStep
  }
])

// Methods
const handleCancelRegister = () => {
  emits('cancel')
}
</script>
