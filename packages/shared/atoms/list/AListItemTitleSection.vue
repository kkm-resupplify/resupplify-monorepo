<template>
  <div :class="generateClasses">
    <span class="a-list-item-title-section__title" v-text="title" />

    <span class="a-list-item-title-section__value" v-text="value" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

defineProps({
  title: String,
  value: [String, Number]
})

// Variables
const baseClass = 'a-list-item-title-section'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.a-list-item-title-section {
  display: flex;
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
