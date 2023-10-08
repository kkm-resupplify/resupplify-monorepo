<template>
  <div :class="generateClasses">
    <div class="m-stepper__step-list">
      <m-stepper-step-list :step-list-item="stepListItems" />
    </div>

    <div class="m-stepper__content">
      <div class="m-stepper__header"></div>

      <div class="m-stepper__body">
        <component :is="steps[currentStep].component" />
      </div>

      <div class="m-stepper__footer"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import MStepperStepList from './items/MStepperStepList.vue'
import { type Step } from '@sharedInterfaces/stepper'

const props = defineProps({
  steps: {
    type: Array as PropType<Step[]>,
    required: true
  }
})

// Variables
const baseClass = 'm-stepper'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const stepListItems = computed(() => {
  return props.steps.map((step) => step.stepInfo)
})
const currentStep = ref(0)
</script>

<style lang="scss" scoped>
.m-stepper {
  display: flex;
}
</style>
