// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./generateMarkdown.js");
// const util = require('util');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Write a description of your project.', 'Provide installation instructions.', 'How do you use your project?', 'Who contributed to your project?', 'Run tests here.', 'Choose a license for your project', 'Enter your GitHub Username', 'Enter your email address.']
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
            choices: ['MIT', 'GNU GPLv3', 'Babel'],
        },
        // {   // Badge
        //     type: 'input',
        //     name: 'badge',
        //     message: ''
        // },
        {   // GitHub Username
            type: 'input',
            name: 'github',
            message: questions[7],
        },
        {   // Email Address
            type: 'input',
            name: 'email',
            message: questions[9],
        },
    ])
    .then((data) => {
        let getBadge = markdown.renderLicenseBadge(data.license);
        let markdownInputs = markdown.generateMarkdown(data);

        writeToFile("README.md", markdownInputs)
    })
};

// const readmeFile = (answers) =>
// `# ${answers.title}

// ## Table of Contents

// 1. [Description](#description)
// 2. [Installation](#installation-instructions)
// 3. [Usage](#usage)
// 4. [Contributing](#contributers)
// 5. [Tests](#test)
    
// ### Description
// ${answers.description}

// ### Installation Instructions
// ${answers.installation}

// ### Usage
// ${answers.usage}

// ### Contributers
// ${answers.contribution}

// ### Test
// ${answers.test}

// ### Questions
// If you have any other questions, you can reach me:
// - via email: ${answers.email}
// - via GitHub: github.com/${answers.github}

// ### License & Copyright
// This project is covered under the [${answers.license}](LICENSE).

// © ${answers.contribution}`;

// const init = () => {
//     questions ()
//         .then((answers) => writeFileAsync('README.md', readmeFile(answers)))
//         .then(() => console.log('Success! Your README file is all set.'))
//         .catch((err) => console.error(err));
// };
// }

// Function call to initialize app
init();