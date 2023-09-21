// *Variables*
// Create a variable and console log the value

let num = 5; 
console.log(num)

// Create a variable, add 10 to it, and alert the value

let num2 = 10; 
num2 += 10; 
console.log(num2)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNums(a, b, c, d) {
    let difference = a - b - c - d
    console.log(difference)
}

// Create a function that divides one number by another and returns the remainder

function divideNums(a, b) {
    let remainder = a % b
    console.log(remainder)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNums(a, b) {
    let sum = a + b
    if (sum > 50) {
        console.log('Jumanji')
    }
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThreeNums(a, b, c) {
    let product = a * b * c
    if (product % 3 === 0) {
        console.log('Zebra')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordAndNum2(word, num) {
    for (let i = 0; i < num; i++) {
        console.log(word)
    }
} 

wordAndNum2('hello', 5)