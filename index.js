const fs = require('fs');
const SVG = require('./lib/svg.js');
const {
    Circle, Square, Triangle
} = require(`./lib/shapes.js`);
const inquirer = require('inquirer');

function start() {
    inquirer.prompt([
        {
            name: "text",
            type: "input",
            message: "enter a 3 letter logo"
        },
        {
            type: "input",
            name: "text_color",
            message: "what color would you like?"
        }
        ,
        {
            type: "list",
            name: "shape",
            message: "Select a shape",
            choices: ["circle", "square", "triangle"]
        },
        {
            type: "input",
            name: "shape_color",
            message: "what color would you like your shape?"
        }

    ])
    .then(function(data){
        var shape;
        if(data.shape === "circle"){
            shape = new Circle()
        }
        if(data.shape === "square"){
            shape = new Square()

        }
        if(data.shape === "triangle"){
            shape = new Triangle()
        }
      shape.color = data.shape_color  
      const svg = new SVG ();
      svg.settext(data.text, data.text_color)
      return fs.writeFileSync("logo.svg", svg.render())



    })
    const fs = require('fs');

const svgString = `<svg height="210" width="500">
    <text x="0" y="15" fill="blue">sky</text>
</svg>`;

// Save the SVG string to a file
fs.writeFileSync('logo.svg', svgString);

console.log('Logo created successfully!');

}
start()
