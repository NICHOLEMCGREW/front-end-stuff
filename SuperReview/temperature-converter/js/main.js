//Write your pseduo code first! 


document.querySelector('button').addEventListener('click', convert)

function convert() {
 //  get value
 let enteredVal = Number(document.querySelector('input').value)
// convert value c to f
let temp = enteredVal * 1.8 + 32
// show value to user
document.querySelector('h2').innerText = temp;
}


