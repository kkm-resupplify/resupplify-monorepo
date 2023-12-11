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
    default: 'font-primary'
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
  },
  hoverable: {
    type: Boolean,
    default: false
  },
  gradient: Boolean,
  moveBackground: Boolean
})

// Variables
const baseClass = 'a-icon'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  const hoverable = props.hoverable ? 'hoverable' : null
  const gradient = props.gradient ? 'gradient' : null
  const moveBackground = props.moveBackground ? 'move-background' : null

  return (
    generateClassNames(baseClass, [props.color, props.size, hoverable, gradient, moveBackground]) +
    ` material-${props.library}-${props.variant}`
  )
})

const iconColor = computed(() => {
  return `var(--${props.color})`
})
</script>

<style scoped lang="scss">
@import '../../styles/mixins/animated-border';

@mixin size($size, $padding: 0) {
  padding: $padding;
  font-size: $size;
}

.a-icon {
  user-select: none;
  color: v-bind(iconColor);
  border-radius: $global-border-radius-20;

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

  &--xx-large {
    @include size($icon-size-xx-lg);
  }

  // Color variants
  &--gradient {
    color: rgb(255 255 255 / 0%);
    text-decoration: none;

    background: linear-gradient(to right, #fff0 0 0, #fff0 0 0), v-bind(iconColor);
    background-repeat: no-repeat;
    background-position: 100% 100%, 0 100%;
    background-clip: text;
    background-size: 200% 100%;
  }

  &--move-background {
    @include move-background-animation;
  }

  &--hoverable {
    cursor: pointer;

    &:hover {
      color: var(--info);
      background: var(--hover-primary);
    }
  }
}
</style>
