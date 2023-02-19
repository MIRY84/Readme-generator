const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [{
    type:'input',
    name: 'Project Title',
    message:'What is your project title?'
},
{
    type:'input',
    name:'Description',
    message: 'What is your project about?'
},
{
    type:'input',
    name:'Installation',
    message:'How do you install your project?'
},
{
    type: 'input',
    name: 'Usage',
    message:'How do you use it?'
},
{
    type:'checkbox',
    name: 'License',
    message:'Which licence are you applying for?',
    choices: ['MIT', 'Apache', 'Mozilla', 'none']
},
{
    type:'input',
    name:'Contributors',
    mesage:'Please list any contributors for the project'

},
{
    type:'input',
    name:'Tests',
    message:'Please link live url'
},
{
    type:'input',
    name: 'Questions',
    message:'Please insert you email address and github link'
}

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
console.log("Readme")
