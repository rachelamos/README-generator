// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./generateMarkdown.js");
const path = require('path');
// const util = require('util');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Write a description of your project.', 'Provide installation instructions.', 'How do you use your project?', 'Who contributed to your project?', 'Run tests here.', 'Choose a license for your project', 'Enter your GitHub Username', 'Enter your email address.'];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Your README file is all set.'));
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt([
        {   // Project Title
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {   // Project Description
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {   // Installation Instructions
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {   // Usage
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {   // Contributors
            type: 'input',
            name: 'contribution',
            message: questions[4],
        },
        {   // Tests
            type: 'input',
            name: 'test',
            message: questions[5],
        },
        {   // License
            type: 'checkbox',
            name: 'license',
            message: questions[6],
            choices: ['MIT', 'GNU GPLv3', 'Mozilla'],
        },
        {   // GitHub Username
            type: 'input',
            name: 'github',
            message: questions[7],
        },
        {   // Email Address
            type: 'input',
            name: 'email',
            message: questions[8],
        },
    ])
    .then((data) => {
        // let getBadge = markdown.renderLicenseBadge(data.license);
        // console.log(getBadge);
        // console.log(data);
        writeToFile("yourREADME.md", markdown(data));
    })
    
};

init();