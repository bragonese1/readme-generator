
// Used https://shields.io/badges to help create badges.
// function for rendering the license badge based on the type of license
function renderLicenseBadge(license) {
  if (license.toLowerCase() === 'mit') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)'; // Returning MIT badge license
  } else if (license.toLowerCase() === 'apache') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-green.svg)'; // Returning Apache badge license
  } else if (license.toLowerCase() === 'gpl') {
    return '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-yellow.svg)'; // Returning GPL license badge
  } else {
    return ''; // For unknow license return blank
  }
}

// Links to badge websites
function renderLicenseLink(license) {
  switch (license.toLowerCase()) { //Returns the license links based on the license type
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


// Function that renders the selected license to the license sections of the readme
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';// returning blank if no license is selected
  }
  return `The following license was used: [${renderLicenseBadge(license)}](${renderLicenseLink(license)}).`; // returning string following the selected license badge and link
}

// Function that generates the Markdown based on the data that was inputted by the user
function generateMarkdown(data) {

  // Using template literal to bring in the data for the readme
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

module.exports = generateMarkdown; // exporting the markdown