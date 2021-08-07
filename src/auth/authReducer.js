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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authStateReducer = exports.AUTH_INITIAL_STATE = void 0;
var jwt_decode_1 = __importDefault(require("jwt-decode"));
exports.AUTH_INITIAL_STATE = {
    isInitializing: false,
    token: null,
    user: null,
    error: null,
};
function authStateReducer(state, action) {
    switch (action.type) {
        case 'setError': {
            return __assign(__assign({}, state), { error: action.error });
        }
        case 'setAuthData': {
            if (!action.token) {
                return __assign(__assign({}, state), { token: null, user: null });
            }
            var user = jwt_decode_1.default(action.token);
            return __assign(__assign({}, state), { token: action.token, user: user });
        }
        case 'initialized': {
            return __assign(__assign({}, state), { isInitializing: false });
        }
        default:
            throw new Error('Invalid state in authReducer');
    }
}
exports.authStateReducer = authStateReducer;
//# sourceMappingURL=authReducer.js.map