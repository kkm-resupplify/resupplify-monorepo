<template>
  <transition name="bounce">
    <div v-if="!!getCurrentNotification" :class="generateClasses">
      <div class="a-general-notification__wrapper">
        <div class="a-general-notification__header">
          <div class="a-general-notification__title">
            <span v-text="getCurrentNotification?.title" />
          </div>

          <div class="a-general-notification__dismiss">
            <a-icon
              size="x-large"
              icon="close"
              @click="generalNotificationStore.closeCurrentNotification"
            />
          </div>
        </div>

        <div v-if="getCurrentNotification?.text" class="a-general-notification__body">
          <span class="a-general-notification__text" v-text="getCurrentNotification.text" />

          <div class="a-general-notification__body-decorators">
            <a-icon
              v-if="!!notificationIcon"
              class="a-general-notification__body-decorators-icon"
              :icon="notificationIcon"
              :color="iconColor"
              size="xx-large"
            />
          </div>
        </div>

        <span class="a-general-notification__indicator" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
// Imports
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import AIcon from '@sharedAtoms/icon/AIcon.vue'

// Variables
const baseClass = 'a-general-notification'

// Composable
const { generateClassNames } = useClassComposable()

// Store
const generalNotificationStore = useGeneralNotificationStore()
const { getCurrentNotification } = storeToRefs(generalNotificationStore)

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [notificationVariant.value])
})

const animationDuration = computed(() => {
  return getCurrentNotification.value?.duration
    ? `${getCurrentNotification.value?.duration / 1000}s`
    : '3s'
})

const notificationVariant = computed(() => {
  return getCurrentNotification.value?.variant
})

const notificationIcon = computed(() => {
  return getCurrentNotification.value?.icon
})

const iconColor = computed(() => {
  return `${notificationVariant.value}-gradient`
})

// Subscriptions
generalNotificationStore.$subscribe(() => {
  generalNotificationStore.displayNextNotification()
})
</script>

<style lang="scss" scoped>
@import '../../styles/mixins/animated-border';

.a-general-notification {
  $self: &;

  @mixin notification-accent($gradient) {
    @include animated-border($gradient);

    #{$self}__indicator::before {
      background: $gradient;
    }
  }

  @include respond-to('md-and-up') {
    width: 480px;
  }

  @include notification-accent(var(--info-gradient));

  position: fixed;
  z-index: 9999;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);

  box-sizing: border-box;
  width: 300px;
  padding: $global-spacing-10;

  border-radius: $global-border-radius-10;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

  transition: width 0.5s ease-in-out;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-10;

    padding: $global-spacing-20 $global-spacing-30;

    background-color: var(--secondary-1);
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__title {
    display: inline-flex;
    flex: 1;
    justify-content: center;

    min-width: 100%;

    text-align: center;
  }

  &__dismiss {
    cursor: pointer;
    transform: translateX(-100%);
    display: flex;
    align-items: center;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__text {
    display: flex;
    align-self: center;

    padding: $global-spacing-10 0;

    font-size: $global-font-size-40;
    text-align: center;
    word-wrap: break-word;
  }

  &__body-decorators {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: $global-spacing-10;
  }

  &__indicator {
    width: 100%;
    height: 4px;
    margin-bottom: $global-spacing-20;

    background: var(--secondary-2);
    border-radius: $global-border-radius-20;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 15%);

    &::before {
      content: '';

      display: block;

      box-sizing: border-box;
      width: 100%;
      height: 4px;

      border-radius: $global-border-radius-20;

      animation: shrink-width v-bind(animationDuration) cubic-bezier(0.3, 0.3, 0.3, 0.3) forwards;
    }
  }

  &--success {
    @include notification-accent(var(--success-gradient));
  }

  &--warning {
    @include notification-accent(var(--warning-gradient));
  }

  &--danger {
    @include notification-accent(var(--danger-gradient));
  }
}

@keyframes shrink-width {
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateX(-50%) scale(0);
  }

  50% {
    transform: translateX(-50%) scale(1.1);
  }

  100% {
    transform: translateX(-50%) scale(1);
  }
}
</style>
