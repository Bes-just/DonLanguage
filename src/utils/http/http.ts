// import axios from 'axios'
// import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// import type { RequestConfig, RequestInterceptors } from './types'

// class Request {
//     // axios实例
//     instance: AxiosInstance
//     // 拦截器对象
//     interceptorsObj?: RequestInterceptors
//     constructor(config: AxiosRequestConfig) {
//         this.instance = axios.create(config)
//         this.instance.interceptors.request.use(
//             (res: AxiosRequestConfig) => {
//                 console.log('全局请求拦截器');
//                 return res
//             },
//             (err: any) => err
//         )
//         // 使用实例拦截器
//         this.instance.interceptors.request.use(
//             this.interceptorsObj?.requestInterceptors,
//             this.interceptorsObj?.requestInterceptorsCatch,
//         )
//         this.instance.interceptors.response.use(
//             this.interceptorsObj?.responseInterceptors,
//             this.interceptorsObj?.responseInterceptorsCatch,
//         )
//         // 全局响应拦截器保证最后执行
//         this.instance.interceptors.response.use(
//             (res: AxiosResponse) => {
//                 console.log('全局响应拦截器');
//                 return res.data
//             },
//             (err: any) => err
//         )
//     }
//     request(config: AxiosRequestConfig) {
//         return this.instance.request(config)
//     }
    
// }

// export default Request


import axios from 'axios'
// axios進行二次封裝
const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
  // 是否允许携带身份信息，自定义请求头，cookie
  withCredentials: true,
});
// 请求拦截
http.interceptors.request.use(function (config) {
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  return response.data;
}, (error) => {
  return Promise.reject(error);
});

export default http;