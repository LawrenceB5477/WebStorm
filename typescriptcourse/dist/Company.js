"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = __importDefault(require("faker"));
var Company = /** @class */ (function () {
    function Company() {
        this.name = faker_1.default.company.companyName();
        this.catchPhrase = faker_1.default.company.catchPhrase();
        this.location = {
            lon: parseFloat(faker_1.default.address.longitude()),
            lat: parseFloat(faker_1.default.address.latitude())
        };
    }
    Company.prototype.describe = function () {
        return "\n            <h1>Company</h1>\n            <p>" + this.name + "</p>\n            <p>" + this.catchPhrase + "</p>\n        ";
    };
    return Company;
}());
exports.Company = Company;
