<template>
  <div :class="generateClasses" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  status: {
    type: Number,
    required: true
  },

  statusConfig: {
    type: Object,
    default: () => ({
      0: 'disabled',
      1: 'success',
      2: 'warning',
      3: 'danger'
    })
  }
})

// Variables
const baseClass = 'a-status-indicator'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const indicatorColor = computed(() => {
  return props.statusConfig[props.status]
    ? `var(--${props.statusConfig[props.status]})`
    : 'var(--disabled)'
})
</script>

<style lang="scss" scoped>
.a-status-indicator {
  box-sizing: border-box;
  min-width: 1em;
  min-height: 1em;

  background-color: v-bind(indicatorColor);
  border: 1px solid var(--secondary-3);
  border-radius: 50%;
}
</style>
