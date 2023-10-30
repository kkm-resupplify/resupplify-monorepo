<template>
  <div :class="generateClasses">
    <div class="a-dropdown__activator" @click="toggleShowContent">
      <slot name="activator" />
    </div>

    <div v-if="showContent" class="a-dropdown__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Emits
const emits = defineEmits(['toggle'])

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
</script>

<style lang="scss" scoped>
.a-expansion-panel {
  cursor: pointer;
  display: inline-block;

  &__activator {
    user-select: none;
    display: flex;
  }

  &__content {
    display: flex;
    width: 100%;
  }
}
</style>
