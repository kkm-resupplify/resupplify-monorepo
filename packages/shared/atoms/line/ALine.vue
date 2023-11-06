<template>
  <span :class="generateClasses" />
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Props
const props = defineProps({
  variant: String,
  color: { type: String, default: 'primary' },
  height: { type: Number, default: 8 }
})

// Inits
const baseClass = 'a-line'

const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.variant, props.color])
})

const lineHeight = computed(() => {
  return `${props.height}px`
})
</script>

<style scoped lang="scss">
$height-of-line: 8px;

.a-line {
  height: v-bind(lineHeight);

  &--primary {
    background: var(--font-primary);
  }

  &--secondary-1 {
    background: var(--secondary-1);
  }

  &--secondary-2 {
    background: var(--secondary-2);
  }

  &--secondary-3 {
    background: var(--secondary-3);
  }

  &--secondary-4 {
    background: var(--secondary-4);
  }

  &--triangle {
    clip-path: polygon(0 0, 100% 0, 99% 100%, 0 100%);
  }
}
</style>
