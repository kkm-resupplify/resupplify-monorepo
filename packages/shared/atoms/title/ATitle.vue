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
@mixin size($fontSize) {
  .a-title__title {
    font-size: $fontSize;
    font-weight: $global-font-weight-50;
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

  &--vertical {
    flex-direction: column;
  }

  &--horizontal {
    flex-direction: row;
    align-items: flex-end;
  }

  &__title {
    display: flex;
    flex-basis: 30%;
  }

  // Size
  &--normal {
    @include size($global-title-normal-font-size);
  }

  &--medium {
    @include size($global-title-medium-font-size);
  }

  &--large {
    @include size($global-title-large-font-size);
  }

  &--x-large {
    @include size($global-title-x-large-font-size);
  }

  &--xx-large {
    @include size($global-title-xx-large-font-size);
  }
}
</style>
