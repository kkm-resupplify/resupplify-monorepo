<template>
  <div :class="generateClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Variables
const baseClass = 'a-list'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.a-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;

  height: 100%;
  padding-right: $global-spacing-30;
}
</style>
