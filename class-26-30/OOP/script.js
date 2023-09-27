
// // Factory Function
// // function createCircle(radius) {
// //     return {
// //         radius, 
// //         draw: function() {
// //             console.log('draw')
// //         }
// //     };
// // }

// // const circle = createCircle(1)
// // circle.draw();

// // Constructor Function
// function Circle(radius) {
//     console.log('this', this);
//     this.radius = radius;
//     this.draw = function() {
//         console.log('drawing')
//     }
// }

// // const Circle1 = new Function('radius', `this.radius = radius;
// // this.draw = function() {
// //     console.log('drawing')
// // }`)

// // const circle = new Circle(1) 


// Circle.call({}, 1)
// Circle.apply({}, [1,2,3])

// const another = new Circle(5);

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// let obj = { value: 10};

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj)

function Circle(radius) {
        this.radius = radius;

        let defaultLocation = { x: 0, y: 0 };

        this.getDefaultLocation = function() {
            return defaultLocation;
        };
        // let computeOptimumLocation = function(factor) {

        // }
        this.draw = function() {
            computeOptimumLocation(0.1);

            // defaultLocation
            // this.radius
            console.log('draw')
        };

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

    const circle = new Circle(10);
    circle.getDefaultLocation();
    circle.location = { x: 1 };
circle.defaultLocation
    const propertyName = 'location';
    circle[propertyName] = { x: 1 };

    delete circle.location

    for (let key in circle) {
        if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
    }

    const keys = Object.keys(circle);
    console.log(keys)

    if ('radius' in circle)
    console.log('Circle has a radius.');