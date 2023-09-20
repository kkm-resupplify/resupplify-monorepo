import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

interface Notification {
  uuid?: string
  text: string
  duration: number
}

interface GeneralNotificationStore {
  notificationQueue: Notification[]
  currentNotification: Notification | null
  wasClosed: boolean
}

export const useGeneralNotificationStore = defineStore({
  id: 'generalNotification',

  state: (): GeneralNotificationStore => ({
    notificationQueue: [],
    currentNotification: null,
    wasClosed: false
  }),

  getters: {
    getNotifications: (state) => state.notificationQueue,
    getCurrentNotification: (state) => state.currentNotification,
    getCurrentNotificationUuid: (state) => state.currentNotification?.uuid ?? 'ph'
  },

  actions: {
    addNotification(notification: Notification): void {
      notification.uuid = uuidv4()
      this.notificationQueue.push(notification)
    },

    clearNotifications(): void {
      this.notificationQueue = []
    },

    setCurrentNotification(notification: Notification): void {
      this.currentNotification = notification
    },

    displayNextNotification(): void {
      if (!this.currentNotification) {
        const notification = this.notificationQueue.shift()

        if (notification) {
          this.setCurrentNotification(notification)

          setTimeout(() => {
            if (this.wasClosed) {
              this.wasClosed = false
            } else {
              this.currentNotification = null
            }
          }, notification.duration + 100)
        }
      }
    },

    closeCurrentNotification(): void {
      this.currentNotification = null
      this.wasClosed = true
    },

    closeAllNotifications(): void {
      this.notificationQueue = []
    }
  }
})
