import { RouteRecordRaw } from 'vue-router'

const system: RouteRecordRaw = {
  path: '/test',
  component: () => import('@/views/Home.vue'),
}

export default system
