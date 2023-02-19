// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ## License:
  ​[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)(http://shields.io/)
​
## Table of Contents 
* [Description](#description)
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing-here-is-a-header)
​
* [Tests](#tests)
​
* [Questions](#questions)
​
## Description:
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## License
${data.License}
## Contributors
${data.Contributors}

## Tests
${data.Tests}

## Questions
${data.Questions}


`;
}

module.exports = generateMarkdown;
