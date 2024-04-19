const reviewsContainer = document.querySelector('.reviews-container');
const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');
let i = 0;

function nextMove() {
    i -= 1160;
    reviewsContainer.style.transform = `translateX(${i}px)`;
    arrowPrev.style.pointerEvents = 'auto';
}

function prevMove() {
    if(i === 0) {
        arrowPrev.style.pointerEvents = 'none';
    } else {
        i+= 1160;
        reviewsContainer.style.transform = `translateX(${i}px)`;
    }
}

export function movement() {
    arrowNext.addEventListener('click', nextMove)
    arrowPrev.addEventListener('click', prevMove)
}
