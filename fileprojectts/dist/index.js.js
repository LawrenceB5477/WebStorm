"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var contents = fs_1.default.readFileSync("../football.csv").toString();
var lines = contents.split("\n");
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    console.log(line);
}
