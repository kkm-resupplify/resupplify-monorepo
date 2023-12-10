<template>
  <div :class="generateClasses">
    <div class="m-alert__wrapper">
      <m-icon :icon="variantIcon" size="x-large" :color="props.variant" gradient />

      <slot>
        {{ text }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  variant: { type: String, default: 'info' },
  text: String,
  icon: String
})

// Variables
const baseClass = 'm-alert'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const variantIcon = computed(() => {
  if (props.icon) {
    return props.icon
  }

  switch (props.variant) {
    case 'info':
      return 'info'
    case 'success':
      return 'done'
    case 'warning':
      return 'warning'
    case 'danger':
      return 'error'
    default:
      return 'info'
  }
})

const variantColor = computed(() => {
  return `var(--${props.variant}-gradient)`
})
</script>

<style lang="scss" scoped>
.m-alert {
  $self: &;

  --border-width: 1px;

  content: '';

  position: relative;
  top: calc(-1 * var(--border-width));
  left: calc(-1 * var(--border-width));

  display: flex;
  flex: 1;
  gap: $global-spacing-20;

  box-sizing: border-box;
  width: 300px;
  width: calc(100% + var(--border-width) * 2);
  height: calc(100% + var(--border-width) * 2);
  padding: $global-spacing-10;

  background: v-bind(variantColor);
  background-position: 0 50%;
  background-size: 300% 300%;
  border-radius: $global-border-radius-10;
  border-radius: calc(2 * var(--border-width));

  &__wrapper {
    display: flex;
    flex: 1;
    gap: $global-spacing-20;
    align-items: center;

    padding: $global-spacing-20 $global-spacing-30;

    background-color: var(--primary);
  }
}
</style>
