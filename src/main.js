import 'ant-design-vue/dist/antd.less'
import './styles/index.css'
import { createApp } from 'vue'
import vcolorpicker from 'vcolorpicker'
import App from './App.vue'
import request, { get, post } from './utils/request'

import { setupPinia } from 'stores'
import router from 'router/index'

// 该应用实例是用来在应用中注册‘全局’组件的
// App作为根组件被挂载到应用中，该组件被用作渲染的起点
const app = createApp(App)

app.config.globalProperties.request = request
app.config.globalProperties.get = get
app.config.globalProperties.post = post
setupPinia(app)
app.use(router)
app.use(vcolorpicker)

// 与大多数应用方法不同，mount不返回应用本身，相反，他返回的是根组件实例
app.mount('#app')
