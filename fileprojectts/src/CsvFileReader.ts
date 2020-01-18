import fs from "fs";

export default abstract class CsvFileReader<T> {
    data: T[] = [];
    filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    abstract processRow(tokens: string[]): T;

    //I'm assuming that type assertions are how you cast
    read(): void {
        const content = fs.readFileSync(this.filename).toString("utf-8");
        this.data = content.split("\n")
            .map((line: string): string[] => line.split(","))
            .map(this.processRow);
    }
}