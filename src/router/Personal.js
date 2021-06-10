export default[
    {
        path: '/Personal',
        name: 'Personal',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Personal/Personal.vue')
      }
]//创建新路由示例----是一个数组