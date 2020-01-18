import {testOne, testTwo} from "./node";
import getNotes from "./notes";
import * as validator from "validator";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import readLine from "readline";
import yargs from "yargs";
import fs from "fs";


const argv = yargs
    .usage("main.js <command> [options]")
    .command({
        command: "add",
        describe: "Add a new note",
        builder: {
            title: {
                demand: true,
                alias: "t",
                describe: "The title of the note",
                type: "string"
            },
            body: {
                demand: true,
                alias: "b",
                describe: "The body of the note",
                type: "string"
            }
        },
        handler: args => {
            console.log(`Adding ${args.title}...`);
            const output = {
                title: args.title,
                body: args.body
            };
            fs.readFile("notes.json", (error, data) => {
                data = data || "[]";
                const loaded: any[] = JSON.parse(data.toString());
                const present = loaded.filter((el) => el.title == argv.title).length > 0 ? true : false;
                if (present) {
                    console.log("Error! Title with that name exists...");
                    return;
                }
                loaded.push(output);
                fs.writeFile("notes.json", JSON.stringify(loaded), (error) => {
                   console.log("Note appended successfully");
                });
            });
        }})
    .command({
        command: "delete",
        describe: "Delete a note",
        builder: {
            title: {
                required: true,
                describe: "The title you wish to remove",
                type: "string",
                alias: "t"
            }
        },
        handler: args => {
            fs.readFile("notes.json", (error, data) => {
                    data = data || "[]";
                    console.log(`Attempting to remove ${args.title}`);
                    let loaded: any[] = JSON.parse(data.toString());
                    const originalLength = loaded.length;
                    loaded = loaded.filter((el => {
                        return el.title != args.title
                    }));
                    fs.writeFile("notes.json", JSON.stringify(loaded), () => {
                        if (originalLength - loaded.length > 0) {
                            console.log(chalk.green("Note removed"));
                        } else {
                            console.log(chalk.red("No note removed."));
                        }
                    });
                }
            );
        }
    })
    .command({
       command: "read",
       describe: "Read a certain note.",
        builder: {
           title: {
               required: true,
               type: "string",
               describe: "The title of the note to read"
           }
        },
       handler: args => {
           console.log("Reading note...");
           fs.readFile("notes.json", (error, data: Buffer) => {
               data = data || "[]";
               const parsedData = JSON.parse(data.toString());
               let found = false;
               parsedData.forEach((d: any) => {
                   if (d.title == args.title) {
                       console.log(d.title + "\n");
                       console.log(d.body);
                       found = true;
                   }
               })
               if (!found) {
                   console.log("Could not find note");
               }
           });
       }
    })
    .command({
       command: "list",
       describe: "List all notes",
       handler: args => {
           fs.readFile("notes.json", (error, data) => {
               data = data || "[]";
               data = JSON.parse(data.toString());
               let i = 1;
               data.forEach((d: any) => console.log(`${i++}. ${d.title}`));
           });
       }
    })
    .version("1.1.0").parse();






