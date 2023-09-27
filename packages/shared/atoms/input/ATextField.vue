<template>
  <div :class="generateClasses">
    <label v-if="label" class="a-text-field__label" v-text="label" />

    <input class="a-text-field__input" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
//TODO:
// gradient change on field validation
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Props
const props = defineProps({
  value: String,
  label: String,
  placeholder: {
    type: String,
    default: ''
  },
  inputType: String,
  size: {
    type: String,
    default: 'medium'
  },
  borderGradient: {
    type: String,
    default: 'info'
  }
})

// Variables
const baseClass = 'a-text-field'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.size])
})

const borderColor = computed(() => {
  return `var(--${props.borderGradient}-gradient)`
})
</script>

<style lang="scss" scoped>
@mixin size($padding, $font-size) {
  padding: $padding;
  font-size: $font-size;
}

.a-text-field {
  $self: &;

  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: $global-spacing-30;

  &--medium {
    #{$self}__label {
      @include size(0 $global-spacing-20, $global-font-size-20);
    }

    #{$self}__input {
      @include size($global-spacing-30 $global-spacing-40, $text-input-font-size-md);
    }
  }

  @supports (mix-blend-mode: darken) {
    position: relative;
    mix-blend-mode: lighten;

    &__label {
      position: absolute;
      left: 3em;
      transform: translateY(-45%);
      background: var(--primary);
    }
  }

  &__label {
    cursor: pointer;
    color: var(--font-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__input {
    line-height: 1;
    color: var(--font-primary);

    background-image: linear-gradient(#000, #000), v-bind(borderColor);
    background-clip: padding-box, border-box;
    background-origin: border-box;
    background-size: 200% 100%;
    border: 0.25em solid transparent;
    border-radius: 24px;
    outline: none;

    transition: background-position 0.3s ease-out;

    &:hover,
    &:focus {
      background-position: 100% 0;
    }
  }
}
</style>
