<template>
  <div :class="generateClasses">
    <span v-text="text" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

defineProps({
  text: { type: String, required: true }
})

// Variables
const baseClass = 'a-list-no-results'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.a-list-no-results {
  display: flex;
  flex: 1;
  gap: $global-spacing-40;
  align-items: center;

  box-sizing: border-box;
  padding: $global-spacing-20;

  font-size: $global-font-size-40;

  background-color: var(--secondary-2);
  border-radius: $global-border-radius-10;
}
</style>
