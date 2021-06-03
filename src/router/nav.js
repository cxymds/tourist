export default[
    {
        path: '/nav',
        name: 'nav',
        component: () => import(/* webpackChunkName: "about" */ '@/components/button_nav.vue')
      }
]//创建新路由示例----是一个数组