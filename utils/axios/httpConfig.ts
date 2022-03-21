// 通过环境来改变 baseurl
import envConfig from '~/env.js'
let env = process.env.NODE_ENV || 'development';
const baseUrl = envConfig[env].ENV_API
export default {
  baseURL: baseUrl,
  timout: 50000
}