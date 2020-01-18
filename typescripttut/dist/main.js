"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const yargs_1 = __importDefault(require("yargs"));
const fs_1 = __importDefault(require("fs"));
const argv = yargs_1.default
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
        fs_1.default.readFile("notes.json", (error, data) => {
            data = data || "[]";
            const loaded = JSON.parse(data.toString());
            const present = loaded.filter((el) => el.title == argv.title).length > 0 ? true : false;
            if (present) {
                console.log("Error! Title with that name exists...");
                return;
            }
            loaded.push(output);
            fs_1.default.writeFile("notes.json", JSON.stringify(loaded), (error) => {
                console.log("Note appended successfully");
            });
        });
    }
})
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
        fs_1.default.readFile("notes.json", (error, data) => {
            data = data || "[]";
            console.log(`Attempting to remove ${args.title}`);
            let loaded = JSON.parse(data.toString());
            const originalLength = loaded.length;
            loaded = loaded.filter((el => {
                return el.title != args.title;
            }));
            fs_1.default.writeFile("notes.json", JSON.stringify(loaded), () => {
                if (originalLength - loaded.length > 0) {
                    console.log(chalk_1.default.green("Note removed"));
                }
                else {
                    console.log(chalk_1.default.red("No note removed."));
                }
            });
        });
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
        fs_1.default.readFile("notes.json", (error, data) => {
            data = data || "[]";
            const parsedData = JSON.parse(data.toString());
            let found = false;
            parsedData.forEach((d) => {
                if (d.title == args.title) {
                    console.log(d.title + "\n");
                    console.log(d.body);
                    found = true;
                }
            });
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
        fs_1.default.readFile("notes.json", (error, data) => {
            data = data || "[]";
            data = JSON.parse(data.toString());
            let i = 1;
            data.forEach((d) => console.log(`${i++}. ${d.title}`));
        });
    }
})
    .version("1.1.0").parse();
