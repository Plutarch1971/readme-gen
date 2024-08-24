// Generate Table of Contents based on selected sections

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = { 
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    None: ''
  };
  if (!license) {
    return '';
  }
  return licenses[license];
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = { 
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause',
    None: ''
  };
  if (!license) {
    return '';
  }
  return licenses[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // let tableOfContents = '';
  
  // if (data.toc.includes('Installation')) {
  //     tableOfContents += '- [Installation](#installation)\n';
  // }
  // if (data.toc.includes('Usage')){
  //     tableOfContents += '- [Usage](#usage)\n';
  // }
  // if (data.toc.includes('Contributing')) {
  //     tableOfContents += '- [Contributing](#contributing)\n';
  // }
  // if (data.toc.includes('Tests')) {
  //     tableOfContents += '- [Tests](#tests)\n';
  // }
  // if (data.toc.includes('License')) {
  //     tableOfContents += '- [License](#license)\n';
  // }
  return (`${renderLicenseBadge(data.license)}<br>
<h1 align="center">${data.title}</h1><br> 
### Description
### ${data.description}
### Table of Contents


### Installation
${data.installation}
 
### Usage
${data.usage}
### Contribution Guidelines
${data.contributing}

### License
${renderLicenseLink(data.license)}<br>

### Questions
If you have any questions, please visit my GitHub profile or email me.
-  GitHub profile:${data.github}<br>
-  Email: ${data.email}<br>

### Screenshots
X-Screenshot: Purpose and Function
    
![Alt text](assets/screenshot/screenshot.png)
  
### Application Video
- x-screencastify`
  );
}

export default generateMarkdown;

