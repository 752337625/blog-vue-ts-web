"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var state_1 = require("./state");
var mutations_1 = require("./mutations");
var actions_1 = require("./actions");
var getters_1 = require("./getters");
vue_1["default"].use(vuex_1["default"]);
exports["default"] = new vuex_1["default"].Store({
    state: state_1["default"],
    mutations: mutations_1["default"],
    actions: actions_1["default"],
    getters: getters_1["default"],
    modules: {}
});
