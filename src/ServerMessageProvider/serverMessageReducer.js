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
exports.ServerMessageReducer = exports.CONNECTION_STATUS = exports.MESSAGES = void 0;
var MESSAGES;
(function (MESSAGES) {
    MESSAGES["OPEN_BARRIER"] = "OPEN_BARRIER";
    MESSAGES["CLOSE_BARRIER"] = "CLOSE_BARRIER";
    MESSAGES["IDLE"] = "IDLE";
})(MESSAGES = exports.MESSAGES || (exports.MESSAGES = {}));
var CONNECTION_STATUS;
(function (CONNECTION_STATUS) {
    CONNECTION_STATUS["CONNECTED"] = "connected";
    CONNECTION_STATUS["DISCONNECTED"] = "disconnected";
    CONNECTION_STATUS["CONNECTING"] = "connecting";
})(CONNECTION_STATUS = exports.CONNECTION_STATUS || (exports.CONNECTION_STATUS = {}));
var ServerMessageReducer = function (state, action) {
    var _a;
    switch (action.type) {
        case 'setConnectionStatus':
            return __assign(__assign({}, state), { status: action.status });
        case 'setError': {
            return __assign(__assign({}, state), { error: (_a = action.error) === null || _a === void 0 ? void 0 : _a.message });
        }
        case 'messageReceived':
            return __assign(__assign({}, state), { messageReceived: action.message, dispatched: false });
        case 'messageDispatched':
            return __assign(__assign({}, state), { dispatched: true });
        default:
            return state;
    }
};
exports.ServerMessageReducer = ServerMessageReducer;
//# sourceMappingURL=serverMessageReducer.js.map