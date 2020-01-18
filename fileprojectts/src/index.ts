import {MatchResult} from "./MatchResult";
import {MatchReader} from "./MatchReader";
import {Record} from "./MatchReader";
import {WinsConsoleReport} from "./WinsConsoleReport";
import {WinsAnalyzer} from "./WinsAnalyzer";
import {ConsoleReport} from "./ConsoleReport";
import {WinsHtmlReport} from "./WinsHtmlReport";
import {HtmlOutputTarget} from "./HtmlOutputTarget";

const reader = new MatchReader("./football.csv");
reader.read();
const report = new WinsConsoleReport(new WinsAnalyzer("Man United"), new ConsoleReport());
report.generateReport(reader.data);

const htmlReport = new WinsHtmlReport("Man United");
htmlReport.generateReport(reader.data);
