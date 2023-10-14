<template>
  <div :class="generateClasses">
    <m-text-field
      class="m-dropdown__input"
      :name="name"
      variant="round"
      :placeholder="placeholder"
      :rules="rules"
      :disabled="disabled"
    />

    <div class="m-dropdown-content">
      <m-dropdown-item
        v-for="(option, idx) in options"
        :key="idx"
        :text="option.text"
        :icon-prepend="option.iconPrepend"
      />

      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import MDropdownItem from './items/MDropdownItem.vue'

interface IconData {
  name: string
  size?: string
  color?: string
}

interface MDropdownItemData {
  text?: string
  iconPrepend?: IconData
  iconAppend?: IconData
}

const props = defineProps({
  name: { type: String, required: true },
  placeholder: { type: String, required: true },
  options: { type: Array as PropType<MDropdownItemData[]>, default: () => [] },
  required: Boolean,
  disabled: Boolean
})

// Variables
const baseClass = 'm-dropdown'

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const rules = computed(() => {
  return props.required ? `required` : ''
})
</script>

<style lang="scss" scoped>
.m-dropdown {
  display: flex;
  flex-direction: column;
}
</style>
