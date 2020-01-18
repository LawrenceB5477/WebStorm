"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var _a = dateString.split("/"), year = _a[0], month = _a[1], day = _a[2];
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
