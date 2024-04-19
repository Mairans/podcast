const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel_container');
let i = -1;
let on = true;
export function move() {
    carouselContainer.style.transform = `translateX(${i}px)`
    if (on) {
        i--;
        if (i === -460) {
            on = false;
        }
    } else {
        i++;
        if (i === 0) {
            on = true;
        }
    }
}
