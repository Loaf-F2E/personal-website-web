// TODO: 连接server时让后端支持 使用 createWebHistory
import { createRouter, createWebHashHistory } from 'vue-router'

import { permissionsMap } from '../constants'
import Index from '../pages/index.vue'
import Administer from '../pages/administer/index.vue'
import UserManagement from '../pages/administer/userManagement/index.vue'

// TODO: 路由懒加载
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    // meta: ['admin', 'user', 'visitor']
  },
  // 后台管理
  {
    path: '/administer',
    name: 'administer',
    component: Administer,
    meta: {
      permissions: [permissionsMap.administer]
    },
    children: [
      {
        path: 'user',
        component: UserManagement
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// TODO: 全局变量用pinia存
const userType = 'administer'
const isLogin = false


// router.beforeEach((to, from) => {
//   const { meta, name } = to
//   const { permissions = [] } = meta

//   console.log('permissions?.a :>> ', permissions?.a);
//   if (permissions.findIndex(x => x === permissionsMap.administer) !== -1) {
//     if (!isLogin) {
//       return { path: 'login' }
//     }

//     if (userType === permissionsMap.administer) {
//       return true
//     }
//   }
//   // if (!isLogin && userType === permissionsMap.administer && )
//   return false
// })

export default router