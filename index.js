// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },

    {
        type: 'input',
        name: 'github',
        message: 'GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file has been generated');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();

