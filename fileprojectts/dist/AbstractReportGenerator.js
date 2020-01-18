"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//More or less aggregates an analyzer and a output target to generate a report
var AbstractReportGenerator = /** @class */ (function () {
    function AbstractReportGenerator(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    AbstractReportGenerator.prototype.generateReport = function (data) {
        this.outputTarget.print(this.analyzer.analyze(data));
    };
    return AbstractReportGenerator;
}());
exports.AbstractReportGenerator = AbstractReportGenerator;
