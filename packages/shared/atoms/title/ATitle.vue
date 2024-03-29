<template>
  <div :class="generateClasses">
    <span class="a-title__title" v-text="titleText" />

    <span v-if="subtitle != null" class="a-title__subtitle" v-text="subtitle" />
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
  subtitle: [String, Number],
  appendColon: Boolean,
  size: {
    type: String,
    default: 'medium'
  },
  basis: {
    type: Number,
    default: 30
  },
  lineHeight: {
    type: String,
    default: 'auto'
  },
  titleFontWeight: {
    type: String,
    default: '500'
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

const flexBasisValue = computed(() => {
  return `${props.basis}%`
})

const lineHeightClass = computed(() => props.lineHeight)

const titleFontWeihtClass = computed(() => props.titleFontWeight)
</script>

<style scoped lang="scss">
@mixin size-vertical($fontSize) {
  .a-title__title {
    font-size: $fontSize;
    font-weight: v-bind(titleFontWeihtClass);
  }

  .a-title__subtitle {
    font-size: calc($fontSize - 4px);
    font-weight: $global-font-weight-40;
  }
}

@mixin size-horizontal($fontSize) {
  .a-title__title {
    font-size: $fontSize;
    font-weight: v-bind(titleFontWeihtClass);
  }

  .a-title__subtitle {
    font-size: $fontSize;
    font-weight: $global-font-weight-40;
  }
}

.a-title {
  $self: &;

  display: flex;
  gap: $global-spacing-30;

  &__title {
    display: flex;
    flex-basis: v-bind(flexBasisValue);
    line-height: v-bind(lineHeightClass);
  }

  &--vertical {
    flex-direction: column;

    &#{$self}--normal {
      @include size-vertical($global-title-normal-font-size);
    }

    &#{$self}--x-normal {
      @include size-vertical($global-font-size-40);
    }

    &#{$self}--medium {
      @include size-vertical($global-title-medium-font-size);
    }

    &#{$self}--large {
      @include size-vertical($global-title-large-font-size);
    }

    &#{$self}--x-large {
      @include size-vertical($global-title-x-large-font-size);
    }

    &#{$self}--xx-large {
      @include size-vertical($global-title-xx-large-font-size);
    }
  }

  &--horizontal {
    flex-direction: row;

    &#{$self}--normal {
      @include size-horizontal($global-title-normal-font-size);
    }

    &#{$self}--x-normal {
      @include size-horizontal($global-font-size-40);
    }

    &#{$self}--medium {
      @include size-horizontal($global-title-medium-font-size);
    }

    &#{$self}--large {
      @include size-horizontal($global-title-large-font-size);
    }

    &#{$self}--x-large {
      @include size-horizontal($global-title-x-large-font-size);
    }

    &#{$self}--xx-large {
      @include size-horizontal($global-title-xx-large-font-size);
    }
  }
}
</style>
