const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
];

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "name",
        message: "What is the name of the team member?"
    },
    {
      type: "list",
      name: "role",
      message: "What is the team member's role?",
      choices: ["Engineer", "Intern", "Manager"]
  },{
    type: "input",
    name: "email",
    message: "What is the team member's email?"
},
  ])

  console.log()