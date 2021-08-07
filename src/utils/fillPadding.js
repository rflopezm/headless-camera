"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fillPadding(val, fillTo, filler) {
    if (fillTo - val.length > 0) {
        return new Array(fillTo - val.length).fill(filler).join('') + val;
    }
    return val;
}
exports.default = fillPadding;
//# sourceMappingURL=fillPadding.js.map