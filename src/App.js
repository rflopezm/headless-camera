"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var logger_1 = require("./logger");
var react_1 = require("react");
var AuthProvider_1 = require("./auth/AuthProvider");
var ServerMessageProvider_1 = require("./ServerMessageProvider");
function App(_a) {
    var username = _a.username, password = _a.password;
    var _b = AuthProvider_1.useAuth(), user = _b.authState.user, login = _b.login;
    logger_1.logger.info("Rendering " + username);
    react_1.useEffect(function () {
        logger_1.logger.info("Trying to login " + username);
        login({ email: username, password: password });
    }, [username, password, login]);
    if (!user) {
        logger_1.logger.info("No user found " + username);
        return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0);
    }
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsx(ServerMessageProvider_1.ServerMessageProvider, { children: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0) }, void 0) }, void 0));
}
exports.default = App;
//# sourceMappingURL=App.js.map