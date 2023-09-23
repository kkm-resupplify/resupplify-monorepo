<template>
  <span :class="generateClasses" :alt="`${icon} icon`">{{ icon }}</span>
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
  library: {
    type: String,
    default: 'symbols'
  },
  variant: {
    type: String,
    default: 'outlined'
  }
})

const baseClass = 'a-icon'

const { generateClassNames } = useClassComposable()

const generateClasses = computed(() => {
  return (
    generateClassNames(baseClass, [props.color, props.size]) +
    ` material-${props.library}-${props.variant}`
  )
})
</script>

<style scoped lang="scss">
@mixin size($size, $padding: 0) {
  padding: $padding;
  font-size: $size;
}

.a-icon {
  // Size
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

  // Colors
  &--blue-primary {
    color: $global-colors-blue-500;
  }

  &--black {
    color: $global-colors-black-1000;
  }

  &--white {
    color: $global-colors-grey-100;
  }

  &--app-theme {
    color: var(--font-primary);
  }
}
</style>
