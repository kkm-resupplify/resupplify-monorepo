<template>
  <div :class="generateClasses">
    <span class="a-list-item-title-section__title" v-text="title" />

    <span class="a-list-item-title-section__value" v-text="value" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  title: String,
  value: [String, Number],
  basis: {
    type: Number,
    default: 20
  }
})

// Variables
const baseClass = 'a-list-item-title-section'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const flexBasis = computed(() => {
  return `${props.basis}%`
})
</script>

<style lang="scss" scoped>
.a-list-item-title-section {
  display: flex;
  flex-basis: v-bind(flexBasis);
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: $global-font-size-40;
  }

  &__value {
    font-size: $global-font-size-50;
  }
}
</style>
