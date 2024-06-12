// TODO: Create a function that returns a license badge based on which license is passed in
// Used https://shields.io/badges to help create badges.
function renderLicenseBadge(license) {
  if (license.toLowerCase() === 'mit') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)';
  } else if (license.toLowerCase() === 'apache') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-green.svg)';
  } else if (license.toLowerCase() === 'gpl') {
    return '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-yellow.svg)';
  } else {
    return '';
  }
}

// Links to badge websites
function renderLicenseLink(license) {
  switch (license.toLowerCase()) {
    case 'mit':
      return 'https://opensource.org/licenses/MIT';
    case 'apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'gpl':
      return 'https://www.gnu.org/licenses/gpl-2.0.html';
    default:
      return '';
  }
}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `The following license was used: [${renderLicenseBadge(license)}](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Project Title
${data.title}

## Description
${data.description}

## Table of Contents
* [Install](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributions
${data.contributing}

## Tests
${data.tests}

## Questions
- Contact Me for Questions:
[GitHub](https://github.com/${data.github}) |
[Email](mailto:${data.email})`;

}

module.exports = generateMarkdown;