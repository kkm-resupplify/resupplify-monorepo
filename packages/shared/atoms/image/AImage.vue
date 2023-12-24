<template>
  <img
    ref="imageRef"
    :src="src"
    :alt="alt"
    :class="generateClasses"
    :rel="rel"
    @error="imageError"
    @load="handleImageLoaded"
  />

  <div v-if="isLoading || isError" class="a-image__placeholder">
    <a-icon icon="no_photography" size="xx-large" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  src: {
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
  rel: String,
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
  if (typeof props.height === 'number') return `${props.height}px`

  return `${props.height}`
})

const width = computed(() => {
  if (typeof props.width === 'number') return `${props.width}px`

  return `${props.width}`
})

// Methods
const handleImageLoaded = () => {
  isLoading.value = false
}

const imageError = () => {
  const imageElement = unref(imageRef)

  if (imageElement) imageElement.style.display = 'none'

  isError.value = true
}
</script>

<style scoped lang="scss">
.a-image {
  width: v-bind(width);
  height: v-bind(height);

  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;

    width: v-bind(width);
    height: v-bind(height);

    background-color: var(--disabled);
    border-radius: $global-border-radius-30;
  }

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
