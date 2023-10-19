import { createRouter, createWebHistory } from 'vue-router'

import AuthRoutes from './auth/AuthRoutes'
import UserRoutes from './user/UserRoutes'

const routes = [...AuthRoutes, ...UserRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
