// 通过环境来改变 baseurl
import env from '~/env.js'
const baseUrl = env[process.env.NODE_ENV].ENV_API
export default {
  baseURL: baseUrl,
  timout: 50000
}