import { createRouter, createWebHistory } from 'vue-router'
import zhiyaun from './zhiyaun'
import tongzhi from './zhutika/tongzhi'
import login from '../views/login.vue'
import recommend from './recommend'
import zhutizhuanwang from './zhutika/zhutizhuanwang'
import release from './Release'
import Personal from './Personal'
import hotel from './zhutika/hotel'
import news from './news'


import assistant from './assistant'
import tongxun from './zhutika/tongxun'
import kayingyuan from './zhutika/kayingyuan'



const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    component: () => import( '../views/userlogin.vue')
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: () => import( '../components/Qrcode.vue')
  }
  ,
  ...zhiyaun
  ,
  ...tongzhi
  ,
  ...recommend
  ,
  ...zhutizhuanwang
  ,
  ...release
  ,
  ...news
  ,
  ...assistant
  ,
  ...tongxun
  ,
  ...kayingyuan
  ,
  ...Personal
  ,
  ...hotel
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router