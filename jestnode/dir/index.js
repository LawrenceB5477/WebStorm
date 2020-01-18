"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (accum, current) { return accum + current; }, 0);
};
console.log(exports.sumArray.apply(void 0, [1, 2, 3, 4, 5]));
//test
exports.filterByTerm = function (objects, keyword) {
    return objects.filter(function (object) {
        if ("url" in object) {
            var url = object.url;
            if (url.indexOf(keyword) != -1) {
                return true;
            }
        }
        return false;
    });
};
