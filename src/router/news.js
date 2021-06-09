export default[
    {
        path: '/news',
        name: 'news',
        component: () => import('@/views/news/msgone.vue')
      },
      {
        path: '/friend',
        name: 'friend',
        component: () => import('@/views/news/msgtwo.vue')
      },
      {
        path: '/talk',
        name: 'talk',
        component: () => import('@/views/news/msgthree.vue')
      },
      {
        path: '/groupinfo',
        name: 'groupinfo',
        component: () => import('@/views/news/msgfour.vue')
      },{
        path: '/twocode',
        name: 'twocode',
        component: () => import('@/views/news/msgfif.vue')
      }
]