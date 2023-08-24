console.log('Nichole', 37)

console.log(6 + 3, 6 - 3, 6*3, 6/3)

// let fName = prompt('what is your first name?')
// let lName = prompt('what is your last name?')

// console.log(`The users name is ${fName} ${lName}`)

let price = 10
// prompt('Enter a price.')
let result = price * 1.206
console.log(result)


// celsius = prompt('what is the temp in C?')
// console.log(celsius * (9/5) + 32)

let num1 = 5;
let num2 = 3;
let newNum = num1

num1 = num2;
num2 = newNum

// console.log(num1)
// console.log(num2)


let weekDays = 
['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

let userDay = ''
// do {
    // userDay = prompt('Enter a day').toLowerCase() 
// } while (!weekDays.includes(userDay))

// let nextDay = weekDays.indexOf(userDay) + 1

// console.log(weekDays[nextDay])

// let n1 = prompt('enter the first number')
// let n2 = prompt('enter the second number')

// if (n1 === n2) {
//     console.log('they match!')
// } else {
//     (n1 > n2) ? console.log('the first number is larger') :
//     console.log('the second number is greater')
// }


// month number

// let monthNum = 0;

// do {
//     monthNum = Number(prompt('enter a number between 1 and 12'))
// } while (monthNum < 1 || monthNum > 12)

// switch (monthNum) {
//     case 2:
//         console.log(`Month ${monthNum} in the year has 28 days`)
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(`Month ${monthNum} in the year has 31 days`)
//         break;
//     default:
//         console.log(`Month ${monthNum} in the year has 30 days`)
// }


let hour = (+prompt('enter an hour between 0 and 23'))
let minute = (+prompt('enter an minute between 0 and 59'))
let second = (+prompt('enter an second between 0 and 59'))

