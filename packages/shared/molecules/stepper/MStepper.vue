<template>
  <div :class="generateClasses">
    <div class="m-stepper__h">Elo melo 3-2-1-0</div>
    <div class="m-stepper__b">
      <m-stepper-step-list
        class="m-stepper__step-list"
        :step-list-items="stepListItems"
        :current-step="currentStep"
        @go-to-step="handleGoToStep"
      />
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
const currentStep = ref(0)
const validatedStep = ref(0)

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const stepListItems = computed(() => {
  return props.steps.map((step) => step.stepInfo)
})

// Methods
const handleNextStep = () => {
  if (currentStep.value + 1 < props.steps.length) {
    currentStep.value++
    validatedStep.value++
  }
}

const handlePreviousStep = () => {
  if (currentStep.value - 1 >= 0) currentStep.value--
}

const handleGoToStep = (idx: number) => {
  if (idx >= 0 && idx < props.steps.length && idx <= validatedStep.value) currentStep.value = idx
}

defineExpose({
  handlePreviousStep,
  handleNextStep
})
</script>

<style lang="scss" scoped>
.m-stepper {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-80;
  align-self: center;

  padding: $global-spacing-30 $global-spacing-40;

  background-color: var(--secondary-1);
  border-radius: $global-border-radius-20;

  &__h {
    display: flex;
  }

  &__b {
    display: flex;
    flex: 1;
    gap: $global-spacing-80;
  }

  &__header {
    display: flex;
    flex-direction: column;
    font-size: $global-text-normal-font-size;
  }

  &__header-title {
    font-size: $global-title-large-font-size;
    font-weight: $global-title-normal-font-weight;
  }

  &__header-description {
    max-width: 400px;
    font-size: $global-text-medium-font-size;
  }

  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-80;
  }

  &__body {
    display: flex;
    flex: 1;
  }
}
</style>
