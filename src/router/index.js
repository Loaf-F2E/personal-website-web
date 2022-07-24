// TODO: 连接server时让后端支持 使用 createWebHistory
import { createRouter, createWebHashHistory } from 'vue-router'

import { permissionsMap, pathsMap } from 'constants'
import Index from 'pages/index.vue'
import Administer from 'pages/administer/index.vue'
import UserManagement from 'pages/administer/userManagement/index.vue'
import Article from 'pages/administer/blogManagement/article/index.vue'
import Tag from 'pages/administer/blogManagement/tag/index.vue'
import Login from 'pages/Login/index.vue'
import { useUserStore } from 'stores'

// TODO: 路由懒加载
const routes = [
  {
    path: pathsMap.Index,
    component: Index
    // meta: ['administer', 'user', 'visitor']
  },
  {
    path: pathsMap.administer,
    component: Administer,
    meta: {
      permissions: [permissionsMap.administer]
    },
    children: [
      {
        path: pathsMap.userManagement,
        component: UserManagement
      },
      {
        path: pathsMap.article,
        component: Article
      },
      {
        path: pathsMap.tagManagement,
        component: Tag
      }
    ]
  },
  {
    // 登录
    path: pathsMap.login,
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// global router guard
router.beforeEach(async to => {
  // const { meta, path } = to
  // const { permissions = [] } = meta
  // const store = await useUserStore()
  // const { isLogin, userType } = store

  // if (permissions.findIndex(x => x === permissionsMap.administer) !== -1) {
  //   if (!isLogin && path !== pathsMap.login) {
  //     return { path: pathsMap.login }
  //   }

  //   if (userType === permissionsMap.administer) {
  //     return true
  //   }

  //   // 已经登录但是不是管理员角色
  //   return false
  // }

  return true
})

export default router
