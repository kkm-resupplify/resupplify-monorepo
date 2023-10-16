<template>
  <div :class="generateClasses">
    <div class="m-tabs__tabs">
      <slot name="tabs" />
    </div>

    <div class="m-tabs__button">
      <slot name="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const baseClass = 'm-tabs'

const { generateClassNames } = useClassComposable()

const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style scoped lang="scss">
.m-tabs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--secondary-1);
  
  padding: $global-spacing-100;
  &__tabs {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__button {
    align-self: flex-end;
  }
}
</style>
