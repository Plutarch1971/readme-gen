// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    { type:'input', name: 'title', message: 'What is the title of your project?' },
    { type:'input', name: 'description', message: 'Please provide a description of your project:' },
    { type:'input', name: 'installation', message: 'Please provide installation instructions for your project:' },
    { type:'input', name: 'usage', message: 'Please provide usage information for your project:' },
    { type:'input', name: 'contributing', message: 'Please provide contribution guidelines for your project:' },
    { type: 'list', name: 'license', message: 'Please select a license for your project:', choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'] },
    { type:'input', name: 'tests', message: 'Please provide test instructions for your project:' },
    { type: 'input', name: 'github', message: 'Please provide your GitHub username:' },
    { type: 'input', name: 'email', message: 'Please provide your email address:' },
    //{ type: 'link', name: 'image', message: 'Please provide a link to your project screenshot:' },
    // Prompt for table of contents sections
   { type: 'checkbox', name: 'toc', message: 'Select the sections to include in the Table of Contents:', choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'License'] }
];
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    console.log(markdown);
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('README.md created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();
