//created  class called Shape that has a constructor that takes in three parameters: color, text, and textcolor
class Shape
{
    constructor(color, text, textcolor)
    {
        this.color = color;
        this.text = text;
        this.textcolor = textcolor
    }
   
}
//Extended Shape class to create three new classes: Circle, Square, and Triangle
class Circle extends Shape
{
    constructor(color, text, textcolor)
    {
        super(color, text, textcolor);
        
    }
    render()
    {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="300" width="200">
        <circle cx="90" cy="90" r="90" stroke="${this.color}" stroke-width="3" fill="${this.color}" />
        <text x="90" y="90" fill="${this.textcolor}" text-anchor="middle" alignment-baseline="middle" font-size="90">${this.text}</text>
        </svg>`;

    }
}
class Square extends Shape
{
    constructor(color, text, textcolor)
    {   
        super(color, text, textcolor);
    }
    render()
    {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="${300}" width="200">
        <rect width="180" height="150" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)" />
        <text x="90" y="90"  fill="${this.textcolor}" text-anchor="middle" alignment-baseline="middle" font-size="90">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape
{
    constructor(color, text, textcolor)
    {
        super(color, text, textcolor);
    }
    render()
    {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="${300}" width="${200}">
        <polygon points="100 30, 200 200, 0 200" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)" />
        <text x="100" y="150" fill="${this.textcolor}" text-anchor="middle" alignment-baseline="middle" font-size="70">${this.text}</text>
        </svg>`;
    }
}
//Created a module that exports the three classes
module.exports = {Circle, Square, Triangle};

