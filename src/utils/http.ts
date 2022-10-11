import axios from 'axios'

const http = axios.create()

// 请求拦截
http.interceptors.request.use(
  (config) => config,
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截
http.interceptors.response.use((response) => {
  // 这里可以判断响应回来的内容是否合法和判断状态码等业务
  return response.data
})
