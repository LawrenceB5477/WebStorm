import {OutputTarget} from "./AbstractReportGenerator";

export class ConsoleReport implements OutputTarget {
    print(data: string): void {
        console.log(data); 
    }

}