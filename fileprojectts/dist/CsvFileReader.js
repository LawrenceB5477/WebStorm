"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.data = [];
        this.filename = filename;
    }
    //I'm assuming that type assertions are how you cast
    CsvFileReader.prototype.read = function () {
        var content = fs_1.default.readFileSync(this.filename).toString("utf-8");
        this.data = content.split("\n")
            .map(function (line) { return line.split(","); })
            .map(this.processRow);
    };
    return CsvFileReader;
}());
exports.default = CsvFileReader;
