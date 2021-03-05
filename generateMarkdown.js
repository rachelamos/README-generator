// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/License-${license}-green.svg)`;
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "") {
        return `\n[License](#license)\n`;
    } else {
        return "";
    };
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation-instructions)
3. [Usage](#usage)
4. [Contributing](#contributers)
5. [Tests](#test)
6. [Copyright](#copyright)

${renderLicenseLink()}

${renderLicenseBadge(data.license)}

### Description
${data.description}

### Installation Instructions
${data.installation}

### Usage
${data.usage}

### Test
${data.test}

### Questions
If you have any other questions, you can reach me:
- via email: ${data.email}
- via GitHub: https://github.com/${data.github}

### Contributers
${data.contribution}

### License
This project is covered under the ${data.license} license.

### Copyright
© ${data.contribution}`;
}

module.exports = generateMarkdown;