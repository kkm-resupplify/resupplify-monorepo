<template>
  <div :class="generateClasses">
    <m-icon
      v-if="iconPrepend"
      :icon="iconPrepend.name"
      :size="iconPrepend.size ?? `large`"
      :color="iconPrepend.color"
    />

    <span v-text="text" />

    <m-icon
      v-if="iconAppend"
      :icon="iconAppend.name"
      :size="iconAppend.size ?? `large`"
      :color="iconAppend.color"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

interface IconData {
  name: string
  size?: string
  color?: string
}

const props = defineProps({
  text: { type: String, default: '' },
  iconPrepend: Object as () => IconData | null,
  iconAppend: Object as () => IconData | null
})
// Variables
const baseClass = 'm-select-item'

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.m-select-item {
  display: flex;
  gap: $global-spacing-20;
  align-items: center;
  border-radius: $global-border-radius-10;

  &:hover {
    background-color: var(--secondary-2);
  }
}
</style>
