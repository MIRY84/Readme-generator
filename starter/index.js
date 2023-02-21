const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is your project title?'
},
{
    type: 'input',
    name: 'Description',
    message: 'What is your project about?'
},
{
    type: 'input',
    name: 'Installation',
    message: 'How do you install your project?'
},
{
    type: 'input',
    name: 'Usage',
    message: 'How do you use it?'
},
{
    type: 'checkbox',
    name: 'License',
    message: 'Which licence are you applying for?',
    choices: ['MIT', 'Apache', 'Mozilla', 'none']
},
{
    type: 'input',
    name: 'Contributors',
    mesage: 'Please list any contributors for the project'

},
{
    type: 'input',
    name: 'Tests',
    message: 'Please follow the link live at:'
},
{
    type: 'input',
    name: 'Email',
    message: 'Please insert you email address and/or github link should you have any questions:'
}

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Your README is ready!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => writeToFile('ExampleREADME.md', answers))
}


// function call to initialize program
init();

