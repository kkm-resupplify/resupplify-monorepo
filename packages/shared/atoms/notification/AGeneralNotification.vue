<template>
  <div v-if="showNotification" :class="generateClasses">
    {{ generalNotificationStore.getTopNotification }}
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Stores
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'

// Composables
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Inits
const baseClass = 'a-general-notification'

const { generateClassNames } = useClassComposable()

const generalNotificationStore = useGeneralNotificationStore()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const showNotification = computed(() => {
  return generalNotificationStore.getNotifications.length > 0
})
</script>

<style lang="scss" scoped>
.a-general-notification {
  position: fixed;
  z-index: 9999;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);

  width: 5%;
  height: 50px;

  background-color: #0f0;
}
</style>
