const buttons = document.querySelectorAll("[data-carousel-button")

function getDrink() {
    buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button 
        .closest("[data-carousel")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        // delete activeSlide.dataset.active

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks[0].strDrinkThumb)
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        const images = document.querySelector("img").src = data.drinks[0].strDrinkThumb
    })
    })
})
}

getDrink()