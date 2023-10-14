<template>
  <div :class="generateClasses">
    <div class="m-stepper-step-content__body">
      <slot name="body" />
    </div>

    <div class="m-stepper-step-content__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Variables
const baseClass = 'm-stepper-step-content'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.m-stepper-step-content {
  display: flex;
  flex: 1;
  flex-direction: column;

  &__body {
    width: 100%;
  }

  &__footer {
    display: flex;
    flex: 1;
    align-items: flex-end;
  }
}
</style>
