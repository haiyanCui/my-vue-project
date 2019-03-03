import axios from 'axios';

const CONTEXT = process.env.API_HOST;

const service  = axios.create({
    //设置axios请求过期时间
    timeout:3000,
    //设置axios 请求前置路径
    baseURL:CONTEXT,
    //设置axios 允许跨域请求
    withCredentials: true
})
service.interceptors.request.use(config =>{
    // if(store.getters.access_token){
    //     config.headers['Authorization'] = getToken();
    // }
    return config
},
error =>{
    return Promise.reject(error);
}
)
service.interceptors.response.use(response =>{
    
})
export default service
