import { type RouteRecordRaw } from 'vue-router'
export const constantRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      hidden: false
      //   icon: 'Avatar',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home1/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          hidden: false
          //   icon: 'HomeFilled',
        }
      },
      {
        path: '/work',
        component: () => import('@/views/work/index.vue'),
        name: 'work',
        meta: {
          title: '作品',
          hidden: false
        }
      },
      {
        path: '/blog',
        component: () => import('@/views/blog/index.vue'),
        name: 'blog',
        meta: {
          title: '博客',
          hidden: false
        }
      }
    ]
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true
      //   icon: 'DocumentDelete',
    }
  }
]

export const asyncRoute = []

export const anyRoute = {
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true
    // icon: 'House',
  }
}
