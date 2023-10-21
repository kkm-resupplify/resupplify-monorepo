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

const props = defineProps({})

// Variables
const baseClass = 'a-dropdown'
const { generateClassNames } = useClassComposable()
const showContent = ref<boolean>(false)

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const toggleShowContent = () => {
  showContent.value = !showContent.value
}
</script>

<style lang="scss" scoped>
.a-dropdown {
  cursor: pointer;
  position: relative;
  display: inline-block;

  &__activator {
    user-select: none;
    display: flex;
  }

  &__content {
    position: absolute;

    display: flex;

    width: fit-content;
    padding: 2px;

    background-color: #fff;
  }
}
</style>
