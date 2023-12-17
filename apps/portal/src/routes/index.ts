import AuthRoutes from './auth/AuthRoutes'
import UserRoutes from './user/UserRoutes'
import ResourcesRoutes from './resources/ResourcesRoutes'
import OffersRoutes from './offers/OffersRoutes'
import CompaniesRoutes from './companies/CompaniesRoutes'
import CompanyRoutes from './company/CompanyRoutes'
import HomeRoutes from './home/HomeRoutes'
import Settings from './settings/SettingsRoutes'
import TestRoutes from './test/TestRoutes'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import PreviewRoutes from './preview/PreviewRoutes'

const routes = [
  ...HomeRoutes,
  ...AuthRoutes,
  ...Settings,
  ...ResourcesRoutes,
  ...OffersRoutes,
  ...PreviewRoutes,
  ...CompaniesRoutes,
  ...UserRoutes,
  ...CompanyRoutes,
  ...TestRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const getRouteNames = (routes: RouteRecordRaw[]): { [key: string]: string } => {
  const names: { [key: string]: string } = {}

  const traverse = (routes: RouteRecordRaw[]) => {
    for (const route of routes) {
      if (route.name && typeof route.name === 'string') {
        names[route.name.toUpperCase()] = route.name
      }

      if (route.children) {
        traverse(route.children)
      }
    }
  }
  traverse(routes)

  return names
}

export default router
export const RouteNames = getRouteNames(routes)
