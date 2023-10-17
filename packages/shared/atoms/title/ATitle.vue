<template>
  <div :class="generateClasses">
    <h3 class="a-title__header" v-text="header">

    <span class="a-title__content" v-text="subHeader">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'vertical'
  },
  header: {
    type: String,
    required: true
  },
  sub-header: {
    type: String,
    required: true
  }
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
.m-title {
  display: flex;
  &--vertical {
    flex-direction: column;
  }
}
</style>
