<template>
  <component
    :is="iconComponent"
    :class="generateClasses"
    :icon="icon"
    :color="color"
    :size="size"
    :library="library"
    :variant="variant"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import CountryFlag from 'vue-country-flag-next'
import AIcon from '@sharedAtoms/icon/AIcon.vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'font-primary'
  },
  size: {
    type: String,
    default: 'normal'
  },
  library: {
    type: String,
    default: 'symbols'
  },
  variant: {
    type: String,
    default: 'outlined'
  },
  country: Boolean
})

// Variables
const baseClass = 'm-icon'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const iconComponent = computed(() => {
  return props.country ? CountryFlag : AIcon
})
</script>

=
