"use strict";
exports.__esModule = true;
var mutations = {
    SWITHC_ICON: function (state, isCollapse) {
        state.isCollapse = !isCollapse;
    },
    SET_USER_IMG: function (state) {
        state.imgUrl = sessionStorage.getItem("imgURL");
        state.username = sessionStorage.getItem("userName");
    }
};
exports["default"] = mutations;
