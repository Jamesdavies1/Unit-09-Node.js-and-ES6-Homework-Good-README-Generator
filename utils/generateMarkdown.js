function generateMarkdown(userInputData) {
  return `
# https://github.com/${userInputData.githubuser}

# ${userInputData.title}

# ${userInputData.description}

# ${userInputData.contents}

# ${userInputData.installation}

# ${userInputData.usage}

# ${userInputData.License}

# ${userInputData.contributors}

# ${userInputData.tests}

# ${userInputData.questions}

# ${userInputData.email}
`;
}

module.exports = generateMarkdown;
