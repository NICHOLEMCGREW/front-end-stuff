//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNums(a, b) {
    let sum = a - b;
    return sum;
}

console.log(subTwoNums(50,20))



//create a function that divides three numbers and console logs the quotient

function divideThreeNums(n, n1, n2) {
    let quotient = n / n1 / n2
    console.log(quotient)
}
divideThreeNums(90,3, 1)
//create a function that multiplys three numbers and returns the product

function multiThreeNums(a, b, c) {
    let product = a * b * c;
    return product
}
console.log(multiThreeNums(2, 4, 34))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function threeNums(x, y, z) {
    let remainder = (x + y) % z;
    return remainder;
}
console.log(threeNums(3,40, 2))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


function fourNums(a, b, c, d) {
    let product = a * b;
    if (product > 100) {
        console.log(product + c + d)
    } else if (product < 100) {
        console.log(product - c - d)
    } else if (product === 100) {
        console.log(a * b * c) % d;
    }
}