const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const mkDown = require("./utilis/generateMarkdown.js");


const questions = [
    {
        type: "input",
        name: "Git",
        message: "Please enter your Github username"
    },
    {
        type: "input",
        name: "title",
        message: "Please enter your project title"
    },
    {
        type: "input",
        name: "proDec",
        message: "Please enter a description of your project"
    },
    {
        type: "list",
        name: "License",
        message: "What license does your droject require?",
        choices: ["GPL 3.0", "MIT", "Apache 2.0", "none"]
    },
    {
        type: "input",
        name: "instDep",
        message: "Command to install dependencies?",
        default: "npm install"
    },
    {
        type: "input",
        name: "useage",
        message: "Please enter anything the user needs to know for this repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "Please enter any information the user needs to know about contributing."
    },
    {
        type: "input",
        name: "test",
        message: "what commands do we need to run a test.",
        default: "npm test"
    }

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
