export default[
    {
        path: '/service',
        name: 'service',
        component: () => import(/* webpackChunkName: "about" */ '@/views/service/service.vue')
      }
]//创建新路由示例----是一个数组