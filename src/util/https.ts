import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
let https:AxiosInstance|any;
if (process.env.NODE_ENV === "development") {
  https = axios.create({
    baseURL: "http://localhost:8082/blog/", // api 的 base_url
    timeout: 50000, // 请求超时时间
	withCredentials:true
  });
} else {
  // 生产环境下
  https = axios.create({
	baseURL: "http://localhost:8082/blog/",
    timeout: 50000
  });
}
// request 拦截器 axios 的一些配置
https.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    return request;
  },
  (error: any) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
// respone 拦截器 axios 的一些配置
https.interceptors.response.use(
	(response: AxiosResponse) => {return response;},
	(error: any) => {
	    // Do something with request error
	    return Promise.reject(error);
	}
    
);

export default https;