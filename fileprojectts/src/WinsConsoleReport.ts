import {AbstractReportGenerator} from "./AbstractReportGenerator";
import {Record} from "./MatchReader";
import {WinsAnalyzer} from "./WinsAnalyzer";
import {ConsoleReport} from "./ConsoleReport";

export class WinsConsoleReport extends AbstractReportGenerator<Record> {
    constructor(analyzer: WinsAnalyzer, outputReport: ConsoleReport) {
        super(analyzer, outputReport);
    }

}