export default[
    {
        path: '/activity',
        name: 'activity-page',
        component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/activity-page.vue')
      },
<<<<<<< HEAD
      {
        path: '/acxiangqing',
        name: 'acxiangqing',
        component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/xiangqing.vue')
      },
=======
      // {
      //   path: '/activity-details',
      //   name: 'activity-details',
      //   // component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/activity-details/activity-details-page.vue')
      // },
>>>>>>> 9ac2a048683bf9c6b4b2a75c1e88df32929ccd8d
      {
        path: '/acfollow',
        name: 'acfollow',
        component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/follow.vue')
      }
]