export default[
    {
        path: '/activity',
        name: 'activity-page',
        component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/activity-page.vue')
      },
      {
        path: '/acxiangqing',
        name: 'acxiangqing',
        component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/xiangqing.vue')
      },
      {
        path: '/acfollow',
        name: 'acfollow',
        component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/follow.vue')
      }
]