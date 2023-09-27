const images = ['robot.jpg', 'robot2.jpg'];

const carousel = document.querySelector('.carousel');
const interval = setInterval(function() {
    startCarousel();
}, 3000);
let index = 1;

startCarousel = () => {
    carousel.styel.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove('fade');
    void carousel.offsetWidth;
    carousel.classList.add('fade');
    if (index > images.length - 1) index = 0;
}