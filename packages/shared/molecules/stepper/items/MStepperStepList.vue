<template>
  <div :class="generateClasses">
    <m-stepper-step-list-item
      v-for="(stepItem, idx) in stepListItems"
      :key="idx"
      :step-item="stepItem"
      :item-status="itemState(idx)"
    />
    <div class="test" />
  </div>
</template>

<script setup lang="ts">
import BaseEnum from '@sharedEnums/BaseEnum'
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import { type StepInfo } from '@sharedInterfaces/stepper'
import MStepperStepListItem from './MStepperStepListItem.vue'

class StepListItemColorStatus extends BaseEnum {
  static PAST = 'success'
  static CURRENT = 'info'
  static FUTURE = 'disabled'
}

const props = defineProps({
  stepListItems: {
    type: Array as PropType<StepInfo[]>
  },
  currentStep: {
    type: Number,
    default: 0
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

const itemState = (idx: number): string => {
  if (props.currentStep > idx) return StepListItemColorStatus.PAST
  if (props.currentStep === idx) return StepListItemColorStatus.CURRENT
  else return StepListItemColorStatus.FUTURE
}
</script>

<style lang="scss" scoped>
.m-stepper-step-list {
  display: flex;
  flex-direction: column;
  // gap: $global-spacing-90;
  min-width: 200px;
}
</style>
