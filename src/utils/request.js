import axios from 'axios'
import { message } from 'ant-design-vue'
import { isPlainObject, param } from './param'
import HTTP_STATUS from '../constants/httpStatus'

const service = axios.create({
  basieUrl: '/api',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  timeout: 30 * 1000
})

// 请求拦截
service.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})

// 相应拦截
// service.interceptors.response.use(
//   response => {
//     const res = response.data
//     if (res.code === 0) {
//       return res
//     } else if (res.code === 10000) {
//       // 10000假设是未登录状态码
//       Message.warning(res.message)
//       // 也可使用router进行跳转
//       window.location.href = '/#/login'
//       return res
//     } else {
//       // 错误显示可在service中控制，因为某些场景我们不想要展示错误
//       // Message.error(res.message);
//       return res
//     }
//   },
//   () => {
//     message.error('网络请求异常，请稍后重试')
//   }
// )

export default function request(config = {}) {
  return new Promise((resolve, reject) => {
    service(config).then(response => {
      console.log('response: ', response)
      const { data, status } = response || {}

      if (status === HTTP_STATUS.AUTHENTICATE) {
        return message.error('暂无权限！')
      }

      resolve(data)

      // if (code === 0) {
      //   resolve(data)
      // } else {
      //   // throw new Error(message || 'request error')
      //   reject(message)
      // }
    })
  }).catch(err => {
    console.log('request err :>> ', err)
  })
}

export function get(url, params = {}, config = {}) {
  params = Object.assign(
    {
      _r: new Date().getTime()
    },
    params
  )

  return request(
    object.assign({}, config, {
      method: 'get',
      url: url + (url.indexOf('?') > -1 ? '&' : '?') + param(params)
    })
  )
}

export function post(url, data, config = {}) {
  return request(
    Object.assign({}, config, {
      method: 'post',
      url,
      data: isPlainObject(data) ? param(data) : data
    })
  )
}

export function postJson(url, data, config = {}) {
  return request(
    Object.assign(
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      },
      config,
      {
        method: 'post',
        url,
        data
      }
    )
  )
}
