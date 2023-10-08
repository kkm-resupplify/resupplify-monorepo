<template>
  <div :class="generateClasses">
    <m-stepper-step-list-item
      v-for="(stepItem, idx) in stepListItems"
      :key="idx"
      :step-item="stepItem"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import MStepperStepListItem from './MStepperStepListItem.vue'
import { type StepInfo } from '@sharedInterfaces/stepper'

const props = defineProps({
  stepListItems: {
    type: Array as PropType<StepInfo[]>
  }
})

// Variables
const baseClass = 'm-stepper-step-list-item'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped></style>
