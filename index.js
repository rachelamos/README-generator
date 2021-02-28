const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Command line questions to generate README
const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
    return inquirer.prompt([
        {   // Project Title
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {   // Project Description
            type: 'input',
            name: 'description',
            message: 'Write a description of your project.',
        },
        {   // Installation Instructions
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions.',
        },
        {   // Usage
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
        },
        {   // Contributors
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to your project?',
        },
        {   // Tests
            type: 'input',
            name: 'test',
            message: 'Run tests here.',
        },
        {   // License
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your project',
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
            message: 'Enter your GitHub Username',
        },
        {   // Email Address
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
    ])
};

const readmeFile = (answers) =>
`# ${answers.title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation-instructions)
3. [Usage](#usage)
4. [Contributing](#contributers)
5. [Tests](#test)
    
### Description
${answers.description}

### Installation Instructions
${answers.installation}

### Usage
${answers.usage}

### Contributers
${answers.contribution}

### Test
${answers.test}

### Questions
If you have any other questions, you can reach me:
- via email: ${answers.email}
- via GitHub: github.com/${answers.github}

### License & Copyright
This project is covered under the [${answers.license}](LICENSE).

© ${answers.contribution}`;

const init = () => {
    questions ()
        .then((answers) => writeFileAsync('README.md', readmeFile(answers)))
        .then(() => console.log('Success! Your README file is all set.'))
        .catch((err) => console.error(err));
};

init();

    //     const filename = `${answers.nametoLowerCase().split(' ').join('')}.json`;

    //     fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err)
    //     =>
    //         err ? console.log(err) : console.log('Success!')
    //     );
    // });
    // .catch(error => {
    //     if(error.isTtyError) {
    //         else{

    //         }
    //     }
    // });

