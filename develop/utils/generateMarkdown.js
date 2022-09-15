// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  
  ## Description 
  ${data.project}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [License](#License)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This Project is licensed under the ${data.license} license.
  ## Contributing
  ${data.contribution}

${data.github}
${data.email}
${data.description}
${data.license}
`;
}

module.exports = generateMarkdown;