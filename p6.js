// CIT 281 Project 6
// Garrett Arnold

/*
    *****TEST MODULE*****
    
    SHAPE (PART 4)
        console.log(new Shape([5, 10]).perimeter());  // 15
        console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
        console.log(new Shape().perimeter()); // 0

    RECTANGLE (PART 5)
        console.log(new Rectangle(4, 4).perimeter());  // 16
        console.log(new Rectangle(4, 4).area());  // 16
        console.log(new Rectangle(5, 5).perimeter()); // 20
        console.log(new Rectangle(5, 5).area()); // 25
        console.log(new Rectangle().perimeter()); // 0
        console.log(new Rectangle().area()); // 0

    TRIANGLE (PART 5)
        console.log(new Triangle(3, 4, 5).perimeter());  // 12
        console.log(new Triangle(3, 4, 5).area());  // 6
        console.log(new Triangle().perimeter()); // 0
        console.log(new Triangle().area()); // 0
*/

class Shape {
    constructor(sides = []) {
        this.sides = sides;
    };
    perimeter() {
        return this.sides.length ? this.sides.reduce((x, y) =>  x + y) : 0;
    }
}

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC])
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    } 
    area() {
        const s = (this.sideA + this.sideB + this.sideC) / 2
        return Math.sqrt(s * ((s - this.sideA) * (s - this.sideB) * (s - this.sideC)))
    } 
}

function dataProcessing() {
    const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
    const [a, b, c, d, e] = data;

    // Rectangle
    rPerimeter = new Rectangle(...a).perimeter();
    rArea = new Rectangle(...a).area();
    
    // Square
    sPerimeter = new Rectangle(...b).perimeter();
    sArea = new Rectangle(...b).area();
   
    // Triangle
    tPerimeter = new Triangle(...c).perimeter();
    tArea = new Triangle(...c).area();

    // console statements
    console.log(`Rectangle with sides ${a} has a perimeter of ${rPerimeter} and area of ${rArea}`);
    console.log(`Square with sides ${b} has a perimeter of ${sPerimeter} and area of ${sArea}`);
    console.log(`Triangle with sides ${c} has a perimeter of ${tPerimeter} and area of ${tArea}`);
    console.log(`Shape with ${e.length} side unsupported`)
    console.log(`Shape with ${d.length} side unsupported`)
}
    
dataProcessing()