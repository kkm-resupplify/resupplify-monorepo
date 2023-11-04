<template>
  <div :class="generateClasses">
    <div ref="dropdown" class="a-dropdown__activator" @click="toggleShowContent">
      <slot name="activator" />
    </div>

    <Transition name="slide-fade">
      <div v-if="showContent" class="a-dropdown__content">
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Emits
const emits = defineEmits(['toggle'])

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
    showContent.value = false
    emits('toggle', showContent.value)
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
    @include boxshadow-primary-2;

    position: absolute;
    z-index: 4;

    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-10;

    width: 100%;
    padding: $global-spacing-20;

    background-color: var(--primary);
  }
}

.slide-fade-enter-active {
  transition: all 0.15s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
