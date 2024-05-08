const episodesLists = document.querySelector('.episodes__lists');

function createCard(episod) {
    return `
<img src="${episod.img}" alt="cover">
<div class="episodes__info">
    <div class="episodes__ep">
        ${episod.ep}
    </div>
    <div class="episodes__name">${episod.name}</div>
    <div class="episodes__description">
        ${episod.description}
    </div>
    <div class="episodes__host">
        Hosted by:
    </div>
</div>
`
}

function createCards(data) {
    return data.map(episod => {
        const li = document.createElement('li');
        li.classList.add('episodes__list');
        li.insertAdjacentHTML('beforeend', createCard(episod));
        console.log(li)
        return li
    })
}

export function renderCards(data) {
    episodesLists.textContent = '';
    const cards = createCards(data);
    episodesLists.append(...cards)
}
