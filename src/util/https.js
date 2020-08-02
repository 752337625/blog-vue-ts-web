"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var https;
if (process.env.NODE_ENV === "development") {
    https = axios_1["default"].create({
        baseURL: "http://localhost:8082/blog/",
        timeout: 50000,
        withCredentials: true
    });
}
else {
    // 生产环境下
    https = axios_1["default"].create({
        baseURL: "http://localhost:8082/blog/",
        timeout: 50000
    });
}
// request 拦截器 axios 的一些配置
https.interceptors.request.use(function (request) {
    return request;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// respone 拦截器 axios 的一些配置
https.interceptors.response.use(function (response) { return response; }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
exports["default"] = https;
