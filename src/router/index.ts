// src/router.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Import your components that will be used as views
import LoginPage from '@/pages/auth/login.vue'
import SignupPage from '@/pages/auth/signup.vue'
import KeyLoadingPage from '@/pages/auth/keyLoading.vue'
import ContainerPage from '@/pages/container/index.vue'
import DashboardPage from '@/pages/dashboard/index.vue'
import organizationPage from '@/pages/organization/index.vue'
import KeyPage from '@/pages/keys/index.vue'

// Define your routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/generatekey',
    name: 'generateKey',
    component: KeyLoadingPage
  },
  {
    path: '/app',
    name: 'app',
    component: ContainerPage,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardPage
      },
      {
        path: 'organization/:id',
        name: 'organization',
        component: organizationPage
      },
      {
        path: 'organization/:id/keys/:keyId',
        name: 'key',
        component: KeyPage
      }
    ]
  }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
