// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  ${data.project}
 
  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Questions](#Questions)
  * [License](#License)
  ## Installation
  ${data.installation}
 
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
 
  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
  
  ## License
  This Project is licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
