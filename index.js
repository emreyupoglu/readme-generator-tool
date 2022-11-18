// TODO: Include packages needed for this application
const fs = require("fs")
const path = require('path');
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "Give description of your project",
        name: "Decription",
    },
    {
        type: "input",
        message: "What is in the table of contents?",
        name: "Table of Contents",
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "Usage",
    },
    {
        type: "input",
        message: "What license do you use?",
        name: "License",
        Choices: ['MIT', 'GPL', 'Apeche', 'Mozilla Public 2.0', 'GNU AGPLv3.0' ]
    },
    {
        type: "input",
        message: "Are there any contributors on this project?",
        name: "Contributing",
    },
    {
        type: "input",
        message: "How do you test this application?",
        name: "Tests",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "Username",
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)
    //return fs.writeFile('./utils/generateMarkdown', questions, (err) =>{}
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(
            
            (answers) => {
                console.log(answers)
                writeFile('README.md', generateMarkdown({...answers}))
            
            }
        
        )
        .then(() => console.log('readme generator'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
