function generateMarkdown(data) {
  return `
# ${data.title}
[![Generic badge](https://img.shields.io/badge/<ReadMe>-<Made!>-<green>.svg)](https://shields.io/)
## Dsecription

${data.proDec}

## Legend
* [Installation](#installation)
* [Usage](#usage)
* [License](#licence)
* [Contribution](#contribution)
* [Testing](#testing)

## Installation
Dependencies to install before use
${data.instDep}
## Useage
${data.useage}
##License
${data.license}
## Dependencies
${data.instDep}
## Testing
${data.test}

## Problems??
<img src="${data.avatar_url}" alt="zachs github avatar"
style="border-radius: 16px" width="30"/>

Please contact me with any issues:
${data.git} @ ${data.email}
`;
}

module.exports = generateMarkdown;
