import CsvFileReader from "./CsvFileReader";
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";

export type Record = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<Record> {
    processRow(tokens: string[]): Record {
        return [dateStringToDate(tokens[0]), tokens[1],
            tokens[2], parseInt(tokens[3]), parseInt(tokens[4]),
            tokens[5] as MatchResult, tokens[6]];
    }
}