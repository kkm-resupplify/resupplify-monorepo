import Store from 'pinia'

declare module 'vue' {
  interface ComponentCustomProperties {
    $userStore: Store
  }
}

export {}
