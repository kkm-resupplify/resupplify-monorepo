<template>
  <div :class="generateClasses">
    <m-stepper-step-list-item
      v-for="(stepItem, idx) in stepListItems"
      :key="idx"
      :step-item="stepItem"
      :is-active="isItemActive(idx)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import { type StepInfo } from '@sharedInterfaces/stepper'
import MStepperStepListItem from './MStepperStepListItem.vue'

const props = defineProps({
  stepListItems: {
    type: Array as PropType<StepInfo[]>
  },
  currentStep: {
    type: Number
  }
})

// Variables
const baseClass = 'm-stepper-step-list'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

// Methods
const isItemActive = (idx: number): boolean => {
  return idx === props.currentStep
}
</script>

<style lang="scss" scoped>
.m-stepper-step-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-90;
  min-width: 200px;
}
</style>
