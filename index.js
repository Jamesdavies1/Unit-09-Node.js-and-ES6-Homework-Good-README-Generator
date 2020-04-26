const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const fs = require("fs");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

function questions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please begin by adding project title"
      },
      {
        type: "input",
        name: "description",
        message: "Now include a brief project description"
      },
      {
        type: "input",
        name: "contents",
        message: "Add a table of contents"
      },
      {
        type: "input",
        name: "installation",
        message: "Describe the installation process"
      },
      {
        type: "input",
        name: "usage",
        message: "Add the usage for your project"
      },
      {
        type: "input",
        name: "License",
        message: "Please include any licenses"
      },
      {
        type: "input",
        name: "contributors",
        message: "Name your contributors or leave empty if none"
      },
      {
        type: "input",
        name: "tests",
        message: "Please include tests"
      },
      {
        type: "input",
        name: "questions",
        message: "Finally, add any questions"
      }
    ])
    .then(userInputData => {
      console.log(userInputData);
    })
    .catch(console.error());
}

function createReadMe() {
  questions().then() => {
    writeFile()
  }
}
function writeFile(userInputData) {
  fs.writeFileSync("ReadMe.txt", json.stringify(userInputData));
}

createReadMe();
