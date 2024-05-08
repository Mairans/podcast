const articleLists = document.querySelector('.article__lists');

function createCard(article) {
    return `
    <a href="#">
    <img src="${article.img}" alt="${article.name}">
    <div class="article__info">
        <span class="genre">${article.genre}</span>
        <p class="h2__title article__h2">${article.name}</p>
        <p class="description">
        ${article.description}
        </p>
    </div>
</a>
`
}

function createCards(data) {
    return data.map(article => {
        const li = document.createElement('li');
        li.classList.add('article__list');
        li.insertAdjacentHTML('beforeend', createCard(article));
        console.log(li)
        return li
    })
}

export function renderArticle(dataArticle) {
    articleLists.textContent = '';
    const cards = createCards(dataArticle);
    articleLists.append(...cards)
}
