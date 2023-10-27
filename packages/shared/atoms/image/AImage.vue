<template>
  <img :src="source" :alt="alt" :class="generateClasses" />
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  source: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default'
  },
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  }
})

// Variables
const baseClass = 'a-image'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.source, props.alt, props.variant])
})

const height = computed(() => {
  return `${props.height}px`
})

const width = computed(() => {
  return `${props.width}px`
})
</script>

<style scoped lang="scss">
.a-icon {
  width: v-bind(width);
  height: v-bind(height);

  &--rounded {
    border-radius: $global-border-radius-30;
  }

  &--circle {
    border-radius: 50%;
  }
}
</style>
