"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractReportGenerator_1 = require("./AbstractReportGenerator");
var WinsHtmlReport = /** @class */ (function (_super) {
    __extends(WinsHtmlReport, _super);
    function WinsHtmlReport(analyzer, outputTarget) {
        return _super.call(this, analyzer, outputTarget) || this;
    }
    return WinsHtmlReport;
}(AbstractReportGenerator_1.AbstractReportGenerator));
exports.WinsHtmlReport = WinsHtmlReport;
