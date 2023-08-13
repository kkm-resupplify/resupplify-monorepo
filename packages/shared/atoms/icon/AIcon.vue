<template>
  <span :class="generateClasses">{{ icon }}</span>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'blue-primary'
  },
  size: {
    type: String,
    default: 'normal'
  },
  variant: {
    type: String,
    default: ''
  }
})

const baseClass = 'a-icon'

const { generateClassNames } = useClassComposable()

const generateClasses = computed(() => {
  const variantName = `material-icons-${props.variant || 'material-icons'}`

  return generateClassNames(baseClass, [variantName])
})
</script>

<style scoped lang="scss">
@mixin size($size, $padding: 0) {
  width: $size;
  height: $size;
  padding: $padding;
}

.a-icon {
  &--small {
    @include size($icon-size-sm);
  }

  &--normal {
    @include size($icon-size-nm);
  }

  &--medium {
    @include size($icon-size-md);
  }

  &--large {
    @include size($icon-size-lg);
  }

  &--x-large {
    @include size($icon-size-x-lg);
  }
}
</style>
