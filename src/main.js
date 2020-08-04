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
require("./pulgin/simplemde");
vue_1["default"].config.productionTip = false;
process.env.NODE_ENV == 'development' ? window.store = store_1["default"] : '';
process.env.NODE_ENV == 'development' ? window.router = router_1["default"] : '',
    new vue_1["default"]({
        router: router_1["default"],
        store: store_1["default"],
        render: function (h) { return h(App_vue_1["default"]); }
    }).$mount('#app');
