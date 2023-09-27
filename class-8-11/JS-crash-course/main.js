// const s = 'technology, computers, it, code';

// console.log(s.split(', '))

// const numbers = new Array(1,2,3,4,5);

// const fruits = ['apples', 'oranges', 'pears', 10, true];

// fruits[3] = 'grapes';

// fruits.push('mangos')
// fruits.unshift('strawberries')
// fruits.pop()

// console.log(fruits.indexOf('oranges'))



// console.log(fruits)

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.hobbies[1])

// const { firstName, lastName, address: { city } } = person;
// console.log(city)

// person.email = 'john@gmail';

const todos = [
    {
        id: 1, 
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting with boss',
        isCompleted: false
    },
    {
        id: 3, 
        text: 'Dentist appt',
        isCompleted: true
    }
];

// console.log(todos[1])

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

// For loop

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// While

// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++
// }

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// for(let todo of todos) {
//     console.log(todo.text);
// }

// forEach, map, filter

// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//     return todo.text;
// })

// console.log(todoText)

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);

// const x = 20;
// const y = 10;

// if(x > 10) {
//     console.log(`x is 10`);
// } else if(x > 10) {
//     console.log(`x is greater than 10`);
// }
// else {
//     console.log(`x is less than 10`)
// }

// if(x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }

// const x = 12;

// const color = x > 10 ? 'red' : 'blue';

// console.log(color)

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//         default:
//         console.log('color is Not red or blue')
//         break;
// }

// function addNums(num1, num2) {
//     return num1 + num2;
// }

// console.log(addNums(5,4));

// const addNums2 = (num1, num2) => num1 + num2;

// console.log(addNums2(5, 5))

// todos.forEach((todo) => console.log(todo))

// Constructor function

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
   
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Class 

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate object
// const person1 = new Person('Nichole', 'McGrew', '10-11-1985');
// const person2 = new Person('Mary', 'Smith', '8-27-2005')

// // console.log(person1.getBirthYear())
// // console.log(person1.getFullName())
// // console.log(person1)

// console.log(person1.getFullName());
// console.log(person1);


// console.log(window);
// Single element selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelectorAll('.item'));

// Multiple element selectors

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// // ul.remove()
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hello'
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log('click');
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bj-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'please enter all fields'
        
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

    // console.log(nameInput.value);
}