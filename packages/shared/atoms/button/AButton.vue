<template>
  <button :class="generateClasses" :type="buttonType" data-test="button" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import AButtonSizeEnum from '@sharedEnums/button/AButtonSizeEnum'
import AButtonColorEnum from '@sharedEnums/button/AButtonColorEnum'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium',
    validator(value: string) {
      return AButtonSizeEnum.hasValue(value)
    }
  },
  color: {
    type: String,
    default: 'gradient-primary',
    validator(value: string) {
      return AButtonColorEnum.hasValue(value)
    }
  },
  outlined: {
    type: Boolean
  },
  textColor: {
    type: String,
    default: 'white'
  },
  buttonType: {
    type: String as PropType<'button' | 'submit' | 'reset' | undefined>,
    default: 'button'
  },
  disabled: Boolean
})

// Variables
const baseClass = 'a-button'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  const colorClass = props.outlined ? `outlined-${props.color}` : props.color

  return generateClassNames(baseClass, [props.size, colorClass, `text-${props.textColor}`])
})
</script>

<style lang="scss" scoped>
@mixin button-padding($padding-x, $padding-y: 0) {
  padding: $padding-y $padding-x;
}

@mixin gradient($gradient) {
  background: $gradient;
}

@mixin outlined-gradient($gradient, $gradient-hover, $border-radius: 4px, $border-width: 2px) {
  position: relative;
  background: $gradient;
  background-clip: text;

  -webkit-text-fill-color: transparent;

  &::before {
    content: '';

    position: absolute;
    inset: 0;

    background: $gradient border-box;
    border: $border-width solid transparent;
    border-radius: $border-radius;

    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);

    mask-composite: destination-out;
    mask-composite: exclude;
  }

  &:hover {
    background: $gradient-hover;

    -webkit-text-fill-color: white;
  }
}

.a-button {
  cursor: pointer;

  align-items: flex-start;

  box-sizing: border-box;

  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);

  // Size
  &--small {
    @include button-padding($button-padding-sm);
  }

  &--medium {
    @include button-padding($button-padding-md);
  }

  &--large {
    @include button-padding($button-padding-lg, $button-padding-t);
  }

  &--x-large {
    @include button-padding($button-padding-x-lg, $button-padding-sm);
  }

  // Outlined variant
  &--outlined {
    &-gradient-primary {
      @include outlined-gradient($button-gradient-primary-default, $button-gradient-primary-hover);
    }
  }

  // Background color
  &--gradient {
    &-primary {
      @include gradient($button-gradient-primary-default);

      &:hover {
        opacity: 0.8;
      }
    }

    &-danger {
      @include gradient(var(--danger-gradient));

      &:hover {
        opacity: 0.8;
      }
    }

    &-warning {
      @include gradient(var(--warning-gradient));

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &--text {
    &-white {
      color: $global-colors-grey-100;
    }
  }
}
</style>
