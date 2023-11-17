import AuthRoutes from './auth/AuthRoutes'
import AdminRoutes from './admin/AdminRoutes'

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes = [...AuthRoutes, ...AdminRoutes]

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
