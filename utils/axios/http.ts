import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import httpConfig from './httpConfig.js'
import {
  notification
} from 'ant-design-vue/lib';
/**
 * 导入配置文件
 */
const service = axios.create(httpConfig)

// 请求拦截器 ，主要是用来做header token设置
service.interceptors.request.use(function (config: any) {
  config.headers['content-type'] = 'application/json;charset=utf-8'
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = localStorage.getItem('token') || ''
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(function (response: AxiosResponse) {
  if (response.data.code == 401) {
    /// token 过期处理方式
    /// 官网的推荐方式 试了没效果。 就采取 消息推送的方式 推送给header 去处理
    window.postMessage('401')
    return response
  }
  if (response.data.code != 200) {
    notification.error({
      message: '错误信息',
      description: response.data.msg,
      duration: 0
    })
  }
  return response
}, function (err) {
  console.log('err:' + err)
})

/**
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
const doGet = (url: string, params: any) => {
  return service.get(url, params)
}
const getUrlDownLoad = (url: string) => {
  return httpConfig.baseURL + url
}
/**
 *
 * @param {string} url
 * @param {any} params
 * @returns
 */
const doPost = (url: string, params: any) => {
  return service.post(url, params)
}
/**
 *
 * @param {string} url
 * @param {any} params
 * @returns
 */
const doPut = (url: string, params: any) => {
  return service.put(url, params)
}
/**
 *
 * @param {string} url
 * @param {any} params
 * @returns
 */
const doDelete = (url: string, params: any) => {
  return service.delete(url, {
    data: params
  })
}

/**
 * formdata 提交file文件
 * @param {string} url
 * @param {any} formdata
 * @param {Function} progressFn
 * @param {Function} cancel
 * @returns
 */
const doUpdateFile = (url: string, formdata: any, progressFn?: Function, cancel?: Function) => {
  return service({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    cancelToken: new axios.CancelToken(c => {
      window.cancelUpload = c;
    }),
    onUploadProgress: function (progressEvent) { //原生获取上传进度的事件
      if (!progressFn) {
        return;
      }
      // console.log(progressEvent)
      if (progressEvent.lengthComputable) {
        //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
        //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
        progressFn(JSON.stringify({
          loaded: progressEvent.loaded,
          total: progressEvent.total
        }));
      }
    },
    data: formdata
  })
}

export {
  doGet,
  doPost,
  doDelete,
  doUpdateFile,
  doPut,
  getUrlDownLoad
}