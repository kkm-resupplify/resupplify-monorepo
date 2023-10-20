import { createRouter, createWebHistory } from 'vue-router'

import AuthRoutes from './auth/AuthRoutes'
import UserRoutes from './user/UserRoutes'
import ResourcesRoutes from './resources/ResourcesRoutes'
import TestRoutes from './test/TestRoutes'
import CompanyRoutes from './company/CompanyRoutes'
import HomeRoutes from './home/HomeRoutes'
import Settings from './settings/SettingsRoutes'

const routes = [
  ...HomeRoutes,
  ...AuthRoutes,
  ...Settings,
  ...TestRoutes,
  ...ResourcesRoutes,
  ...UserRoutes,
  ...CompanyRoutes
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import type { RouteRecordRaw } from 'vue-router'
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

export const RouteNames = getRouteNames(routes)
