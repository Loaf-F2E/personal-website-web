import 'ant-design-vue/dist/antd.less'
import './styles/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import request, { get, post } from './utils/request'

import { setupPinia } from 'stores'
import router from 'router/index'
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor'
import '@kangc/v-md-editor/lib/style/codemirror-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// highlightjs
import hljs from 'highlight.js'

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror'
// mode
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/vue/vue'
// edit
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/matchbrackets'
// placeholder
import 'codemirror/addon/display/placeholder'
// active-line
import 'codemirror/addon/selection/active-line'
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'
// style
import 'codemirror/lib/codemirror.css'

VMdEditor.Codemirror = Codemirror
// Markdown编辑组件
VMdEditor.use(githubTheme, {
  Hljs: hljs
})
// Markdown预览组件
VMdPreview.use(githubTheme, {
  Hljs: hljs
})

// 该应用实例是用来在应用中注册‘全局’组件的
// App作为根组件被挂载到应用中，该组件被用作渲染的起点
const app = createApp(App)

app.config.globalProperties.request = request
app.config.globalProperties.get = get
app.config.globalProperties.post = post
setupPinia(app)
app.use(router)
app.use(VMdEditor)
app.use(VMdPreview)

// 与大多数应用方法不同，mount不返回应用本身，相反，他返回的是根组件实例
app.mount('#app')
