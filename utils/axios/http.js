import axios from 'axios'
import httpConfig from './httpConfig.js'
import {
  notification
} from 'ant-design-vue/lib';
/**
 * 导入配置文件
 */
const service = axios.create(httpConfig)

// 请求拦截器 ，主要是用来做header token设置
service.interceptors.request.use(function (config) {
  config.headers['content-type'] = 'application/json;charset=utf-8'
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token') || ''
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(function (response) {
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
const doGet = (url, params) => {
  return service.get(url, params)
}
const getUrlDownLoad = url => {
  return httpConfig.baseURL + url
}
/**
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
const doPost = (url, params) => {
  return service.post(url, params)
}
const doPut = (url, params) => {
  return service.put(url, params)
}
/**
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
const doDelete = (url, params) => {
  return service.delete(url, {
    data: params
  })
}

/**
 * formdata 提交file文件
 * @param {*} url
 * @param {*} formdata
 * @returns
 */
const doUpdateFile = (url, formdata, progressFn = null, cancel = null) => {
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