document.querySelector('h1').addEventListener('click', checkAge)
const p = document.querySelector('p')

function checkAge() {
    let age = Number(document.querySelector('input').value)
    if (age < 16) {
        p.innerText = 'can not drive'
    } else if (age < 18) {
        p.innerText = "an't hate from outside the club, because they can't even get in"
    } else if (age < 21) {
        p.innerText = 'can not rent cars affordably'
    } else if (age < 30) {
        p.innerText = 'can not rent fancy cars affordably'
    } else if (age > 30) {
        p.innerText = 'there is nothing left to look forward too'
    }
}