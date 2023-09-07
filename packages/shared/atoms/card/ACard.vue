<template>
  <div class="a-card">
    <div :class="headerClasses">
      <img :src="props.headerImage" />
    </div>

    <div class="a-card__overlay a-card__overlay--right">
      <slot name="overlay-right" />
    </div>

    <div :class="bodyClasses">
      <div class="a-card__title">
        <slot name="title" />
      </div>

      <div class="a-card__content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

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

const { generateClassNames } = useClassComposable()

const headerClasses = computed(() => {
  return generateClassNames('a-card__header', [`bg-${props.backgroundVariant}`])
})

const bodyClasses = computed(() => {
  return props.keepExtended ? 'a-card__body a-card__body--extended' : 'a-card__body'
})
</script>

<style scoped lang="scss">
$body-max-height: 150px;

.a-card {
  position: relative;

  overflow: hidden;

  width: 300px;
  height: 210px;

  background-color: $global-colors-white;
  border-radius: $global-border-radius-20;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 25%);

  &:hover {
    .a-card__body {
      max-height: $body-max-height;
    }

    .a-card__overlay--right {
      display: flex;
      max-height: 120px;
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
    max-height: 24px;

    background-color: $global-colors-white;

    transition: all 0.3s ease-in-out;

    &--extended {
      max-height: $body-max-height;
    }
  }

  &__title {
    padding: 0 $global-spacing-20;
    font-size: $global-title-medium-font-size;
    font-weight: $global-title-medium-font-weight;
  }

  &__content {
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
  }
}
</style>
