let licenseBadge;
let licenseLink;
let licenseSection;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            licenseBadge = "";
            break;
        case "GNU GPLv3":
            licenseBadge = "";
            break;
        case "Babel":
            licenseBadge = "";
            break;
        default:
            licenseBadge = "";
    }
    renderLicenseBadge(license, licenseBadge);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            licenseLink = "";
            break;
        case "GNU GPLv3":
            licenseLink = "";
            break;
        case "Babel":
            licenseLink = "";
            break;
        default:
            licenseLink = "";
    }
    renderLicenseLink(license, licenseLink);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch (license) {
        case "MIT":
            licenseSection = "";
            break;
        case "GNU GPLv3":
            licenseSection = "";
            break;
        case "Babel":
            licenseSection = "";
            break;
        default:
            licenseSection = "";
    }
    renderLicenseSection(license, licenseSection);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}

    ## Table of Contents

    1. [Description](#description)
    2. [Installation](#installation-instructions)
    3. [Usage](#usage)
    4. [Contributing](#contributers)
    5. [Tests](#test)
        
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
    This project is covered under the [${data.license}](LICENSE).

    © ${data.contribution}`;


}

module.exports = generateMarkdown;