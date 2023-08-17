// *Variables*
// Create a variable and console log the value

let age = 25

console.log(age);

// Create a variable, add 10 to it, and alert the value

let num = 5;
num = num + 10
console.log(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference


function subtractFourNumbers(n1, n2, n3, n4) {
    let total = n1 - n2 - n3 - n4
    return total;
}

console.log(subtractFourNumbers(200, 2, 4, 6))

// Create a function that divides one number by another and returns the remainder

function divideTwoNums(a, b) {
    let remainder = a / b
    return remainder;
}

console.log(divideTwoNums(40,2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(zebra1, zebra2) {
    let sum = zebra1 + zebra2;
    if (sum > 50) {
        alert("Jumanji")
    }
}
jumanji(30, 50)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebra(r, s, t) {
    let product = r * s * t;
    if (product % 3 === 0) {
        alert('ZEBRA')
    }
}

zebra(1, 3, 10)