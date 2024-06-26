// Required modules and importing the markdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions for the user when the inquirer prompt is initiated
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
        name: 'links',
        message: 'Provide the links to your project:',
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


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err); //  logging any errors
            return;
        }
        console.log('README.md file has been generated'); // logging a message if successful
    });
}

// function to initialize application
function init() {
    inquirer.prompt(questions) // prompting the questions for the user
        .then((answers) => {
            const markdownContent = generateMarkdown(answers); // generating the markdown based on the user's answers
            writeToFile('README.md', markdownContent); // write readme file
        })
        .catch((error) => {
            console.error(error); // logging any errors
        });
}

// initializing application
init();

