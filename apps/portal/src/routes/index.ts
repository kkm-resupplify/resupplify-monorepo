import { createRouter, createWebHistory } from 'vue-router'

import TestView from '@/views/Test/TestView.vue'

import HomeView from '@/views/Home/HomeView.vue'
import BrowseView from '@/views/Browse/BrowseView.vue'

import ResourcesView from '@/views/Resources/ResourcesView.vue'
import UserDetailsViewVue from '@/views/UserDetails/UserDetailsView.vue'

import authRoutes from './auth/authRoutes'
const routes = [
  ...authRoutes,
  { path: '/test', component: TestView },
  { path: '/', component: HomeView },
  { path: '/browse', component: BrowseView },
  { path: '/resources', component: ResourcesView },
  { path: '/user-details', component: UserDetailsViewVue }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
