import axios from 'axios'
const api = axios.create({
    baseURL:'https://rmc.localkooboo.com/',
    timeout:10000
})
// 响应拦截器：直接返回响应的 `data` 部分
api.interceptors.response.use(
    (response) => response.data, // 直接返回 response.data
    (error) => {
        // 如果请求失败，返回错误信息
        return Promise.reject(error);
    }
);

export default api;