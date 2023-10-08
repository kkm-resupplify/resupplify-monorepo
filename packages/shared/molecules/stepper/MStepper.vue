<template>
  <div :class="generateClasses">
    <div class="m-stepper__step-list">
      <m-stepper-step-list :step-list-item="stepListItems" />
    </div>

    <div class="m-stepper__content">
      {{ currentStep }}
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
  if (currentStep.value + 1 < props.steps.length) {
    console.log('handleNextStep mstepper')
    currentStep.value++
  }
}

const handlePreviousStep = () => {
  if (currentStep.value - 1 >= 0) {
    console.log('handlePreviousStep mstepper')
    currentStep.value--
  }
}

defineExpose({
  handlePreviousStep,
  handleNextStep
})
</script>

<style lang="scss" scoped>
.m-stepper {
  display: flex;

  &__footer {
    display: flex;
    gap: 12px;
  }
}
</style>
