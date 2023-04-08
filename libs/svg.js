const { Circle, Triangle, Square } = require('../libs/shapes');

// SVG class. Puts together all parts
class SVG {
    constructor(text = '', textColor = '', shape = '', color = '') {
        this.text = text;
        this.textColor = textColor
        this.shape = shape;
        this.color = color;
    }
    // Sets text to the SVG 
    setText(text, textColor) {
        if (text.length > 3){
            // error if less than 3 characters
            throw new Error ("Text must not exceed 3 characters.")
            
        }
            this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        
    }
    // adds shape to SVG
    setShape(shape) {
        console.log(this.shape)
        this.shape = shape.render();
    }
    // renders all parts of SVG
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
}
// exports SVG
module.exports = SVG;