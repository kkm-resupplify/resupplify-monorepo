<template>
  <div :class="generateClasses">
    <a-skeleton v-for="idx in repetitions" :key="idx" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  repetitions: {
    type: Number,
    default: 1
  }
})

// Variables
const baseClass = 'm-list-skeleton'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.m-list-skeleton {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;

  height: 100%;
}
</style>
