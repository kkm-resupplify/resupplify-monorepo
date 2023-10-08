<template>
  <div ref="stepList" :class="generateClasses">
    <div
      ref="stepListController"
      class="m-stepper-step-list__controller"
      @click="toggleListVisibility"
    >
      <div class="m-stepper-step-list__controller-content">
        <a-icon :icon="controllerIcon" size="x-large" />
      </div>
    </div>

    <div class="m-stepper-step-list__items">
      <m-stepper-step-list-item
        v-for="(stepItem, idx) in stepListItems"
        ref="stepListItem"
        :key="idx"
        :step-item="stepItem"
        :item-state="itemState(idx)"
        @click="emits('go-to-step', idx)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import type { ItemState, StepInfo } from '@sharedInterfaces/stepper'
import MStepperStepListItem from './MStepperStepListItem.vue'

class StepListItemColorStatus extends BaseEnum {
  static PAST = 'success'
  static CURRENT = 'info'
  static FUTURE = 'disabled'
}

const emits = defineEmits(['go-to-step'])

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
const isShown = ref(true)
const stepList = ref<HTMLElement | null>(null)
const stepListController = ref<HTMLElement | null>(null)
const stepListItem = ref<HTMLElement | null>(null)

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const controllerIcon = computed(() => {
  return isShown.value ? 'chevron_left' : 'chevron_right'
})

// Methods
const itemState = (idx: number): ItemState => {
  let status = StepListItemColorStatus.FUTURE
  let isLast = idx === props.stepListItems?.length - 1

  if (props.currentStep > idx) status = StepListItemColorStatus.PAST
  if (props.currentStep === idx) status = StepListItemColorStatus.CURRENT

  return { index: idx, status, isLast, hideContent: !isShown.value }
}

const toggleListVisibility = () => {
  isShown.value = !isShown.value
}
</script>

<style lang="scss" scoped>
.m-stepper-step-list {
  overflow: hidden;
  display: flex;
  height: 100%;

  &__items {
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
  }

  &__controller {
    position: relative;
    z-index: 4;

    display: flex;
    flex: 1;
    align-items: center;
  }

  &__controller-content {
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    background-color: var(--secondary-2);
    border-radius: 50%;
  }
}
</style>
