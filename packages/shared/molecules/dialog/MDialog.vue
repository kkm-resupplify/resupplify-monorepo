<template>
  <div :class="generateClasses">
    <slot name="activator" />

    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({})

// Variables
const baseClass = 'm-dialog'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.m-dialog {
  display: flex;
}
</style>
