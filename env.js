export default {
    production: {
        NODE_ENV: 'production',
        ENV_API: 'http://172.16.201.3:8090', // 后台api 请求地址
    },
    development: {
        NODE_ENV: 'development',
        ENV_API: 'http://124.70.150.250:9001', // 后台api 请求地址
    }
}