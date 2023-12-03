<template>
  <div :class="generateClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Variables
const baseClass = 'a-list-item-wrapper'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.a-list-item-wrapper {
  @include default-border-1-hover;

  display: flex;
  flex: 1;
  gap: $global-spacing-40;
  align-items: center;

  box-sizing: border-box;
  padding: $global-spacing-40;

  background-color: var(--primary);
  border-radius: $global-border-radius-10;
}
</style>
