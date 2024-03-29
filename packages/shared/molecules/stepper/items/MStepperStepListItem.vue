<template>
  <div :class="generateClasses">
    <div class="m-stepper-step-list-item__wrapper">
      <div v-if="!itemState?.hideContent" ref="content" class="m-stepper-step-list-item__content">
        <span class="m-stepper-step-list-item__title" v-text="stepItem.title" />

        <span class="m-stepper-step-list-item__subtitle" v-text="stepItem.subtitle" />
      </div>

      <div class="m-stepper-step-list-item__indicator">
        <a-icon v-if="showIcon" :icon="stepItem.icon" size="xx-large" :color="iconColor" />
      </div>
    </div>

    <div v-if="showIndicatorLine" class="m-stepper-step-list-item__indicator-line" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import type { ItemState, StepInfo } from '@sharedInterfaces/stepper'

const props = defineProps({
  stepItem: {
    type: Object as () => StepInfo,
    required: true
  },
  itemState: Object as () => ItemState
})

// Variables
const baseClass = 'm-stepper-step-list-item'

// Composables
const { generateClassNames } = useClassComposable()

// Refs
const content = ref<HTMLElement | null>(null)

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const showIcon = computed(() => {
  return props.stepItem.icon
})

const indicatorSize = computed(() => {
  return '45px'
})

const indicatorColor = computed(() => {
  return `var(--${props.itemState?.status})`
})

const indicatorLineOffset = computed(() => {
  return `calc(${indicatorSize.value} / 2 * -1)`
})

const iconColor = computed(() => {
  return props.itemState?.status ?? 'disabled '
})

const showIndicatorLine = computed(() => {
  return !props.itemState?.isLast
})
</script>

<style lang="scss" scoped>
@mixin indicator-color {
  transition: border ease-in-out 0.3s;
  transition: background-color ease-in-out 0.3s;
}

.m-stepper-step-list-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &__wrapper {
    cursor: pointer;
    display: flex;
    gap: $global-spacing-100;
    justify-content: flex-end;
  }

  &__content {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: $global-spacing-10;
    justify-content: space-evenly;

    max-width: 140px;

    text-align: right;
    white-space: nowrap;

    transition: all 0.3s;
  }

  &__subtitle {
    font-size: $global-text-normal-font-size;
    text-overflow: ellipsis;
  }

  &__indicator {
    @include indicator-color;

    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: v-bind(indicatorSize);
    max-width: v-bind(indicatorSize);
    min-height: v-bind(indicatorSize);
    max-height: v-bind(indicatorSize);

    border: 2px solid v-bind(indicatorColor);
    border-radius: 50%;
  }

  &__indicator-line {
    @include indicator-color;

    transform: translateX(v-bind(indicatorLineOffset));

    align-self: flex-end;

    width: 2px;
    height: 36px;

    background-color: v-bind(indicatorColor);
  }
}
</style>
