<template>
  <div :class="generateClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  overflow: Boolean
})

// Variables
const baseClass = 'a-panel-section'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  const overflowClass = props.overflow ? 'overflow' : ''

  return generateClassNames(baseClass, [overflowClass])
})
</script>

<style lang="scss" scoped>
.a-panel-section {
  @include default-border-1;

  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-20 $global-spacing-30;

  background-color: var(--secondary-1);

  &--overflow {
    overflow: auto;
  }
}
</style>
