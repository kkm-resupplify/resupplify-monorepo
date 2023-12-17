<template>
  <component
    :is="iconComponent"
    :class="generateClasses"
    :icon="iconValue"
    :color="color"
    :size="size"
    :country="iconValue"
    :library="library"
    :variant="variant"
    :hoverable="hoverable"
    :gradient="gradient"
    :move-background="moveBackground"
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
  country: Boolean,
  hoverable: Boolean,
  gradient: Boolean,
  moveBackground: Boolean
})

// Variables
const baseClass = 'm-icon'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const isCountryIcon = computed(() => {
  return props.icon.startsWith('_')
})

const iconValue = computed(() => {
  return isCountryIcon.value ? props.icon.slice(1) : props.icon
})

const iconComponent = computed(() => {
  return isCountryIcon.value ? CountryFlag : AIcon
})
</script>
