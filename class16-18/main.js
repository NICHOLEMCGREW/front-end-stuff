let name = "nichole";
let age = 37;

console.log(name, age)

function carousel() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
carousel()

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else if (i % 3 === 0) {
        console.log(`${i} is odd`);
    }
}

let i = 1;
let userInput = parseInt(prompt('enter a number between 1 and 100: '))

while (userInput > 100) {
    userInput = parseInt(prompt('please enter a number between 1 and 100: '))
}
console.log('thank you')

Multiplication table

let num = parseInt(prompt('Enter a number: '));

    for (let i = 1; i <= num; i++) {
       const result = i * num;
       console.log(`${num} * ${i} = ${result}`);
    }

Neither yes nor no 

function askQuestion(question) {
    let answer = parseInt(prompt('enter yes or no: '))
    if (answer.toLowerCase() === "yes") {
        return true;
    } else if (answer.toLowerCase() === "no") {
        return false;
    } else {
        alert("Please enter 'yes' or 'no'");
        return askQuestion(question)
    }
}

console.log(askQuestion('how are you'))

let answer2 = parseInt(prompt('enter yes or no: '))
function yesOrno() {
    if (answer2 === "yes" || answer2 === "no") {
        answer2 = "Great, thank you";
    } else {
        answer2 = parseInt(prompt('enter yes or no: ')) 
    }
}
console.log(yesOrno())

FizzBuzz

function fizzBuzz() {
    // let num;
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if(i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(55)

Write Functions

const hello = (name) => {
    const message = `Hello, ${name}!`;
    return message;
};
console.log(hello('william'))

const hello2 = name => `Hello, ${name}!`;
console.log(hello("Kate"));


Improved hello

function sayHello() {
    let fName = prompt('what is your first name?')
    let lName = prompt('What is your last name?')
    console.log(`Hello, ${fName} ${lName}`)
}

sayHello()

Number squaring

function square1(x) {

}

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
