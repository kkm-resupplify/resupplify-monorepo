<template>
  <div :class="generateClasses">
    <div ref="content" class="m-stepper-step-list-item__content">
      <span class="m-stepper-step-list-item__title" v-text="stepItem.title" />

      <span class="m-stepper-step-list-item__subtitle" v-text="stepItem.subtitle" />
    </div>

    <div class="m-stepper-step-list-item__indicator">
      <a-icon v-if="showIcon" :icon="stepItem.icon" size="xx-large" />

      <div class="m-stepper-step-list-item__indicator-line" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import { type StepInfo } from '@sharedInterfaces/stepper'

const props = defineProps({
  stepItem: {
    type: Object as () => StepInfo,
    required: true
  },
  itemStatus: String
})

// Variables
const baseClass = 'm-stepper-step-list-item'

// Composables
const { generateClassNames } = useClassComposable()

// Ref
const content = ref<HTMLElement | null>(null)

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const showIcon = computed(() => {
  return props.stepItem.icon
})

const indicatorSize = computed(() => {
  const contentEl = content.value

  return contentEl ? `${contentEl.clientHeight}px` : '32px'
})

const indicatorColor = computed(() => {
  return `var(--${props.itemStatus})`
})
</script>

<style lang="scss" scoped>
.m-stepper-step-list-item {
  display: flex;
  gap: $global-spacing-60;
  align-items: center;
  justify-content: flex-end;

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-10;
    text-align: right;
  }

  &__subtitle {
    font-size: $global-text-normal-font-size;
  }

  &__indicator {
    position: relative;
    z-index: 22;

    display: flex;
    align-items: center;
    justify-content: center;

    width: v-bind(indicatorSize);
    height: v-bind(indicatorSize);

    border: 2px solid v-bind(indicatorColor);
    border-radius: 50%;
  }

  &__indicator-line {
    position: absolute;
    z-index: 1;
    transform: translateY(calc(150% - 2px));

    width: 2px;
    height: $global-spacing-90;

    background-color: v-bind(indicatorColor);
  }
}
</style>
