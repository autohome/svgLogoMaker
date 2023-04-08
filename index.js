// import rewured functions
const SVG = require('./libs/svg')
const { Circle, Triangle, Square } = require('./libs/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

// inital function to prompt questions
function init() {
    inquirer
    .prompt([
        {
        type: 'input',
        message: 'What text would you like your logo to contain? (max 3 characters)',
        name: 'text',
        },
        {
        type: 'input',
        message: 'What color would you like your text to be? (enter a color keyword or a hexadecimal number)',
        name: 'textcolor',
        },
        {
        type: 'list',
        message: 'What shape would you like in your logo?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
        },
        {
        type: 'input',
        message: 'What color would you like your shape to be? (enter a color keyword or a hexadecimal number)',
        name: 'shapecolor',
        },
    ])
    // sends response to write function
    .then((response) =>
        writeToFile(response))
};

// takes user responses and creates SVG
function writeToFile(data) {

    const svg = new SVG();
    // sets text and text color from user response
    svg.setText(data.text, data.textcolor);
    // if then statement for correct shape
    let userShape;
    if (data.shape === "circle") {
        userShape = new Circle(data.shapecolor);
    } else if (data.shape === "triangle") {
        userShape = new Triangle(data.shapecolor);
    } else if (data.shape === "square") {
        userShape = new Square(data.shapecolor);
    }
    // sets shape color and gives us shape info
    userShape.setColor(data.shapecolor);
    svg.setShape(userShape)
    // write SVG and success message
    fs.writeFile('logo.svg', svg.render(), (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
);
}

init();
