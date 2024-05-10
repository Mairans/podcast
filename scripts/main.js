import { addAnimation } from '../helpers/carousel.js'
import { swiper } from '../helpers/slider.js'
import { renderCards } from '../helpers/episodes.js'
import { data, dataArticle } from '../helpers/data.js'
import { renderArticle } from '../helpers/articleCards.js'
import {btnBurger} from '../helpers/burger.js'

function onEntry(entry) {
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.classList.add('element__show')
        } else {
            change.target.classList.remove('element__show')
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.animation__el');

for (const el of elements) {
        observer.observe(el);
}

btnBurger();

renderArticle(dataArticle);
renderCards(data);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

