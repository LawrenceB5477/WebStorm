import {Analyzer} from "./AbstractReportGenerator";
import {Record} from "./MatchReader";
import {MatchResult} from "./MatchResult";

export class WinsAnalyzer implements Analyzer<Record> {
    constructor(private team: string) {}

    analyze(data: Record[]): string {
        let wins = 0;

        data.forEach((line: Record): void => {
            if (line[1] == this.team && line[5] == MatchResult.HomeWin) {
                wins++;
            }

            if (line[2] == this.team && line[5] == MatchResult.AwayWin) {
                wins++;
            }
        });

        return `${this.team} won: ${wins} games.`;
    }
}
