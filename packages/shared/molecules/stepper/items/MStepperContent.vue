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
import { type PropType, toRef } from 'vue'
import { type Step } from '@sharedInterfaces/stepper'

const emits = defineEmits(['next-step', 'previous-step'])

const props = defineProps({
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
const currentStep = toRef(props.currentStep)

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
  flex-direction: column;
  flex: 1;

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
