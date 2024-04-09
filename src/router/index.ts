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
import { useAuthStore } from '@/store/useAuthStore'

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

// Define the navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Check if userData is null and the route is not the login page
  if (!authStore.getUserData.value && to.name !== 'login') {
    // Redirect to the login page
    authStore.resetAll();
    next({ name: 'login' });
  } else {
    // Allow navigation to the requested route
    next();
  }

});

export default router
