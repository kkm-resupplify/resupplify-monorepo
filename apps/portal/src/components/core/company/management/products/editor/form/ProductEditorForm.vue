<template>
  <m-stepper :steps="steps" />
</template>
<script setup lang="ts">
import ProductEditorAddInformationStep from './steps/ProductEditorAddInformationStep.vue'
import ProductEditorAddTranslationStep from './steps/ProductEditorAddTranslationStep.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

// Variables
const { t } = useI18n()

class AddProductStep {
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

// Computed
const steps = computed(() => [
  {
    stepInfo: new AddProductStep('information'),
    component: ProductEditorAddInformationStep
  },
  {
    stepInfo: new AddProductStep('translation'),
    stepContent: ProductEditorAddTranslationStep
  }
])
</script>
