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
  const variantName = props.variant != '' ? ` material-icons-${props.variant}` : ' material-icons'

  return generateClassNames(baseClass, [props.color, props.size]) + variantName
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
    color: #000;
  }

  &--white {
    color: $global-colors-white;
  }
}
</style>
