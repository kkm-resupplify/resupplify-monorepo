<template>
  <button :class="generateClasses" data-test="button">{{ text }}</button>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Enums
import AButtonSizeEnum from '@sharedEnums/button/AButtonSizeEnum'
import AButtonColorEnum from '@sharedEnums/button/AButtonColorEnum'

// Composables
import { useAtomClassComposable } from '@sharedComposables/atom/useAtomClassComposable'
const { generateClassNames } = useAtomClassComposable()

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium',
    validator(value: String) {
      return AButtonSizeEnum.hasValue(value)
    }
  },
  color: {
    type: String,
    default: 'gradient-primary',
    validator(value: String) {
      return AButtonColorEnum.hasValue(value)
    }
  },
  outlined: {
    type: Boolean
  },
  textColor: {
    type: String,
    default: 'white'
  }
})

const baseClass = 'a-button'

const generateClasses = computed(() => {
  return props.outlined
    ? generateClassNames(baseClass, [
        props.size,
        `outlined-${props.color}`,
        `text-${props.textColor}`
      ])
    : generateClassNames(baseClass, [props.size, props.color, `text-${props.textColor}`])
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
  display: inline-flex;
  align-items: flex-start;

  box-sizing: border-box;

  color: #fff;

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
        @include gradient($button-gradient-primary-hover);
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
