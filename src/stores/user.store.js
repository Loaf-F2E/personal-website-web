import { defineStore } from 'pinia'

import { permissionsMap, piniaIdMap } from 'constants'

export const useUserStore = defineStore({
  id: piniaIdMap.user,
  state: () => ({
    isLogin: true, // 是否登录
    userType: permissionsMap.visitor, // 用户类型
    userInfo: {} // 用户信息
  })
})
