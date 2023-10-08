<template>
  <div :class="generateClasses">
    <div class="m-stepper__step-list">
      <m-stepper-step-list :step-list-items="stepListItems" :current-step="currentStep" />
    </div>

    <div class="m-stepper__content">
      <div class="m-stepper__header">
        <span v-text="steps[currentStep].stepInfo.title" />
      </div>

      <div class="m-stepper__body">
        <component
          :is="steps[currentStep].component"
          @next-step="handleNextStep"
          @previous-step="handlePreviousStep"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO:
// Add general title

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

// Methods
const handleNextStep = () => {
  if (currentStep.value + 1 < props.steps.length) currentStep.value++
}

const handlePreviousStep = () => {
  if (currentStep.value - 1 >= 0) currentStep.value--
}

defineExpose({
  handlePreviousStep,
  handleNextStep
})
</script>

<style lang="scss" scoped>
.m-stepper {
  display: flex;
  gap: $global-spacing-40;
  align-self: center;

  min-height: 600px;
  padding: $global-spacing-30 $global-spacing-40;

  background-color: var(--secondary-1);
  border-radius: $global-border-radius-20;
}
</style>
