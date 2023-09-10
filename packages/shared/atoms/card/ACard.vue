<template>
  <div class="a-card">
    <div :class="headerClasses">
      <img :src="props.headerImage" />
    </div>

    <div class="a-card__overlay a-card__overlay--right">
      <slot name="overlay-right" />
    </div>

    <div :class="bodyClasses">
      <div
        v-if="slots['overlay-top']"
        class="a-card__overlay a-card__overlay--top"
        ref="overlayTopRef"
      >
        <slot name="overlay-top" />
      </div>

      <div class="a-card__main">
        <div class="a-card__main-title" ref="titleRef">
          <slot name="title" />
        </div>

        <div class="a-card__main-content">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed, ref, useSlots } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Props
const props = defineProps({
  headerImage: {
    type: String,
    default: 'https://www.qualia.com/images/branding/qualia_logo_medium.png'
  },

  backgroundVariant: {
    type: String,
    default: 'primary'
  },

  keepExtended: {
    type: Boolean
  }
})

// Inits
const slots = useSlots()

const { generateClassNames } = useClassComposable()

const overlayTopRef = ref<HTMLElement | null>(null)

const titleRef = ref<HTMLElement | null>(null)

// Computed
const headerClasses = computed(() => {
  return generateClassNames('a-card__header', [`bg-${props.backgroundVariant}`])
})

const bodyClasses = computed(() => {
  return props.keepExtended ? 'a-card__body a-card__body--extended' : 'a-card__body'
})

const previewHeight = computed(() => {
  const overlayEl = overlayTopRef.value
  const titleEl = titleRef.value

  return `${(overlayEl ? overlayEl.clientHeight : 0) + (titleEl ? titleEl.clientHeight : 0) + 4}px`
})
</script>

<style scoped lang="scss">
$body-max-height: 150px;

.a-card {
  position: relative;

  overflow: hidden;

  width: 300px;
  height: 210px;

  border-radius: $global-border-radius-20;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 25%);

  &:hover {
    .a-card__body {
      max-height: $body-max-height;
    }

    .a-card__overlay {
      &--right {
        display: flex;
        max-height: 120px;
      }

      &--top {
        opacity: 1;
      }
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 98%;

    img {
      max-width: 100%;
      height: auto;
    }

    &--bg-primary {
      background: $global-gradients-blue-primary-1;
    }

    &--bg-secondary {
      background: $global-gradients-blue-grayed-out;
    }
  }

  &__body {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-height: v-bind(previewHeight);

    transition: all 0.3s ease-in-out;

    &--extended {
      max-height: $body-max-height;
    }
  }

  &__main {
    background-color: $global-colors-white;
  }

  &__main-title {
    padding: 0 $global-spacing-20;
    font-size: $global-title-medium-font-size;
    font-weight: $global-title-medium-font-weight;
  }

  &__main-content {
    display: flex;
    font-size: $global-text-normal-font-size;
    font-weight: $global-text-normal-font-weight;
    line-height: 20px;
  }

  &__overlay {
    position: absolute;
    z-index: 1;

    &--right {
      top: 0;
      right: $global-spacing-30;

      overflow: hidden;

      max-height: 0;

      background: $global-gradients-blue-primary-1;
      border-radius: 0 0 $global-border-radius-20 $global-border-radius-20;

      transition: all 0.3s ease-in-out;
    }

    &--top {
      position: relative;
      bottom: 0;
      left: 0;

      opacity: 0;
      backdrop-filter: blur(4px);

      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
