<template>
  <div :class="generateClasses">
    <component :is="cardComponent" v-for="(card, idx) in cards" :key="idx" />
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
const { generateClassNames } = useClassComposable()

const props = defineProps({
  cardComponent: {
    type: Object,
    required: true
  },
  cards: {
    type: Array<object>,
    default: []
  },
  orientation: {
    type: String,
    default: 'horizontal'
  },
  gap: {
    type: String,
    default: 'normal'
  }
})

const baseClass = 'm-card-list'

const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.orientation, `gap-${props.gap}`])
})
</script>

<style scoped lang="scss">
@mixin gap($gap) {
  gap: $gap;
}

.m-card-list {
  display: flex;

  &--vertical {
    flex-direction: column;
  }

  &--horizontal {
    flex-direction: row;
  }

  // Gap sizes
  &--gap-small {
    gap: $global-spacing-30;
  }

  &--gap-normal {
    gap: $global-spacing-50;
  }

  &--gap-medium {
    gap: $global-spacing-60;
  }

  &--gap-large {
    gap: $global-spacing-70;
  }

  &--gap-x-large {
    gap: $global-spacing-80;
  }
}
</style>
