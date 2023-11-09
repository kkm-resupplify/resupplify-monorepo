<template>
  <div :class="generateClasses">
    <div class="m-dialog__activator" @click="openDialog">
      <slot name="activator" />
    </div>

    <div v-if="showContent" class="m-dialog__content-wrapper">
      <div class="m-dialog__content">
        <div class="m-dialog__content-header">
          <a-title :title="title" size="large" />

          <slot name="header" />

          <a-icon icon="close" size="x-large" class="m-dialog__close-icon" @click="closeDialog" />
        </div>

        <div class="m-dialog__content-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

defineProps({
  title: String
})

// Variables
const baseClass = 'm-dialog'
const showContent = ref(false)
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

// Methods
const closeDialog = () => {
  showContent.value = false
}

const openDialog = () => {
  showContent.value = true
}

// Expose
defineExpose({
  closeDialog,
  openDialog
})
</script>

<style lang="scss" scoped>
.m-dialog {
  display: flex;
  z-index: 9;

  &__content-wrapper {
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(#000, 0.25);
  }

  &__content {
    @include default-border-1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;

    margin-right: auto;
    margin-left: auto;
    padding: $global-spacing-30 $global-spacing-40;

    background-color: var(--secondary-1);
    border-radius: $global-border-radius-30;
    box-shadow: 0 15px 30px 0 rgba(#000, 0.25);
  }

  &__content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__close-icon {
    cursor: pointer;
    align-self: flex-end;
  }

  &__content-body {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
}
</style>
