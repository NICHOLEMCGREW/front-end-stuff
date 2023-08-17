// Variables
// Working with variables

let name = "John";
let admin = name;

alert(admin); 

// Giving the right name

let planetName = "Earth";
let userName = "John"; 

// Uppercase const?

// Functions
// Is "else" required?

function checkAge(age) {
    if (age > 18) {
        return true;
    }
        return confirm('did parents allow you?')
}
checkAge(19);

// Rewrite the function using '?' or '||'

function checkAge2(age) {
return (age > 18) ? true : confirm('did parents allow you?');
}    

console.log(checkAge2(19))

function checkAge3(age) {
    return (age > 18) || confirm ('did parents allow you?');
}


// Function min(a, b)

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min2(a, b) {
    return a < b ? a : b;
}


// Function pow(x,n)

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

//   Arrow functions, the basics

// Rewrite with arrow functions

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask("Do you agree?", () => alert("You agreed."), 
() => alert("You canceled the execution."))