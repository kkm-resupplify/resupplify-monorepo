import { createRouter, createWebHistory } from 'vue-router'

import TestView from '@/views/Test/TestView.vue'

import HomeView from '@/views/Home/HomeView.vue'
import BrowseView from '@/views/Browse/BrowseView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'
import ResourcesView from '@/views/Resources/ResourcesView.vue'
import UserDetailsViewVue from '@/views/UserDetails/UserDetailsView.vue'
import CompanySettingsViewVue from '@/views/Company/Settings/CompanySettingsView.vue'

const routes = [
  { path: '/test', component: TestView },
  { path: '/', component: HomeView },
  { path: '/browse', component: BrowseView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/resources', component: ResourcesView },
  { path: '/user-details', component: UserDetailsViewVue },
  { path: '/company/settings/profile', component: CompanySettingsViewVue }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
