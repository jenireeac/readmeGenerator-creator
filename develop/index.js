// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  "What is your GitHub username?",
  "What is your email address?",
  "What is your project name?",
  "Please enter a short description",
  "Enter the installation instructions:",
  "Enter the usage information",
  "Enter the contribution guidelines:",
  "Choose a license:",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.log(err)
      : console.log("Your README data has been successfully created!");
  });
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: questions[0],
      },
      {
        type: "input",
        name: "email",
        message: questions[1],
      },
      {
        type: "input",
        name: "project",
        message: questions[2],
      },
      {
        type: "input",
        name: "description",
        message: questions[3],
      },
      {
        type: "input",
        name: "installation",
        message: questions[4],
      },
      {
        type: "input",
        name: "usage",
        message: questions[5],
      },
      {
        type: "input",
        name: "contribution",
        message: questions[6],
      },
      {
        type: "list",
        message: questions[7],
        name: "license",
        choices: ["MIT", "GPL v3", "Apache"],
      },
    ])
    .then((data) => {
      console.log(data);
      const markdown = generateMarkdown(data);
      writeToFile("secondREADME.md", markdown);
    });
};

// Function call to initialize app
init();
