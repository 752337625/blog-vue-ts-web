"use strict";
exports.__esModule = true;
var mutations = {
    SWITHC_ICON: function (state, isCollapse) {
        state.isCollapse = !isCollapse;
    },
    SET_USER_IMG: function (state) {
        state.imgUrl = sessionStorage.getItem("imgURL");
        state.username = sessionStorage.getItem("userName");
    },
    SET_USER_ID: function (state, id) {
        state.id = id;
    }
};
exports["default"] = mutations;
