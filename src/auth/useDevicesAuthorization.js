"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canAllDevice = exports.useDevicesAuthorization = void 0;
var react_1 = require("react");
var react_2 = require("react");
var models_1 = require("../models");
function useDevicesAuthorization(user) {
    var _a = react_2.useState(null), readPerm = _a[0], setReadPerm = _a[1];
    var _b = react_2.useState(null), createPerm = _b[0], setCreatePerm = _b[1];
    var _c = react_2.useState(null), updatePerm = _c[0], setEditPerm = _c[1];
    var _d = react_2.useState(null), deletePerm = _d[0], setDeletePerm = _d[1];
    react_1.useEffect(function () {
        setDevicePermisionLevels();
    }, [user]);
    var setDevicePermisionLevels = function () {
        var roles = (user || models_1.EMPTY_USER).roles;
        // Reset all roles in change of change or empty user
        setReadPerm(null);
        setCreatePerm(null);
        setEditPerm(null);
        setDeletePerm(null);
        if (roles.includes('DeviceManager')) {
            setReadPerm('all');
            setCreatePerm('all');
            setEditPerm('all');
            setDeletePerm('all');
        }
    };
    return { readPerm: readPerm, createPerm: createPerm, updatePerm: updatePerm, deletePerm: deletePerm };
}
exports.useDevicesAuthorization = useDevicesAuthorization;
function canAllDevice(operation, permission) {
    if (operation === 'read' &&
        ['all'].includes(permission)) {
        return true;
    }
    if (operation === 'update' &&
        ['all'].includes(permission)) {
        return true;
    }
    return false;
}
exports.canAllDevice = canAllDevice;
//# sourceMappingURL=useDevicesAuthorization.js.map