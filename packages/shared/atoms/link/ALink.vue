<template>
  <router-link :to="link" :class="generateClasses">
    <span class="a-link__text">{{ text }}</span>
  </router-link>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
const { generateClassNames } = useClassComposable()

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  size: {
    type: String,
    default: 'normal'
  },
  textColor: {
    type: String,
    default: 'primary'
  },
  hoverColor: {
    type: String,
    default: 'primary'
  }
})

const baseClass = 'a-link'

const generateClasses = computed(() => {
  return generateClassNames(baseClass, [
    props.size,
    `text-${props.textColor}`,
    `hover-${props.hoverColor}`
  ])
})
</script>

<style lang="scss" scoped>
@mixin size($fontSize) {
  font-size: $fontSize;
}

@mixin color($textColor, $hoverColor) {
  color: $textColor;
  text-decoration: none;

  background: linear-gradient(to right, #fff0 0 0, #fff0 0 0), $hoverColor;
  background-repeat: no-repeat;
  background-position: 100% 100%, 0 100%;
  background-size: 100% 0.1em, 0 0.1em;

  transition: background-size 350ms;

  &:hover,
  &:focus {
    background-size: 0 0.1em, 100% 0.1em;

    :deep(.a-link__text) {
      color: rgb(255 255 255 / 0%);

      background: $hoverColor;
      background-clip: text;
      background-size: 200% 100%;

      transition: all 200ms linear;
    }
  }

  &:visited {
    text-decoration: none;
  }
}

.a-link {
  // Size
  &--normal {
    @include size($button-font-size-nm);
  }

  &--medium {
    @include size($button-font-size-md);
  }

  &--large {
    @include size($button-font-size-lg);
  }

  &--x-large {
    @include size($button-font-size-x-lg);
  }

  // Text color
  &--text-primary {
    @include color(var(--font-primary), var(--background-primary-gradient));
  }
}
</style>
