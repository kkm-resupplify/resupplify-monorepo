<template>
  <transition name="bounce">
    <div v-if="!!currentNotification" :class="generateClasses">
      <div class="a-general-notification__body">
        <div class="a-general-notification__text">
          {{ currentNotification.text }}
        </div>

        <div class="a-general-notification__dismiss">
          <a-icon
            size="medium"
            icon="close"
            color="app-theme"
            @click="generalNotificationStore.closeCurrentNotification()"
          />
        </div>
      </div>

      <span class="a-general-notification__indicator" />
    </div>
  </transition>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Stores
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Components
import AIcon from '@sharedAtoms/icon/AIcon.vue'

// Inits
const baseClass = 'a-general-notification'

const { generateClassNames } = useClassComposable()

const generalNotificationStore = useGeneralNotificationStore()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const currentNotification = computed(() => {
  return generalNotificationStore.getCurrentNotification
})

const animationDuration = computed(() => {
  if (currentNotification.value?.duration) {
    return `${currentNotification.value?.duration / 1000}s`
  }

  return 0
})

// Subscriptions
generalNotificationStore.$subscribe(() => {
  generalNotificationStore.displayNextNotification()
})
</script>

<style lang="scss" scoped>
.a-general-notification {
  position: fixed;
  z-index: 9999;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;

  box-sizing: border-box;
  width: 350px;
  padding: $global-spacing-30;

  background-color: var(--background-primary);
  border: 2px solid var(--background-secondary-1);
  border-radius: $global-border-radius-10;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

  &__body {
    display: flex;
    gap: $global-spacing-40;
    justify-content: space-between;
  }

  &__text {
    align-self: flex-start;

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

    background: var(--background-secondary-1);
    border-radius: $global-border-radius-20;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 15%);

    &::before {
      content: '';

      display: block;

      box-sizing: border-box;
      width: 100%;
      height: 4px;

      background: var(--background-primary-gradient);
      border-radius: $global-border-radius-20;

      animation: shrink-width v-bind(animationDuration) linear forwards;
    }
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
