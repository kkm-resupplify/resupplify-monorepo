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
    type: [String, Number],
    default: "auto"
  },
  height: {
    type: [String, Number],
    default: "auto"
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
  if (typeof props.height === 'number') {
    return `${props.height}px`
  }
  return "auto"
})

const width = computed(() => {
  if (typeof props.width === 'number') {
    return `${props.width}px`
  }
  return "auto"
})

console.log(width.value);


</script>

<style scoped lang="scss">
.a-image {
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
