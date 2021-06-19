export default[
    {
        path: '/recommend/release',
        name: 'release',
        component: () => import('@/views/recommend/release/release.vue')
      },
      {
        path: '/recommend/neirong/:id',
        name: 'neirong',
        component: () => import('@/views/recommend/release/neirong.vue')
      }
]//创建新路由示例----是一个数组