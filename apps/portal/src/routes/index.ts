import { createRouter, createWebHistory } from 'vue-router'

import TestView from '@/views/Test/TestView.vue'

import HomeView from '@/views/Home/HomeView.vue'
import BrowseView from '@/views/Browse/BrowseView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'
import ResourcesView from '@/views/Resources/ResourcesView.vue'

const routes = [
  { path: '/test', component: TestView },

  { path: '/', component: HomeView },
  { path: '/browse', component: BrowseView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/resources', component: ResourcesView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
