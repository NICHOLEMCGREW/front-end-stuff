// The while loop

let num = 1;

while (num <= 5) {
    console.log(num);
    num++;
}

// The for loop

let number; 

for (number = 1; number <= 5; number++) {
    console.log(number);
}

// Carousel


for (let i = 0; i <= 10; i++) {
    console.log(`${i} turns`);
}

let turns = 1;

while (turns <= 10) {
    console.log(`${turns} turns around`);
    turns++;
}

// Parity

// for (let i = prompt('Enter a number'); i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         if (i % 3 === 0) {
//             console.log(`${i} is odd`);
//         }
//     }
// }


// let i = prompt('Enter a number');

// while (i <= 10) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
//     i++
// }

// Input validation

// let userNumber = ;

// for (let i = prompt('Enter a number'); i <= 100; i++) {
//     if (i > 100) {
//         prompt('Enter a number');
//     } else {
//         console.log('50great!')
//     }
// }

// let userInput = parseInt(prompt('Enter a number: '));

// while(userInput >= 101) {
//     userInput = parseInt(prompt('Enter a number: '));
//     userInput++
// }

// for (let i = prompt('Enter a number'); i >= 101; i++) {
//     if (i >= 101) {
//         i = prompt('Enter a number');
//     } 
// }

// while(userInput > 50 ) {
//     userInput = parseInt(prompt('Enter a number: '));
//     userInput++
// }
// && userInput >= 100

// for (let i = prompt('Enter a number'); i++;) {
//     if (i < 50 && i > 100) {
//         prompt('Enter a number');
//     }
// }

// let userInput = prompt('Enter a number: ');
//     while (userInput < 50 || userInput > 100) {
//         userInput = prompt('Enter a number: ');
//         userInput++
//     }
// console.log('success');

// let userNumber = prompt('enter a number to see multiplication table: ');

// for (let i = 1; i <= 10; i++) {
//     const result = i * userNumber;
//     console.log(`${userNumber} * ${i} = ${result}`) 
// }

// for (let i = 1; i <= 10; i++) {
//     const result = i * userNumber;
//     if (userNumber >= 2 && userNumber <= 9) {
//         console.log(`${userNumber} * ${i} = ${result}`) 
//     }
// }

// let yes = 'yes';
// let no = 'no';
// let userText = prompt('enter a word')

// while (i === yes || i === no) {
//     if(userText)
//     i++
// }

// Neither yes nor no
// let answer = ""

// while(answer != "Yes" || answer != "No") {
//     answer = prompt('enter yes or no').toLowerCase()
//     return answer;
//     answer++
// }

// let answer = ""
// while (answer!="YES" && answer!="NO") {
//     answer = prompt("Are you over 16? (Yes or No)").toLowerCase()
// } else {
//     return "awesome"
// }

// let q; 

// while ((q !== "yes") && (q !== "no")) {
//     q = prompt('yes or no')
//     q++
// }


// function yesOrNo() {
//     let question = prompt('yes or no')
//     if (question.toLowerCase() === "yes") {
//         console.log("yes please")
//     } else if (question.toLowerCase() === "no") {
//         console.log('no thank you') 
//     } else {
//         console.log('please answer yes or no')
//     }
// }

// console.log(yesOrNo("yes"))

let answer = prompt("Yes or No");

while (answer.toLowerCase()!= "No") {
    if (answer.toLowerCase() == "Yes") {
        alert(answer);
        break;
    } else {
        alert('please answer yes or no')
    }
}

// FizzBuzz

for (let i = 1; i <= 100; i++) {
    if ( i % 15 === 0) {
        console.log('FizzBuzz')
    } else if(i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i);
    }
}