"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
var delay = function (timeout) {
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(true); }, timeout); });
};
exports.delay = delay;
//# sourceMappingURL=delay.js.map