/*
*
*
*
* 封装axios 拦截器
* */
import axios from 'axios';
import store from '../redux/store';
import {message} from 'antd'

const interceptor= axios.create({
    baseURL:"http://localhost:3000/api",
    //超时时间
    timeout:5000
});
//请求拦截器
interceptor.interceptors.request.use(
     (config)=>{
         //公共请求头
         //登录 不用这个请求头 后面处理
         if (store.getState().user) {
             config.headers.authorization=store.getState().user.token

         }
         return config
         },


);

//响应拦截器
interceptor.interceptors.response.use(
     //请求成功

    (response)=>{
        const result=response.data;
             if (result.status===0){
                 return result.data
             } else {
                 //功能失败
                 message.error(result.msg);
                 return Promise.reject(result.msg);
             }
         },

    //请求失败
          (error)=>{
                 console.log(error);
              message.error('网络错误..');
                  return Promise.reject('网络错误');
              }
);
export default interceptor