export default[
    {
        path: '/Personal',
        name: 'Personal',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Personal/Personal.vue')
      },
      {
        path: '/info',
        name: 'info',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Personal/info.vue')
      },
      {
        path: '/modify',
        name: 'modify',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Personal/modify.vue')
      },
      {
        path: '/pocket',
        name: 'pocket',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Personal/pocket.vue')
      },
      {
        path: '/myorder',
        name: 'myorder',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Personal/order.vue')
      }
]//创建新路由示例----是一个数组