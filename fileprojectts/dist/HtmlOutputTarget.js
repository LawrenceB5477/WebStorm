"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlOutputTarget = /** @class */ (function () {
    function HtmlOutputTarget() {
    }
    HtmlOutputTarget.prototype.print = function (data) {
        var html = "\n            <!DOCTYPE html>\n            <html>\n                <body>\n                    <div>" + data + "</div>\n                </body> \n            </html> \n        ";
        fs_1.default.writeFile("report.html", html, function (error) {
            if (error) {
                console.log(error);
            }
        });
    };
    return HtmlOutputTarget;
}());
exports.HtmlOutputTarget = HtmlOutputTarget;
