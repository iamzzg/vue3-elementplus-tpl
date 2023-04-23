import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.request(
  config => {
    // config.headers.Authorization = ''
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  resp => {
    return resp.data
  },
  err => {
    return Promise.reject(err)
  }
)
