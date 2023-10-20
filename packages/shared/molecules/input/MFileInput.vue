<template>
  <div :class="generateClasses">
    <a-image-input v-bind="attributes" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  name: { type: String, required: true },
  label: String,
  placeholder: String,
  size: { type: String, default: 'medium' },
  variant: { type: String, default: 'rounded' }
})

// Variables
const baseClass = 'm-file-input'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const attributes = computed(() => {
  return {
    name: props.name,
    label: props.label,
    placeholder: props.placeholder,
    size: props.size,
    variant: props.variant
  }
})
</script>

<style lang="scss" scoped>
.m-file-input {
  display: flex;
}
</style>
