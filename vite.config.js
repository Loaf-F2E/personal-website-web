import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { viteMockServe } from 'vite-plugin-mock'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
const path = require('path')

// https://vitejs.dev/config/
export default ({ command }) => {
  return defineConfig({
    resolve: {
      alias: {
        src: resolve('src'),
        assets: resolve('src/assets'),
        components: resolve('src/components'),
        constants: resolve('src/constants'),
        pages: resolve('src/pages'),
        router: resolve('src/router'),
        stores: resolve('src/stores'),
        utils: resolve('src/utils')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: '@import "./src/styles/global.less";',
          modifyVars: {
            // 此处也可设置直角、边框色、字体大小等
            'primary-color': '#94B1FF'
          },
          javascriptEnabled: true
        }
      }
    },
    server: {
      // proxy: {
      //   '/api': {
      //     target: 'http://localhost:8002',
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/api/, '')
      //   }
      // }
    },
    plugins: [
      vue(),
      Components({ resolvers: [AntDesignVueResolver()] }),
      viteMockServe({
        localEnabled: command === 'serve',
        watchFiles: true,
        mockPath: './mock'
      })
    ],
    optimizeDeps: {
      include: ['@kangc/v-md-editor/lib/theme/vuepress.js']
    }
  })
}

function resolve(dir) {
  return path.resolve(__dirname, dir)
}
