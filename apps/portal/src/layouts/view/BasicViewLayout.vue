<template>
  <div class="basic-view-layout">
    <a-general-notification />

    <div class="basic-view-layout__header">
      <navigation-bar />
      <a-button text="notify" @click="testNotification" />
    </div>

    <div class="basic-view-layout__hero">
      <slot name="hero" />
    </div>

    <div class="basic-view-layout__body">
      <slot name="body" />
    </div>

    <div class="basic-view-layout__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import NavigationBar from '@/components/navigation/NavigationBar.vue'
import AGeneralNotification from '@sharedAtoms/notification/AGeneralNotification.vue'
import AButton from '@sharedAtoms/button/AButton.vue'

// Stores
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'

// Inits
const generalNotificationStore = useGeneralNotificationStore()

// Methods
const testNotification = () => {
  const notification = {
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    duration: 3000,
    variant: 'success'
  }
  generalNotificationStore.addNotification(notification)
}
</script>

<style scoped lang="scss">
.basic-view-layout {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
  }

  &__hero {
    display: flex;
  }

  &__body {
    display: flex;
    flex-direction: column;
    padding: $global-spacing-30 $global-spacing-40;
  }

  &__footer {
    display: flex;
  }
}
</style>
