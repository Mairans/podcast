const carousel = document.querySelector('.carousel');

export function addAnimation() {
    carousel.setAttribute("data-animated", true);

    const carouselInner = document.querySelector('.carousel__inner');
    const carouselContent = Array.from(carouselInner.children);

    carouselContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);

        duplicatedItem.setAttribute = ("aria-hiiden", true)

        carouselInner.appendChild(duplicatedItem);
    });
};
