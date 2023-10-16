<template>
    <div :class="generateClasses">
        <div>
            <slot name="tabs" />
        </div>
            
        <div>
            <slot name="button" />
        </div>
    </div>
</template>

<script setup lang="ts">
    // Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const baseClass = 'm-tab'

const { generateClassNames } = useClassComposable()

const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style scoped lang="scss"></style>