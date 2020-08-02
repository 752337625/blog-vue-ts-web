"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
require("./pulgin/element");
require("./assets/css/index.less");
//全局iconfont
require("./assets/fonts/iconfont.css");
require("./pulgin/router");
var vue_simplemde_1 = require("vue-simplemde");
require("simplemde/dist/simplemde.min.css");
vue_1["default"].component('vue-simplemde', vue_simplemde_1["default"]);
vue_1["default"].config.productionTip = false;
process.env.NODE_ENV == 'development' ? window.store = store_1["default"] : '';
process.env.NODE_ENV == 'development' ? window.router = router_1["default"] : '',
    new vue_1["default"]({
        router: router_1["default"],
        store: store_1["default"],
        render: function (h) { return h(App_vue_1["default"]); }
    }).$mount('#app');
