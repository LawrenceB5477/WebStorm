import {AbstractReportGenerator} from "./AbstractReportGenerator";
import {Record} from "./MatchReader";
import {WinsAnalyzer} from "./WinsAnalyzer";
import {HtmlOutputTarget} from "./HtmlOutputTarget";

export class WinsHtmlReport extends AbstractReportGenerator<Record> {
    constructor(team: string) {
        super(new WinsAnalyzer(team), new HtmlOutputTarget());
    }
}