document.querySelector('#check').addEventListener('click', check)

function check() {
    const day = document.querySelector('#day').value.toLowerCase()
    document.querySelector('#result').innerText = day; 

    if (day === "Tuesday".toLowerCase() || day === "Thursday".toLowerCase()) {
        document.querySelector('#result').innerText = 'Class!!!'
    } else if (day === "Saturday".toLowerCase() || day === "Sunday".toLowerCase()) {
        document.querySelector('#result').innerText = "It's the Weekend!!!!"
    } else {
        document.querySelector('#result').innerText = "Borrrring!!"
    }
}