"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var WinsAnalyzer = /** @class */ (function () {
    function WinsAnalyzer(team) {
        this.team = team;
    }
    WinsAnalyzer.prototype.analyze = function (data) {
        var _this = this;
        var wins = 0;
        data.forEach(function (line) {
            if (line[1] == _this.team && line[5] == MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            if (line[2] == _this.team && line[5] == MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        });
        return this.team + " won: " + wins + " games.";
    };
    return WinsAnalyzer;
}());
exports.WinsAnalyzer = WinsAnalyzer;
