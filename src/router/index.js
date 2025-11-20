import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'

import HomeView from '../views/HomeView.vue'
import TestingView from '../views/TestingView.vue'
import TestIDView from '../views/TestIDView.vue'
import AuthView from '../views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth : false},
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {requiresAuth : false},
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView,
      meta: {requiresAuth : false},
    },
    {
      path: '/testid/:id',
      name: 'testid',
      component: TestIDView,
      props: true,
      meta: {requiresAuth : true},
    },
     {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      meta: {requiresAuth : false},
    },
  ],
})

// navigation guard
router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for
  // the users, others won't
  if (to?.meta?.requiresAuth) {
    const currentUser = await getCurrentUser()
    // if the user is not logged in, redirect to the login page
    if (!currentUser) {
      return {
        path: '/auth',
      }
    }
  }
})

export default router
