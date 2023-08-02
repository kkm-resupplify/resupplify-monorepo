<template>
  <div>
    <button :class="generateClasses" data-test="button">{{ text }}</button>
  </div>
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
  textColor: {
    type: String,
    default: 'white'
  }
})

const baseClass = 'a-button'

const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.size, props.color, `text-${props.textColor}`])
})
</script>

<style lang="scss" scoped>
@mixin button-padding($padding-x, $padding-y: 0) {
  padding: $padding-y $padding-x;
}

@mixin gradient($gradient) {
  background: $gradient;
}

.a-button {
  display: inline-flex;
  align-items: flex-start;

  color: #fff;

  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);

  // Size
  &--small {
    @include button-padding($padding-sm);
  }

  &--medium {
    @include button-padding($padding-md);
  }

  &--large {
    @include button-padding($padding-lg, $padding-t);
  }

  // Background color
  &--gradient {
    &-primary {
      @include gradient($gradients-blue-primary-1);

      &:hover {
        @include gradient($gradients-blue-grayed-out);
      }
    }
  }

  &--text {
    &-white {
      color: $colors-white;
    }

    // &-primary {
    //   color: $colors-primary;
    // }
  }
}
</style>
