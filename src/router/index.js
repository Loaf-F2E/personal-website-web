// TODO: 连接server时让后端支持 使用 createWebHistory
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../pages/index.vue'

// TODO: 路由懒加载
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    permissions: ['admin', 'user', 'visitor']
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router