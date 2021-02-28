const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is needed to use this application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would a user utilize this application?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How should a user test this application?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your project',
            choices: ['MIT', 'GNU GPLv3', 'Babel'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
          },
    ])
    .then(answers => {

    })
    // .catch(error => {
    //     if(error.isTtyError) {
    //         else{

    //         }
    //     }
    // });

