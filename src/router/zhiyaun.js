export default[
    {
        path: '/activity',
        name: 'activity-page',
        component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/activity-page.vue')
      },
      {
        path: '/activity-details',
        name: 'activity-details',
        component: () => import(/* webpackChunkName: "about" */ '@/views/activity-page/activity-details/activity-details-page.vue')
      }
]