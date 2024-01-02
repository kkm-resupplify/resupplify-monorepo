<template>
  <div :class="generateClasses">
    <a-skeleton v-for="idx in repetitions" :key="idx" :height="skeletonHeight" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  repetitions: {
    type: Number,
    default: 1
  },
  variant: {
    type: String,
    default: 'list'
  },
  skeletonHeight: {
    type: String,
    default: '80px'
  }
})

// Variables
const baseClass = 'm-list-skeleton'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.variant])
})
</script>

<style lang="scss" scoped>
.m-list-skeleton {
  height: 100%;

  &--list {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;

    padding-right: $global-spacing-30;
  }
}
</style>
