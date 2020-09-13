import axios from 'axios'
 import {Loading} from 'element-ui'
 /**
 * 配置不同环境接口前缀
 * 如果未配置默认开发配置
 * @param {*} base
 * @example
 * {
 *   dev: '开发环境配置',
 *   prod: '线上环境配置'
 * }
 */
  // function conf (base = {}) {
  //   if (process.env.NODE_ENV === 'development') {
  //     let env = process.env.ENV_CONFIG || 'dev'
  //     return base[env] || base['dev']
  //   }else if(process.env.NODE_ENV === 'production'){
  //     let env = process.env.ENV_CONFIG || 'dev'
  //     return base[env] || base['dev']
  //   }
    
  //   return base['dev']
  // }

  // const POR_LOGIN_LOGOUT = conf({
  //   dev:  'http://122.152.200.11:3030',
  //   prod: 'https://kengine.kec-app.com:8443'
  // })
  // axios.defaults.baseURL = POR_LOGIN_LOGOUT ;

  const baseUrl = process.env.BASE_URL ;
  axios.defaults.baseURL = baseUrl ;
  axios.defaults.timeout = 10000 ;
  // axios.defaults.withCredentials = true
  
  
  var loading ;

  axios.interceptors.request.use(
    config => {
      loading = Loading.service(
        { fullscreen: true,
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      return config
    },
    err => {
      setTimeout(() => {
        loading.close();
      }, 300);
      return Promise.reject(err)
    }
  )

  axios.interceptors.response.use(
    response => {
      
      setTimeout(() => {
        loading.close();
      }, 300);
      return response
    },
    error => {
      setTimeout(() => {
        loading.close();
      }, 300);
      return Promise.reject(error)
    }
  )
  axios.defaults.headers['Content-Type'] = 'application/json'
  axios.defaults.responseType = 'json'
  export default axios ;