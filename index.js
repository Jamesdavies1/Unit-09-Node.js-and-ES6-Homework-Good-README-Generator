const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const fs = require("fs");

function questions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "githubuser",
        message:
          "Firstly, what is your github username? - This is case sensetive."
      },
      {
        type: "input",
        name: "email",
        message: "Thank you. Now provide your email address."
      },
      {
        type: "input",
        name: "title",
        message: "Please add project project title."
      },
      {
        type: "input",
        name: "description",
        message: "Now include a brief project description."
      },
      {
        type: "input",
        name: "contents",
        message: "Add a table of contents."
      },
      {
        type: "input",
        name: "installation",
        message: "Describe the installation process. Eg: npm i"
      },
      {
        type: "input",
        name: "usage",
        message:
          "Add the usage for your project ie: Who will use it and what for."
      },
      {
        type: "input",
        name: "License",
        message: "Please include any licenses or leave empty if none."
      },
      {
        type: "input",
        name: "contributors",
        message: "Name your contributors or leave empty if none."
      },
      {
        type: "input",
        name: "tests",
        message: "Please include any tests or leave empty if none."
      },
      {
        type: "input",
        name: "questions",
        message: "Finally, add any questions..."
      }
    ])
    .then(userInputData => {
      console.log("Your readme has been created!");
      fs.writeFileSync(
        path.join(process.cwd(), "readme.md"),
        generateMarkdown(userInputData)
      );
    })
    .catch(console.error());
}

questions();
