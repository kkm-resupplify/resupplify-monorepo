<template>
  <div :class="generateClasses">
    <span class="a-title__title" v-text="title" />

    <span v-if="subTitle" class="a-title__content" v-text="subTitle" />
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
  subTitle: String
})

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const baseClass = 'a-title'

const { generateClassNames } = useClassComposable()

const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.variant])
})
</script>

<style scoped lang="scss">
.a-title {
  display: flex;

  &--vertical {
    flex-direction: column;
  }

  &__title {
    font-size: $global-title-x-large-font-size;
    font-weight: $global-title-x-large-font-weight;
  }
}
</style>
