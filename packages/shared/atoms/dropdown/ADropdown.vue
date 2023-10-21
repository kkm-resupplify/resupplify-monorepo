<template>
  <div :class="generateClasses">
    <slot name="activator" />

    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({})

// Variables
const baseClass = 'a-dropdown'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.a-dropdown {
  display: flex;
}
</style>
