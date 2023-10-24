<template>
  <div :class="generateClasses">
    <span class="a-title__title" v-text="title" />

    <span v-if="subtitle" class="a-title__subtitle" v-text="subtitle" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
  size: {
    type: String,
    default: 'x-large'
  }
})

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const baseClass = 'a-title'

const { generateClassNames } = useClassComposable()

const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.variant, props.size])
})
</script>

<style scoped lang="scss">
.a-title {
  $self: &;

  display: flex;
  flex-direction: column;

  &--horizontal {
    flex-direction: row;
    gap: $global-spacing-40;
    align-items: center;
  }

  &--xx-large {
    #{$self}__title {
      font-size: $global-title-xx-large-font-size;
    }
    #{$self}__subtitle {
      font-size: $global-title-x-large-font-size;
      font-weight: $global-title-x-large-font-weight;
    }
  }

  &__title {
    font-size: $global-title-x-large-font-size;
    font-weight: $global-title-x-large-font-weight;
  }

  &__content {
    font-size: $global-title-medium-font-size;
    font-weight: $global-title-medium-font-weight;
  }
}
</style>
