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

export class MustBeAuthenticatedNavigationGuard extends NavigationGuard {
  static guard(): Route | void {
    const userStore = useUserStore()

    if (!userStore.isAuthenticated) {
      return { name: RouteNames.LOGIN }
    }
  }
}

export class MustNotBeAuthenticatedNavigationGuard extends NavigationGuard {
  static guard(): boolean | void {
    const userStore = useUserStore()

    if (userStore.isAuthenticated) {
      return false
    }
  }
}

export class MustBelongToCompanyNavigationGuard extends NavigationGuard {
  static guard(): boolean | void {
    const userStore = useUserStore()

    if (userStore.hasCompany) {
      return false
    }
  }
}

