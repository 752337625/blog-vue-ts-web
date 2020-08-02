"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Login = function () { return Promise.resolve().then(function () { return require('@/views/Login.vue'); }); };
var Home = function () { return Promise.resolve().then(function () { return require('@/views/Home.vue'); }); };
var EPage = function () { return Promise.resolve().then(function () { return require('@/views/EPage.vue'); }); };
var IArticle = function () { return Promise.resolve().then(function () { return require('@/base/IArticle.vue'); }); };
var DArticle = function () { return Promise.resolve().then(function () { return require('@/base/DArticle.vue'); }); };
vue_1["default"].use(vue_router_1["default"]);
var routes = [
    {
        path: '*',
        redirect: '/Login'
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/Home/IArticle',
                name: 'IArticle',
                component: IArticle
            },
            {
                path: '/Home/DArticle',
                name: 'DArticle',
                component: DArticle
            }
        ]
    },
    {
        path: '/EPage',
        name: 'EPage',
        component: EPage
    }
];
var router = new vue_router_1["default"]({
    routes: routes
});
exports["default"] = router;
