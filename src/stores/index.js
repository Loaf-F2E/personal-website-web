import { createPinia } from 'pinia'

// pinia 根存储
const pinia = createPinia()

export function setupPinia(app){
  pinia.use(({ store }) => {
    // pinia 插件  可以把 router 挂载到 pinia 中
    // store.$router = router   
  })

  app.use(pinia)
}

export * from './user.store'