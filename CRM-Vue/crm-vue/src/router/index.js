import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {layout: 'empty'},
    component: () => import('@/views/Registration.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: () => import('@/views/Categories.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {layout: 'main'},
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import('@/views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: () => import('@/views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main'},
    component: () => import('@/views/Record.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
