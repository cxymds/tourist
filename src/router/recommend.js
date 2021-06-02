export default[
    {
        path: '/recommend',
        name: 'recommend',
        component: () => import(/* webpackChunkName: "about" */ '@/views/recommend/recommend.vue')
      }
]//创建新路由示例----是一个数组