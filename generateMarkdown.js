let licenseBadge;
let licenceLink;
let licenseSection;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license){
        case "MIT" :
            licenseBadge = "";
            break;
        case "GNU GPLv3" :
            licenseBadge = "";
            break;
        case "Babel" :
            licenseBadge = "";
            break;
        default :
            licenseBadge = "";
    }
    renderLicenseBadge(license, licenseBadge);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license){
        case "MIT" :
            licenseLink = "";
            break;
        case "GNU GPLv3" :
            licenseLink = "";
            break;
        case "Babel" :
            licenseLink = "";
            break;
        default :
            licenseLink = "";
    }
    renderLicenseLink(license, licenseLink);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch (license){
        case "MIT" :
            licenseSection = "";
            break;
        case "GNU GPLv3" :
            licenseSection = "";
            break;
        case "Babel" :
            licenseSection = "";
            break;
        default :
            licenseSection = "";
    }
    renderLicenseSection(license, licenseSection);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;