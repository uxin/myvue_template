import axios from "axios"

// 判断路由域名,当有.com时表示上线,反之为开发模式
const baseURL = location.host.indexOf(".com") != -1 ? "" : "/apis";
// const baseURL = location.host.indexOf(".com") != -1||location.port=="8080" ? "" : "/apis";
var instance = axios.create({
    // 设置主机
    baseURL,

    // timeout 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 timeout 的时间，请求将被中断
    timeout: 20000,  //设置超时时间

    // 表示跨域请求时是否需要使用凭证
    withCredentials: true,

    // transformRequest 允许在向服务器发送前，修改请求数据
    // 只能用在 PUT, POST 和 PATCH 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }],

    // transformResponse 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }],

    // 返回的数据格式为json格式
    responseType: "json",
})
export default instance;
