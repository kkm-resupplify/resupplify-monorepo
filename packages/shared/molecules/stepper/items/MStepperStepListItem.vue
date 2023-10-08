<template>
  <div :class="generateClasses"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import { type StepInfo } from '@sharedInterfaces/stepper'

const props = defineProps({
  stepItem: {
    type: Object as () => StepInfo,
    required: true
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
