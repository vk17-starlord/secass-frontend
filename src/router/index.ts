// src/router.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// Import your components that will be used as views
// Define your routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/pages/auth/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/pages/auth/signup.vue')
  },
  {
    path: '/generatekey',
    name: 'generateKey',
    component: () => import('@/pages/auth/keyLoading.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/dashboard/index.vue')
  },
  {
    path: '/organization',
    name: 'organization',
    component: () => import('@/pages/organization/index.vue')
  }
  // Add more routes as needed
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
