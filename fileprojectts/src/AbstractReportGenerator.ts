export interface Analyzer<T> {
    analyze(data: T[]): string; 
}

export interface OutputTarget {
    print(data: string): void; 
}

//More or less aggregates an analyzer and a output target to generate a report
export abstract class AbstractReportGenerator<T> {
    private analyzer: Analyzer<T>;
    private outputTarget: OutputTarget;

    protected constructor(analyzer: Analyzer<T>, outputTarget: OutputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }

    generateReport(data: T[]): void {
        this.outputTarget.print(this.analyzer.analyze(data))
    }
}