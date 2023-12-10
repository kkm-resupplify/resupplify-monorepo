<template>
  <div :class="generateClasses">MAlert</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({})

// Variables
const baseClass = 'm-alert'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.m-alert {
  display: flex;
}
</style>
