<template>
  <div :class="generateClasses">
    <span class="a-title__title" v-text="titleText" />

    <span v-if="subtitle" class="a-title__subtitle" v-text="subtitle" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  variant: {
    type: String,
    default: 'vertical'
  },
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  appendColon: Boolean,
  size: {
    type: String,
    default: 'medium'
  }
})

// Variables
const baseClass = 'a-title'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.variant, props.size])
})

const titleText = computed(() => {
  return props.appendColon ? `${props.title}:` : props.title
})
</script>

<style scoped lang="scss">
@mixin size($fontSize, $fontWeight: 400) {
  font-size: $fontSize;
  font-weight: $fontWeight;
}

.a-title {
  $self: &;

  display: flex;
  gap: $global-spacing-30;

  &--vertical {
    flex-direction: column;
  }

  &--horizontal {
    flex-direction: row;
    align-items: flex-end;
  }

  // Size
  &--small {
    #{$self}__title {
      @include size($icon-size-sm);

      display: flex;
      flex-basis: 30%;
    }

    #{$self}__subtitle {
      @include size($icon-size-sm);

      display: flex;
    }
  }

  &--normal {
    #{$self}__title {
      @include size($global-title-normal-font-size, $global-title-normal-font-weight);
    }

    #{$self}__subtitle {
      @include size($global-text-normal-font-size, $global-text-normal-font-weight);
    }
  }

  &--medium {
    #{$self}__title {
      @include size($global-title-medium-font-size, $global-title-medium-font-weight);
    }

    #{$self}__subtitle {
      @include size($global-text-medium-font-size, $global-text-medium-font-weight);
    }
  }

  &--large {
    #{$self}__title {
      @include size($global-title-large-font-size, $global-title-large-font-weight);
    }

    #{$self}__subtitle {
      @include size($global-text-large-font-size, $global-text-large-font-weight);
    }
  }

  &--x-large {
    #{$self}__title {
      @include size($global-title-x-large-font-size, $global-title-x-large-font-weight);
    }

    #{$self}__subtitle {
      @include size($global-text-x-large-font-size, $global-text-x-large-font-weight);
    }
  }

  &--xx-large {
    #{$self}__title {
      @include size($global-title-xx-large-font-size, $global-title-xx-large-font-weight);
    }

    #{$self}__subtitle {
      @include size($global-text-xx-large-font-size, $global-text-xx-large-font-weight);
    }
  }
}
</style>
