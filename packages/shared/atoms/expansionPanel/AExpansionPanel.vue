<template>
  <div :class="generateClasses">
    <div class="a-expansion-panel__activator" @click="toggleShowContent">
      <slot name="activator" />
    </div>

    <div v-if="renderContent" class="a-expansion-panel__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Emits
const emits = defineEmits(['toggle'])
const slots = useSlots()
// Variables
const baseClass = 'a-expansion-panel'
const { generateClassNames } = useClassComposable()
const showContent = ref<boolean>(false)

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const toggleShowContent = () => {
  showContent.value = !showContent.value
  emits('toggle', showContent.value)
}

const renderContent = computed(() => {
  return showContent.value && slots.content
})
</script>

<style lang="scss" scoped>
.a-expansion-panel {
  display: inline-block;

  &__activator {
    cursor: pointer;
    user-select: none;
    display: flex;
  }

  &__content {
    @include default-border-1;

    display: flex;

    width: 100%;
    padding: $global-spacing-40;

    background-color: var(--secondary-6);
    border-top: 0;
  }
}
</style>
