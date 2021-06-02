import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import tongzhi from './tongzhi'
import login from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/userlogin.vue')
  },
  ...tongzhi
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router