// Tasks
// Hello, object

let user = {
    name: 'John',
    surname: 'Smith',
}

user.name = 'Pete'
delete user.name
console.log(user)

// Check for emptiness

let schedule = {
    wake: '8:30',
};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(schedule))

// Sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

console.log(Object.values(salaries).reduce((acc, curr) => acc + curr, 0))

// OR 

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum)


// Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(menu) {
    for (let key in menu) {
      if (typeof menu[key] == 'number') {
        menu[key] *= 2;
      }
    }
  }

  console.log(multiplyNumeric())
console.log(menu)
