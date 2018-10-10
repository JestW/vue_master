import axios from 'axios'
import { BaseUrl } from "../config";
import store from '@/store'

class HttpRequest {
    constructor (baseUrl = BaseUrl) {
        this.baseUrl = BaseUrl;
        this.queue = {}
    }
    // 通过这个方法返回一个全局的内部配置
    getInsideConfig () {
        const config = {
            url: this.baseUrl,
            headers: {
                // 'Content-Type': 'multipart/form-data'
                'Content-Type':'application/json',
                // "Access-Control-Allow-Headers":"*",
                "auth-token": store.state.TOCKEN
            }
        };
        debugger
        return config
    }
    // 拦截器,对全局进行一个请求响应的拦截
    interceptors (instance) {
        // 请求拦截器
        instance.interceptors.request.use(config => {
            // 这里可以添加一个全局的loading
            // Spin组件 Spin.show();
            return config // 把config return出去请求就会继续
        }, error => {
            // 请求出现错误的时候会出现一个错误信息
            return promise.reject(error);// 这是把这个错误信息返回
        });
        // 响应拦截器
        instance.interceptors.response.use(res => {
            console.log(res);
            return res
        }, error => {
            return Promise.reject(error)
        })
    }
    //
    request (options) {
        // 首先我们用axios创建一个实例
        const instance = axios.create();
        options = Object.assign( this.getInsideConfig(), options );
        this.interceptors(instance);
        return instance(options)
    }
}
export default HttpRequest
