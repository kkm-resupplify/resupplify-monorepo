<template>
  <img
    :src="source"
    :alt="alt"
    :class="generateClasses"
    @error="imageError"
    @load="imageLoaded"
    ref="imageRef"
  />
  <a-icon v-if="isLoading || isError" class="placeholder" icon="no_photography" size="xx-large" />
</template>

<script setup lang="ts">
import { computed, ref, unref } from 'vue'
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
    default: 'auto'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  }
})

// Variables
const baseClass = 'a-image'
const { generateClassNames } = useClassComposable()
const isLoading = ref(true)
const isError = ref(false)
const imageRef = ref<HTMLImageElement | null>()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.variant])
})

const height = computed(() => {
  if (typeof props.height === 'number') {
    return `${props.height}px`
  }
  return 'auto'
})

const width = computed(() => {
  if (typeof props.width === 'number') {
    return `${props.width}px`
  }
  return 'auto'
})

// Methods
const imageLoaded = () => {
  isLoading.value = false
}

const imageError = () => {
  const imageElement = unref(imageRef)
  if (imageElement) {
    imageElement.style.display = 'none'
  }
  isError.value = true
}
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

  &--hidden {
    display: none;
  }
}
</style>
