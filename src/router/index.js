import { createRouter, createWebHistory } from 'vue-router'
import zhiyaun from './zhiyaun'
import tongzhi from './tongzhi'
import login from '../views/login.vue'
import recommend from './recommend'
import zhutizhuanwang from './zhutizhuanwang'
import release from './Release'
import assistant from './assistant'

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
  }
  // ,
  // {
  //   path: '/yuan/zy',
  //   name: 'zy',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/yuan/zy.vue')
  // }
  ,
  ...zhiyaun,
  ...tongzhi
  ,
  ...recommend
  ,
  ...zhutizhuanwang
  ,
  ...release
  ,
  ...assistant
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router