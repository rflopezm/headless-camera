"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPIO = void 0;
exports.GPIO = {
    read: function () {
        console.log("GPIO READ");
        return 0;
    },
    write: function (val) {
        console.log("GPIO WRITE " + val);
    },
    unexport: function () {
        console.log('UNEXPORT GPIO');
    },
};
//# sourceMappingURL=GPIO_MOCK.js.map