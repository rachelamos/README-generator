let licenseBadge;
let licenseLink;
let licenseSection;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/License-${license}-green.svg)`;
    } else {
        return "";
    }
    // console.log(licenseBadge);
    // console.log(typeof (license));
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return licenseLink = `(https://choosealicense.com/licenses/mit)`;
    } else if (license === "GNU GPLv3") {
        return licenseLink = `(https://choosealicense.com/licenses/gpl-3.0)`;
    } else if (license === 'Mozilla') {
        return licenseLink = `(https://choosealicense.com/licenses/mpl-2.0)`;
    } else {
        return licenseLink = "";
    };
    console.log(data.licenseLink);
    // switch (license) {
    //     case "MIT":
    //         licenseLink = `(https://choosealicense.com/licenses/mit)`;
    //         break;
    //     case "GNU GPLv3":
    //         licenseLink = `(https://choosealicense.com/licenses/gpl-3.0)`;
    //         break;
    //     case "Mozilla":
    //         licenseLink = `(https://choosealicense.com/licenses/mpl-2.0)`;
    //         break;
    //     default:
    //         licenseLink = "";
    // }
}
// console.log(renderLicenseLink(data.licenseLink));
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseBadge, licenseLink) {
    switch (license) {
        case "MIT":
            licenseSection = `${licenseBadge} ${licenseLink}`;
            break;
        case "GNU GPLv3":
            licenseSection = `${licenseBadge} ${licenseLink}`;
            break;
        case "Babel":
            licenseSection = `${licenseBadge} ${licenseLink}`;
            break;
        default:
            licenseSection = "";
    }
    // console.log(renderLicenseLink(data.licenseLink));
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // let license = renderLicenseBadge(data.license[0]);
    return `# ${data.title}
## Table of Contents

1. [Description](#description)
2. [Installation](#installation-instructions)
3. [Usage](#usage)
4. [Contributing](#contributers)
5. [Tests](#test)

${renderLicenseBadge(data.license)}

### Description
${data.description}

### Installation Instructions
${data.installation}

### Usage
${data.usage}

### Contributers
${data.contribution}

### Test
${data.test}

### Questions
If you have any other questions, you can reach me:
- via email: ${data.email}
- via GitHub: github.com/${data.github}

### License & Copyright
This project is covered under the [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.licenseLink)}).

© ${data.contribution}`;
}

module.exports = generateMarkdown;