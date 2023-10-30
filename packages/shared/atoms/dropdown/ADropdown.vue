<template>
  <div :class="generateClasses">
    <div class="a-dropdown__activator" @click="toggleShowContent" ref="dropdown">
      <slot name="activator" />
    </div>

    <div v-if="showContent" class="a-dropdown__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Emits
const emits = defineEmits(['toggle', 'close'])

// Variables
const baseClass = 'a-dropdown'
const { generateClassNames } = useClassComposable()
const showContent = ref(false)
const dropdown = ref<HTMLElement | null>(null)

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

// Methods
const toggleShowContent = () => {
  showContent.value = !showContent.value

  emits('toggle', showContent.value)
}

const closeContent = (event: Event) => {
  if (!dropdown?.value?.contains(event.target as Node)) {
    showContent.value = false;
    emits('close', showContent.value);
  }
}

// Hooks
onMounted(() => {
  window.addEventListener('click', closeContent)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeContent)
})
</script>

<style lang="scss" scoped>
.a-dropdown {
  position: relative;
  display: inline-block;

  &__activator {
    cursor: pointer;
    user-select: none;
    display: flex;
  }

  &__content {
    position: absolute;
    z-index: 4;

    display: flex;

    width: 100%;
    padding: $global-spacing-10;
  }
}
</style>
