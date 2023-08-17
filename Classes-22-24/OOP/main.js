let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

const circle = {
    radius: 1, 
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw()

// Factory Function
// If you return an object in the function, it is a Factory Funciton

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw')
        }
    };
} 
const circle2 = createCircle(1);

circle.draw();

// Constructor Function 
// If you use the 'this' keyword along with the 'new' operator, it is a Constructor Funciton

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

     let computeOptimumLocation = function(factor) {

    }
    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
            throw new Error('Invalid location.');

            defaultLocation = value;
        }
    });
}

const circle3 = new Circle(10);
// circle3.defaultLocation = 1;
circle.draw();

circle.defaultLocation;

for (let key in circle3) {
    if (typeof circle[key] !== 'function')
    console.log(key, circle3[key]);
}

const keys = Object.keys(circle3);
console.log(keys);

if ('radius' in circle3)
console.log('Circle has a radius')

circle.location = { x: 1 };

const propertyName = 'location';
circle[propertyName] = { x: 1 };

delete circle.location;


let x = { value: 10 };
let y = x;

x.value = 20;

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj)
// console.log(obj)

