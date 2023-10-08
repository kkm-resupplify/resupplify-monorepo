<template>
  <div :class="generateClasses">
    <m-stepper-step-list-item
      v-for="(stepItem, idx) in stepListItems"
      :key="idx"
      :step-item="stepItem"
      :item-state="itemState(idx)"
    />
  </div>
</template>

<script setup lang="ts">
import BaseEnum from '@sharedEnums/BaseEnum'
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import type { ItemState, StepInfo } from '@sharedInterfaces/stepper'
import MStepperStepListItem from './MStepperStepListItem.vue'

class StepListItemColorStatus extends BaseEnum {
  static PAST = 'success'
  static CURRENT = 'info'
  static FUTURE = 'disabled'
}

const props = defineProps({
  stepListItems: {
    type: Array as PropType<StepInfo[]>,
    required: true
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
const itemState = (idx: number): ItemState => {
  let status = StepListItemColorStatus.FUTURE
  let isLast = idx === props.stepListItems?.length - 1

  if (props.currentStep > idx) status = StepListItemColorStatus.PAST
  if (props.currentStep === idx) status = StepListItemColorStatus.CURRENT

  return { status, isLast }
}
</script>

<style lang="scss" scoped>
.m-stepper-step-list {
  display: flex;
  flex-direction: column;
  min-width: 200px;
}
</style>
