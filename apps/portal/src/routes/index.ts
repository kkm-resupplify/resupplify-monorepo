import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home/HomeView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'
import ResourcesView from '@/views/Resources/ResourcesView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/resources', component: ResourcesView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
