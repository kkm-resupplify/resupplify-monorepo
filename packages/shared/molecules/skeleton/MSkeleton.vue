<template>
  <div :class="generateClasses">
    <div v-for="row in rows" :key="row" class="m-skeleton__row">
      <a-skeleton
        v-for="idx in repetitions"
        :key="idx"
        :height="skeletonHeight"
        :width="skeletonWidth"
      />
    </div>
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
    default: '78px'
  },
  skeletonWidth: String,
  rows: {
    type: Number,
    default: 1
  },
  minWidth: {
    type: String,
    default: '100%'
  }
})

// Variables
const baseClass = 'm-skeleton'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.variant])
})

const minWidthStyle = computed(() => {
  return props.minWidth
})
</script>

<style lang="scss" scoped>
.m-skeleton {
  display: flex;
  gap: $global-spacing-30;
  min-width: v-bind(minWidthStyle);
  height: 100%;

  &--list {
    overflow-y: clip;
    display: flex;
    flex-direction: column;
  }

  &__row {
    overflow-y: clip;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-40;

    width: 100%;
    height: 100%;
    padding-right: $global-spacing-30;
  }
}
</style>
