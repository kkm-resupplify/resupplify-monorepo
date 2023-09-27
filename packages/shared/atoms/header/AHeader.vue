<template>
  <div :class="generateClasses">
    <span class="a-header__title">{{ title }}</span>
    <span class="a-header__subtitle">{{ subtitle }}</span>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
const { generateClassNames } = useClassComposable()

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const baseClass = 'a-header'
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style scoped lang="scss">
.a-header {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;
  align-items: flex-start;

  color: var(--font-primary);

  &__title {
    display: flex;
    font-size: $global-title-large-font-size;
    font-weight: $global-title-large-font-weight;
  }

  &__subtitle {
    display: flex;
    font-size: $global-text-medium-font-size;
    font-weight: $global-text-medium-font-weight;
  }
}
</style>
