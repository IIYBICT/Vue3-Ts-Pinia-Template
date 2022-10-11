import router from '@/router'

// 路由守卫
router.beforeEach((to, _, next) => {
  document.title = to.meta.title === undefined ? '默认标题' : String(to.meta.title)
  next()
})
