import {OutputTarget} from "./AbstractReportGenerator";
import fs from "fs";

export class HtmlOutputTarget implements OutputTarget {
    print(data: string): void {
        const html = `
            <!DOCTYPE html>
            <html>
                <body>
                    <div>${data}</div>
                </body> 
            </html> 
        `;

        fs.writeFile("report.html", html, (error) => {
           if (error) {
               console.log(error);
           }
        });

    }
}