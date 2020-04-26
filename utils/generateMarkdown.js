function generateMarkdown(userInputData) {
  return `
# ${userInputData.title}

# ${userInputData.description}

# ${userInputData.contents}

# ${userInputData.installation}

# ${userInputData.usage}

# ${userInputData.License}

# ${userInputData.contributors}

# ${userInputData.tests}

# ${userInputData.questions}

`;
}

module.exports = generateMarkdown;
