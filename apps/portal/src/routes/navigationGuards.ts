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

export class MustBeAuthenticated extends NavigationGuard {
  static guard(): Route | void {
    const userStore = useUserStore()

    if (!userStore.isAuthenticated) {
      return { name: RouteNames.LOGIN }
    }
  }
}

export class MustNotBeAuthenticated extends NavigationGuard {
  static guard(): boolean | void {
    const userStore = useUserStore()

    if (userStore.isAuthenticated) {
      return false
    }
  }
}

// MustBelongToCompany ?
