//This file is the entry point for the application.
const {
    Circle, Square, Triangle
} = require('./lib/shapes');

const fs = require('fs');

//Imported 
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'list',
      message: 'What shape?',
      name: 'shape',
    choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      message: 'What shape color (hex or color name)?',
      name: 'color',
    },
    {
      type: 'input',
      message: 'Text?',
      name: 'text',
    },
    {
        type: 'input',
        message: 'Text color (hex or color name)?',
        name: 'textcolor',
    }
  ])

  //.then method  
  .then((response) => {
  if (response.shape === 'circle') {
        const circle = new Circle(response.color, response.text, response.textcolor);
        fs.writeFileSync('./logo.svg', circle.render());
        console.log('Circle saved to logo.svg');  
    }

    if (response.shape === 'square') {
        const square = new Square(response.color, response.text, response.textcolor);
        fs.writeFileSync('./logo.svg', square.render());
        console.log('Square saved to logo.svg');
    }
    if (response.shape === 'triangle') {
        const triangle = new Triangle(response.color, response.text, response.textcolor);
        fs.writeFileSync('./logo.svg', triangle.render());
        console.log('Triangle saved to logo.svg');
    }
  })
  
    


  



