import { useUserStore } from '@/stores/user/useUserStore'
import type { RouteRecordRaw } from 'vue-router'

interface NavigationGuard {
  guard(): void | RouteRecordRaw | boolean
}

class MustHaveUserDetailsNavigationGuard implements NavigationGuard {
  guard(): boolean {
    const userStore = useUserStore()
    if (!userStore.isLoggedIn) {
      return false
    }
    return false
  }
}

class MustBeAuthenticated {}
