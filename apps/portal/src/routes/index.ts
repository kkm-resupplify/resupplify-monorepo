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

export const router = createRouter({
  history: createWebHistory(),
  routes
})
