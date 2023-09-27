//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNumsAndAlert(a, b) {
    alert(a - b);
}
// subTwoNumsAndAlert(40, 39)

//create a function that divides three numbers and console logs the quotient

function divideThreeNums(num1, num2, num3) {
    console.log(num1 / num2 / num3);
}
// divideThreeNums(12,4,3)

//create a function that multiplys three numbers and returns the product

function multiplyThreeNums(c, d, e) {
    let product = c * d * e;
    return product
}

console.log(multiplyThreeNums(5,10,3))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function math(bob, bobb, bobbb) {
    return (bob + bobb) % bobbb;
}

console.log(math(55, 3, 4))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNumbers(a, b, c, d) {
    let productFirstTwoNums = a * b
    if(productFirstTwoNums > 100) {
        let sum = productFirstTwoNums + c + d;
        console.log(sum);
    } else if(productFirstTwoNums < 100) {
        let difference = productFirstTwoNums - c - d;
        console.log(difference)
    }
}