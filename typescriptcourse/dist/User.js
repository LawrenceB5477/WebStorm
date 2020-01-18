"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = __importDefault(require("faker"));
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.default.name.findName();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            lon: parseFloat(faker_1.default.address.longitude())
        };
    }
    User.prototype.describe = function () {
        return "\n            <h1>User</h1>\n            <p>" + this.name + "</p>\n        ";
    };
    return User;
}());
exports.User = User;
