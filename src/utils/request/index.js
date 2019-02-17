import vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import { toast } from 'components/zv-pop/index'

// 创建axios实例
vue.prototype.$BASE_API = process.env.VUE_APP_BASE_URL
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api的base_url
  timeout: 20000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }
})

let loading = null
// request拦截器
service.interceptors.request.use(
  config => {
    // 在请求先展示加载框
    if (!config.data || !config.data.isHideLoading) {
      loading = toast({ loading: '加载中...' })
    }
    // 配置调试
    handleUrl(config)

    // 处理请求参数
    handleParams(config)

    // 是否要更改header内容 上传文件
    if (config.isFile) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }

    // 删除多余的参数isHideLoading
    if (config.data.isHideLoading) {
      delete config.data.isHideLoading
    }

    // 用qs处理参数可以处理options请求（预请求），或者设置'Access-Control-MAX-AGE':'1000'
    if (config.method === 'post') {
      // 设置参数拼接方式
      if (
        config.data &&
        config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
      ) {
        config.data = qs.stringify(config.data)
      }
    } else {
      if (config.data) {
        config.url = config.url + '?' + qs.stringify(config.data)
      }
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    // 请求响应后关闭加载框
    if (loading) {
      loading.clear()
    }
    // code为非0是抛错 可结合自己业务进行修改
    if (response.status === 200) {
      const res = response.data
      if (res.code !== '0') {
        // let message = res.msg
        // console.log(message)
      }
      return res
    } else {
      // 隐藏loading
      return Promise.reject('networkRequestError')
    }
  },
  error => {
    // 请求响应后关闭加载框
    if (loading) {
      loading.clear()
    }
    // 断网 或者 请求超时 状态
    if (!error.response) {
      // 请求超时状态
      if (error.message.includes('timeout')) {
        // console.log('超时了')
        // Message.error('请求超时，请检查网络是否连接正常')
      } else {
        // 可以展示断网组件
        // console.log('断网了')
        // Message.error('请求失败，请检查网络是否已连接')
      }
      return
    }
    return Promise.reject(error)
  }
)

// 处理请求参数
function handleParams(config) {
  if (!config.data) {
    // 防止不传参数的情况下，config中没有data属性
    config['data'] = {}
  }

  // 登录不要sessionId
  if (!config.noLogin) {
    // 接口调试的时候，向后台索取sessionId，给 config.data['sessionId'] 赋值
    config.data['sessionId'] = store.getters.sessionId
  }

  // 合并请求参数
  if (config.params) {
    config.data = { ...config.data, ...config.params }
  }
}

// 处理调试模式下，端口问题
function handleUrl(config) {
  if (process.env.NODE_ENV !== 'debugger') {
    return
  }

  // debugger 模式，拼接端口号
  let portConfig = require('./debugger.port')
  const apiName = config.url.match(/([\w]+)/)[1]
  config.baseURL = config.baseURL + ':' + portConfig.port[apiName]
}

export default service
