let arr = ['I', 'go', 'home'];

delete arr[1];

// console.log(arr)

let arr2 = ["I", "study", "JavaScript", "right", "now"]; 

// arr2.splice(0, 3, "Let's", "dance")
// let removed = arr2.splice(0, 2);
arr2.splice(2, 3, "complex", "language")

// console.log(arr2)

let arr3 = [1, 2, 5];

arr3.splice(-1, 0, 3, 4)
// console.log(arr3)

let arr4 = ["t", "e", "s", "t"];
// console.log(arr4.slice(1, 3))
// console.log(arr4.slice(-2))


// console.log(arr4);

let arr5 = [1, 2];

// console.log(arr5.concat([3,4], [5, 6]))

let arr6 = [1, 2];

let arrayLike = {
    0: 'something',
    length: 1
};

// console.log(arr6.concat(arrayLike))

let arr7 = [1, 2];

let arrayLike2 = {
    0: 'something',
    1: 'else',
    [Symbol.isConcatSpreadable] : true,
    length: 2
};

// console.log(arr7.concat(arrayLike2))

let arr8 = [1, 0, false];

// alert(arr8.indexOf(null) )
// alert( arr8.includes(2) )

let fruits = ['Apple', 'Orange', 'Apple']

// console.log( fruits.indexOf('Apple'))
// console.log( fruits.lastIndexOf('Apple'))

const brr = [NaN]
// console.log( brr.indexOf(NaN) )

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  

  let user = users.find(item => item.id == 1);

//   console.log(user.name)
//   console.log(users.findIndex(user => user.name == 'John'))
//   console.log(users.findLastIndex(user => user.name == 'John'))

let someUsers = users.filter(item => item.id < 3)
// console.log(someUsers.length)

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths)

let crr = [ 1, 2, 15 ];
crr.sort();
// console.log(crr)

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let drr = [1, 2, 15]
arr.sort(compare)
// console.log(drr)

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     // console.log( a + " <> " + b)
//     return a -b
// })

let car = [ 1, 25, 15 ];
// car.sort(function(a, b) { return a - b });

car.sort( (a, b) => a - b );
// console.log(car);

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    // console.log(a + " <> " + b);
    return a - b;
});

let barr = [ 1, 2, 15 ];
arr.sort(function(a, b) { return a - b });

barr.sort( (a, b) => a - b );

let countries = ['Österreich', 'Andorra', 'Vietnam'];

// console.log(countries.sort( (a, b) => a > b ? 1 : -1))
// console.log(countries.sort((a, b) => a.localeCompare(b)))

let trr = [1, 2, 3, 4, 5];
trr.reverse(); 

let names = 'Bilbo, Gandalf, Nazgul';

let rrr = names.split(', ');

for (let name of rrr) {
    // console.log(`A message to ${name}.`)
}

let str = 'test';

// console.log(str.split(''))

let marr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str1 = marr.join(';')
// console.log(str1)

let garr = [1, 2, 3, 4, 5];

let result = garr.reverse((sum, current) => sum + current, 0);

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users2 = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];

  let soldiers = users.filter(army.canJoin, army)

//   A cheat sheet of array methods:

// To add/remove elements:

// push(...items) – adds items to the end,
// pop() – extracts an item from the end,
// shift() – extracts an item from the beginning,
// unshift(...items) – adds items to the beginning.
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// To search among elements:

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.
// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// findIndex is like find, but returns the index instead of a value.
// To iterate over elements:

// forEach(func) – calls func for every element, does not return anything.
// To transform the array:

// map(func) – creates a new array from results of calling func for every element.
// sort(func) – sorts the array in-place, then returns it.
// reverse() – reverses the array in-place, then returns it.
// split/join – convert a string to array and back.
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
// Additionally:

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.

function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

// Translate border-left-width to borderLeftWidth

function camelize(str) {
    // let newWord = str.toLowerCase();
    
    return str.replace(/\W+(.)/g, function(match, chr)
{ 
return chr.toUpperCase();
});
}
// console.log(camelize("background-color"))

function camelize2(str) {
    return str.split('-')
    .map((letter, index) => {
        if (/[A-Z]/.test(letter)) {

        }
        return letter
    })
    .join('')
}

// Filter range


let filterRange = (arr, a, b) => {
   return arr.filter((item, i) => {
    val = item;
    if (val < a || val > b) {
        return false;
    }
    return true;
   })
}
arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 50))


// Filter range "in place"

let filterRangeInPlace = (arr, a, b) => {
        return arr.filter((item, i) => {
         val = item;
         if (val <= a || val >= b) {
             return false;
         }
         return true;
        })
}
// console.log(filterRangeInPlace(arr, 2, 8))

// Sort in decreasing order

function decreasingOrder() {
    const arr = [5, 2, 1, -10, 8];
    const newArr = arr.sort((a, b) => (a > b ? -1 : 1));
    return newArr;
}
// console.log(decreasingOrder())


// Copy and sort array

let array = ["HTML", "JavaScript", "CSS"];

function copySorted() {
    let newArr = array.sort().map((x) => x )
    return newArr
}
// console.log(copySorted())

// Create an extendable calculator

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function(str) {
        let split = str.split(' '),
        a = +split[0],
        op = slit[1],
        b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op] (a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };

}


// Map to names

// let john1 = { name: "John", age: 25 };
// let pete1 = { name: "Pete", age: 30 };
// let mary1 = { name: "Mary", age: 28 };

// let users3 = [ john, pete, mary ];

// let names3 = users3.map(item => item.name)

// console.log(names3)

// Map to objects

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users4 = [ john, pete, mary ];

let usersMapped = users4.map(user4 => ({
    fullName: `${user4.name} ${user4.surname}`,
    id: user4.id
}));

console.log(usersMapped[0].fullName)

// Sort users by age

function sortByAge(arr9) {
    arr9.sort((a, b) => a.age - b.age);
}

let john5 = { name: "John", age: 25 };
let pete5 = { name: "Pete", age: 30 };
let mary5 = { name: "Mary", age: 28 };

let arr9 = [ pete, john, mary ];



console.log(sortByAge(arr9));
// alert(arr9[0].name)

// Shuffle an array



function shuffle(nums) {
    return nums.sort(() => Math.random() - 0.5)
}

let nums = [1, 2, 3];

console.log(shuffle(nums))

// function shuffleNums(nums) {
//     for (let i = nums.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
// }

// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };

//   for (let i = 0; i < 1000000; i++) {
//     let nums = [1, 2, 3];
//     shuffle(nums);
//     count[nums.join('')]++
//   }

//   for (let key in count) {
//     alert(`${key}: ${count[key]}`)
//   }
  

// console.log(shuffleNums(nums))


// Get average age



function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let nameArr = [ john, pete, mary ];

console.log(getAverageAge(nameArr))

// let avg = Array.from(nameArr.reduce(
//     (acc, obj) => Object.keys(obj).reduce( 
//         (acc, key) => typeof obj[key] == "number"
//             ? acc.set(key, (acc.get(key) || []).concat(obj[key]))
//             : acc,
//     acc),
// new Map())).reduce( 
//     (acc, [name, values]) =>
//         Object.assign(acc, { [name]: values.reduce( (a,b) => a+b ) / values.length }),
//     {}
// );

// console.log(avg);

// Filter unique array members



function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }
    return result;

  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) );

//   Create keyed object from array

let users3 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users3);

  function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
  }