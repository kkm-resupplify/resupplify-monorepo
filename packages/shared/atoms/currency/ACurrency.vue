<template>
  <div :class="generateClasses">
    <a-title :size="size" :title="title" />

    <i18n-n tag="span" :value="value" format="currency" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  title: String,
  value: {
    type: Number,
    required: true
  },
  size: String
})

// Variables
const baseClass = 'a-currency'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.a-currency {
  display: flex;
}
</style>
