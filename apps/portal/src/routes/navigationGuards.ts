import { useUserStore } from '@/stores/user/useUserStore'
import { RouteNames } from '@/routes/index'

interface Route {
  name: string
}

abstract class NavigationGuard {
  static guard(): void | Route | boolean {}
}

export class MustHaveUserDetailsNavigationGuard extends NavigationGuard {
  static guard(): Route | void {
    const userStore = useUserStore()
    if (!userStore.getUserDetails) {
      return { name: RouteNames.SETTINGS }
    }
  }
}

export class MustBeAuthenticated {}
