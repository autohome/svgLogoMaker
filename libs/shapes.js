// shape constructor
class Shape {
    constructor(color) {
        this.color = color
    }

    setColor(color) {
        this.color = color
    }
}

// Demonstrates inheritance
class Circle extends Shape {
    constructor (color) {
        super(color);}
    // polymorphism
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
    
}

class Triangle extends Shape {
    constructor (color) {
        super(color);}
    // polymorphism
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor (color) {
        super(color);}
    // polymorphism
    render () {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}



module.exports = { Circle, Triangle, Square };