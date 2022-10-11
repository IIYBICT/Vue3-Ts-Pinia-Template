import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import appRoutes from './routes'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/register',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  // 这个对应./routes,在./routes/modules中ts结尾的文件，注意格式
  ...appRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})
export default router
