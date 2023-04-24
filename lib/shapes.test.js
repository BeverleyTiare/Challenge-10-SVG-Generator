const {
    Circle, Square, Triangle
} = require('./shapes');
test ('Circle', () => {
    const circle = new Circle('red', 'A', 'blue');
    expect(circle.render()).toBe(`<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" height=\"300\" width=\"200\">
        <circle cx=\"90\" cy=\"90\" r=\"90\" stroke=\"red\" stroke-width=\"3\" fill=\"red\" />
        <text x=\"90\" y=\"90\" fill=\"blue\" text-anchor=\"middle\" alignment-baseline=\"middle\" font-size=\"90\">A</text>
        </svg>`);
});


test('Square', () => {
    const square = new Square('blue', 'B', 'white');
    expect(square.render()).toBe(`<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" height=\"300\" width=\"200\">
        <rect width=\"180\" height=\"150\" style=\"fill:blue;stroke-width:3;stroke:rgb(0,0,0)\" />
        <text x=\"90\" y=\"90\"  fill=\"white\" text-anchor=\"middle\" alignment-baseline=\"middle\" font-size=\"90\">B</text>
        </svg>`);
});

test('Triangle', () => {
    const triangle = new Triangle('green', 'C', 'white');
    expect(triangle.render()).toBe(`<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" height=\"300\" width=\"200\">
        <polygon points=\"100 30, 200 200, 0 200\" style=\"fill:green;stroke-width:3;stroke:rgb(0,0,0)\" />
        <text x=\"100\" y=\"150\" fill=\"white\" text-anchor=\"middle\" alignment-baseline=\"middle\" font-size=\"70\">C</text>
        </svg>`);
});

