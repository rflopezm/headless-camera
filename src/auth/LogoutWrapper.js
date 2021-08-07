"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var AuthProvider_1 = require("./AuthProvider");
var LogoutWrapper = function (_a) {
    var children = _a.children;
    var logout = AuthProvider_1.useAuth().logout;
    var handleHiddenLogout = function () {
        logout();
    };
    return jsx_runtime_1.jsx("div", __assign({ onDoubleClick: handleHiddenLogout }, { children: children }), void 0);
};
exports.LogoutWrapper = LogoutWrapper;
//# sourceMappingURL=LogoutWrapper.js.map