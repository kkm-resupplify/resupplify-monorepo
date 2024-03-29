<template>
  <div :class="generateClasses">
    <div class="m-stepper__header">
      <span class="m-stepper__header-title" v-text="title" />

      <span class="m-stepper__header-description" v-text="description" />
    </div>

    <div class="m-stepper__body">
      <m-stepper-step-list
        class="m-stepper__step-list"
        :step-list-items="stepListItems"
        :current-step="currentStep"
        @go-to-step="handleGoToStep"
      />

      <m-stepper-content
        :steps="steps"
        :current-step="currentStep"
        @previous-step="handlePreviousStep"
        @next-step="handleNextStep"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import MStepperStepList from './items/MStepperStepList.vue'
import { type Step } from '@sharedInterfaces/stepper'
import MStepperContent from './items/MStepperContent.vue'

const props = defineProps({
  steps: {
    type: Array as PropType<Step[]>,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  alignSelf: { type: String, default: 'flex-start' }
})

// Emits
const emits = defineEmits(['previous-step', 'next-step', 'cancel'])

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

const selfAlignment = computed(() => props.alignSelf)

// Methods
const handleNextStep = () => {
  if (currentStep.value + 1 < props.steps.length) {
    currentStep.value++
    validatedStep.value++

    emits('next-step')
  }
}

const handlePreviousStep = () => {
  if (currentStep.value === 0) {
    emits('cancel')
  } else if (currentStep.value - 1 >= 0) {
    currentStep.value--

    emits('previous-step')
  }
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
  align-self: v-bind(selfAlignment);

  border-radius: $global-border-radius-20;

  &__header {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-10;
  }

  &__header-title {
    font-size: $global-title-large-font-size;
    font-weight: $global-title-large-font-weight;
  }

  &__header-description {
    font-size: $global-text-medium-font-size;
    word-wrap: break-word;
  }

  &__body {
    display: flex;
    flex: 1;
    gap: $global-spacing-80;
  }
}
</style>
