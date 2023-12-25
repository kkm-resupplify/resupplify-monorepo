<template>
  <div :class="generateClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  maxHeight: {
    type: String,
    default: '100%'
  },
  width: {
    type: String,
    default: '100%'
  }
})

// Variables
const baseClass = 'a-panel'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const maxHeight = computed(() => {
  return props.maxHeight
})

const width = computed(() => {
  return props.width
})
</script>

<style lang="scss" scoped>
.a-panel {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  width: v-bind(width);
  max-height: v-bind(maxHeight);
  padding: $global-spacing-40 $global-spacing-50;
}
</style>
