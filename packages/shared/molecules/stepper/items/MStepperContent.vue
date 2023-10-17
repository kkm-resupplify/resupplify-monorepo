<template>
  <div class="m-stepper-content">
    <div class="m-stepper-content__header">
      <span class="m-stepper-content__header-title" v-text="steps[currentStep].stepInfo.title" />

      <span
        class="m-stepper-content__header-description"
        v-text="steps[currentStep].stepInfo.description"
      />
    </div>

    <div class="m-stepper-content__body">
      <component
        :is="steps[currentStep].component"
        @next-step="handleNextStep"
        @previous-step="handlePreviousStep"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { type Step } from '@sharedInterfaces/stepper'

const emits = defineEmits(['next-step', 'previous-step'])

defineProps({
  steps: {
    type: Array as PropType<Step[]>,
    required: true
  },
  currentStep: {
    type: Number,
    required: true
  }
})

// Variables
const handlePreviousStep = () => {
  emits('previous-step')
}

const handleNextStep = () => {
  emits('next-step')
}
</script>

<style lang="scss" scoped>
.m-stepper-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: $global-spacing-30;

  &__header {
    display: flex;
    flex-direction: column;
    min-width: 600px;
    max-width: 600px;
    font-size: $global-text-normal-font-size;
  }

  &__header-title {
    font-size: $global-title-large-font-size;
    font-weight: $global-title-normal-font-weight;
  }

  &__header-description {
    font-size: $global-text-medium-font-size;
    word-wrap: break-word;
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
