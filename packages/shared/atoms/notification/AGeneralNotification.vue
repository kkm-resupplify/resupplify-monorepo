<template>
  <transition name="bounce">
    <div v-if="!!getCurrentNotification" :class="generateClasses">
      <div class="a-general-notification__wrapper">
        <div class="a-general-notification__body">
          <span class="a-general-notification__text" v-text="getCurrentNotification?.text" />

          <div class="a-general-notification__dismiss">
            <a-icon
              size="medium"
              icon="close"
              color="app-theme"
              @click="generalNotificationStore.closeCurrentNotification"
            />
          </div>
        </div>

        <span class="a-general-notification__indicator" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
// TODO:
// variants: success, danger, info

// Vue
import { computed } from 'vue'

// Stores
import { storeToRefs } from 'pinia'
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Components
import AIcon from '@sharedAtoms/icon/AIcon.vue'

// Inits
const baseClass = 'a-general-notification'

const { generateClassNames } = useClassComposable()

// Destruct
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

  @include notification-accent(var(--background-info-gradient));

  position: fixed;
  z-index: 9999;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);

  box-sizing: border-box;
  width: 350px;
  padding: $global-spacing-10;

  border-radius: $global-border-radius-10;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-10;

    padding: $global-spacing-20 $global-spacing-30;

    background-color: var(--background-secondary-1);
  }

  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__text {
    align-self: flex-start;

    padding: $global-spacing-20;

    font-size: $global-font-size-40;
    line-height: 1;
    text-justify: justify;
    word-wrap: break-word;
  }

  &__dismiss {
    cursor: pointer;
    display: flex;
    align-items: center;
    align-self: flex-start;
  }

  &__indicator {
    width: 100%;
    height: 4px;
    margin-bottom: $global-spacing-20;

    background: var(--background-secondary-2);
    border-radius: $global-border-radius-20;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 15%);

    &::before {
      content: '';

      display: block;

      box-sizing: border-box;
      width: 100%;
      height: 4px;

      border-radius: $global-border-radius-20;

      animation: shrink-width v-bind(animationDuration) linear forwards;
    }
  }

  &--success {
    @include notification-accent(var(--background-success-gradient));
  }

  &--warning {
    @include notification-accent(var(--background-warning-gradient));
  }

  &--danger {
    @include notification-accent(var(--background-danger-gradient));
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
