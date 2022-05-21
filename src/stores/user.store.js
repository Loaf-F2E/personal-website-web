import { defineStore } from 'pinia'

import { permissionsMap } from '../constants'

export const userStore = defineStore(Symbol('user'), {
  state: () => ({
    isLogin: false, // 是否登录
    userType: permissionsMap.visitor, // 用户类型
    userInfo: {} // 用户信息
  })
})